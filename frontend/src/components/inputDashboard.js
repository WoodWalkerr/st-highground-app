import React, { Fragment, useState } from "react";

const InputDashboard = () => {

  const [user, setUser] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = { user };
      const response = await fetch("http://localhost:8080/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

    window.location = "/";
    } catch (error) {
      console.error(error.message)
    }
  };

  return (
    <Fragment>
      <h1 className="text-center font-bold text-4xl">High Ground App</h1>
      <div className="flex justify-center items-center">
      <form className="flex w-[35%] justify-center my-4" onSubmit={onSubmitForm}>
        
        <input
          type="text"
          className="py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-1"
          placeholder="Enter text here" value={user} onChange={e => setUser(e.target.value)}
        />
        <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Add
        </button>
      </form>
      </div>
    </Fragment>
  );
};

export default InputDashboard;
