import React from 'react';
import { Link } from "react-router-dom"


export default function App() {
  return (
    <div bgColor='light' className='text-center text-lg-start text-muted' style={{position: "-webkit-sticky", left: 0, bottom: 0, right: 0}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom '>
        <div className='me-5 d-none d-lg-block'>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>QA Cinema 
              </h6>
              <p>
                Experience cinema like never before.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Pages</h6>
              <p>
                <a href='#!' className='text-reset'>
                Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Movies
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Playing Now
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Discussions
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> 123 Oneroad, Two City, AB123 4CD
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                QA_Cinema@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> 44 123 456 789
              </p>
             
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright <br/>
        <a className='text-reset fw-bold'>
          QA Cinema
        </a>
      </div>
    </div>
  );
}