import React from 'react';
import { useCallback, useEffect, useState } from "react";
import WftPage from './WftPage';

const PaymentPage = () => {
    
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');

  const [showModal, setShowModal] = useState(false);
  
  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleCardCVVChange = (e) => {
    setCardCVV(e.target.value);
  };

  const handleCardExpiryChange = (e) => {
    setCardExpiry(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here, you can implement your payment processing logic.
    // You would typically send this data to a payment gateway.
    
    console.log('Card Number:', cardNumber);
    console.log('Card Name:', cardName);
    console.log('Card CVV:', cardCVV);
    console.log('Card Expiry:', cardExpiry);
  };

  const handlePaymentFailure = () => {
    // Show the modal when payment is not successful
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <div className='bg-teal-50'>

     <div className='text-black mt-20 mx-52'>
      <h2>Enter Credit Card Details</h2>
      <form className='h-50 mt-6 ml-20 mr-32 ' onSubmit={handleSubmit}>
        <div className='gap-x-8 gap-y-6 sm:grid-cols-2'>
        <div >
          <label  className='font-semibold leading-6 text-gray-900 text-lg m-6'>Card Number:</label>
          <input className='box w-half rounded-md border-1.5 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div>
          <label className='font-semibold leading-6 text-gray-900 text-lg m-6'>Cardholder Name:</label>
          <input className='box w-half rounded-md border-1.5 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            type="text"
            id="cardName"
            value={cardName}
            onChange={handleCardNameChange}
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label className='font-semibold leading-6 text-gray-900 text-lg m-6'>CVV:</label>
          <input className='box w-half rounded-md border-1.5 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            type="text"
            id="cardCVV"
            value={cardCVV}
            onChange={handleCardCVVChange}
            maxLength="3"
            placeholder="123"
            required
          />
        </div>
        <div>
          <label className='font-semibold leading-6 text-gray-900 text-lg m-6'>Expiration Date:</label>
          <input
            type="text"
            id="cardExpiry"
            value={cardExpiry}
            onChange={handleCardExpiryChange}
            maxLength="7"
            placeholder="MM/YYYY"
            required
          />
        </div>
        </div>
        <button className='m-6 ml-10 mt-2 h-8 w-15 text-sm rounded-md border border-transparent bg-indigo-600 px-3 py-1 text-base font-medium text-white hover:bg-indigo-700' type="submit" onClick={handlePaymentFailure}>Submit Payment</button>
        <WftPage show={showModal} onClose={handleCloseModal} />
      </form>
    </div>
    </div>
  )
}

export default PaymentPage;
