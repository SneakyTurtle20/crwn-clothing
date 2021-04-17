import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IcWQgCM60imVFGAmQF1xHHM0hII2laOkHxIrVd2Fe2sqMPtO2CS1v6YEqYeZ9on0vDEjVXwSsTM7rR01JUs5kOo00mNLFinPt';

   const onToken = token => {
    axios({ 
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token
      }
     }).then(response => {
       alert('Payment sucessful!');
    }).catch(error => {
      console.log('Payment error:', JSON.parse(error));
      alert('There was an issue with your payment. Please make sure you use provided credit card.')
    });
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;