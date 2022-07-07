const cors = require("cors");
const router = require("express").Router();
const stripe = require("stripe")("sk_test_51LIDEHJ6kGqR3mxRRTcDeZFpSYl76wwNYMRgviudHmS4kYnIEaCWhZ51c2SewxrTnvqSinEsS9Jyzyb5nwGGsIGS00qj4l0DSM");
const uuid = require("uuid").v4;
 

 
router.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);
 
  let error;
  let status;
  try {
    const { product, token } = req.body;
 
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
 
    const idempotencykey = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.amount * 100,
        currency: "GBP",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased ${product.amount} cinema tickets`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip,
          },
        },
      },
      {
        idempotencyKey: idempotencykey,
      }
    );

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: 'Ticket',
            },
            unit_amount: 100,
          },
          quantity: product.amount,
        },
      ],
      mode: 'payment',
      success_url: "http://localhost:3001/order/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: 'http://localhost:3001/cancel',
    });

    //console.log(session.url)
    res.redirect(303, session.url)

    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }
 
  // res.json({ error, status });
 

});

router.get('/order/success', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  const customer = await stripe.customers.retrieve(session.customer);

  res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);
});
 
module.exports = router;