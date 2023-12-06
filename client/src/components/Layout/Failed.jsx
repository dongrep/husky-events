import React from 'react';

const PaymentFailed = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">Payment Failed</h2>
      <p className="text-gray-700">
        Oops! It seems there was an issue with your payment.
      </p>
      {/* Add any additional information or components as needed */}
    </div>
  );
};

export default PaymentFailed;
