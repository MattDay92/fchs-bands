import React from 'react'
import Header from '../components/images/FCHS-Band-Banner.webp'

export default function Fees() {
    return (
        <div className='main'>
            <div id='hero' className='row other-hero-container'>
                <img className='banner' src={Header} />
                <div className='other-hero-box'>
                    <h1 className='other-hero-title'>Fees and Payments</h1>
                </div>
            </div>
            <div className='fees-info d-flex align-items-center'>
                <div className='col-10 m-auto text-center'>
                    <h5 className='mb-5'>The Franklin Community High School Band Boosters are now able to accept online
                        fee payments. If you have any questions,
                        please contact our booster treasurer at treasurer@franklinbands.info.</h5>
                    <div className='mb-5 buttons'>
                        <a className='btn' href='http://localhost:3000/2022-2023-General-Fee-Letter.pdf' download>General Fee Information</a>
                        <a className='btn' href='http://localhost:3000/\2023-Marching-Fee-Letter.pdf' download>Marching Fee Information</a>
                    </div>
                    <form action="https://ezauth.transactiongateway.com/cart/cart.php" method="POST">
                        <input type="hidden" name="key_id" value="14044617" />
                        <input type="hidden" name="action" value="process_variable" />
                        <input type="hidden" name="order_description" value="Program Fees" />
                        <input type="hidden" name="language" value="en" />
                        <input type="hidden" name="url_finish" value="https://www.franklinbands.info" />
                        <input type="hidden" name="customer_receipt" value="true" />
                        <input type="hidden" name="hash" value="action|order_description|8d4b047862dc451120305058281ee02f" />
                        <input className="btn btn-fees mb-5" type="submit" name="submit" value="Pay Fees Here" />
                    </form>
                    <h3>Fees can also be paid directly from My Music Office - click <a className='musicoffice-link' href='https://mymusicoffice.com/login.php' target='_blank'>HERE</a> to log in.</h3>
                </div>
            </div>
        </div>
    )
}
