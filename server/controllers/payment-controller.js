const PaymentInfo = require('../paymentInfo/paymentModel.js');

createPaymentInfo = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a PaymentInfo',
        })
    }

    const PaymentInfo = new PaymentInfo(body)

    if (!PaymentInfo) {
        return res.status(400).json({ success: false, error: err })
    }

    PaymentInfo
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: PaymentInfo._id,
                message: 'PaymentInfo created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'PaymentInfo not created!',
            })
        })
}

getPaymentInfoById = async (req, res) => {
    await PaymentInfo.findOne({ _id: req.params.id }, (err, PaymentInfo) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!PaymentInfo) {
            return res
                .status(404)
                .json({ success: false, error: `PaymentInfo not found` })
        }
        return res.status(200).json({ success: true, data: PaymentInfo })
    }).catch(err => console.log(err))
}

module.exports = {
    createPaymentInfo,
    getPaymentInfoById
}