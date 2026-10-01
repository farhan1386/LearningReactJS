import React from 'react';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    console.log('Processing payment transaction...');
    navigate('/receipt');
  };

  return (
    <div>
      <h2>Secure Payment Terminal</h2>
      <button onClick={handlePayment}>Authorize Transaction</button>
    </div>
  );
};

const router = createBrowserRouter([
  { path: '/', element: <CheckoutForm /> },
  { path: '/receipt', element: <p> Transaction processed successfully.</p> }
]);

const ProgrammaticNavigation = () => {
  return <RouterProvider router={router} />;
};

export default ProgrammaticNavigation;
