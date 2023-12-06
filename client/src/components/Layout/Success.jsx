import React from 'react';
import axios from "axios";
import { useEventContext} from "../../context/useEventContext";
const PaymentSuccess = () => {
    const { currentEvent } = useEventContext();
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-green-600 mb-4">Payment Successful!</h2>
      <p className="text-gray-700">
        Thank you for your purchase. Your payment was successful. 
      </p>
      {/* Add any additional information or components as needed */}
    </div>
  );
};

export default PaymentSuccess;
