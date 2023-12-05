import React from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";

const NotFound = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center h-[40vh] w-full">
        <h1 className="text-4xl text-primary font-bold text-center">404</h1>
        <h2 className="text-2xl font-bold text-center">Page Not Found</h2>
      </div>
    </DefaultLayout>
  );
};

export default NotFound;
