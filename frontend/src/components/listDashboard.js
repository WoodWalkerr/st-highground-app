import React, { Fragment, useEffect, useState } from "react";
import EditDasboard from "./editDashboard";

const ListDasboard = () => {
  const [user, setUser] = useState([]);

  const deleteUser = async (id) => {
    try {
      const deleteUser = await fetch(`http://localhost:8080/api/v1/users/${id}`, 
        {method: "DELETE"
      });

      setUser(user.filter(u => u.id !== id))
    } catch (error) {
      console.error(error.message)
    }
  }

  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/users");
      const jsonData = await response.json();
      setUser(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Fragment>
      <table className="max-w-6xl mx-auto border-collapse border border-slate-400 ...">
        <thead>
          <tr>
            <th className="border border-slate-300 px-10 py-5">Id</th>
            <th className="border border-slate-300 px-10 py-5">Edit</th>
            <th className="border border-slate-300 px-10 py-5">Delete</th>
          </tr>
        </thead>
        <tbody>
  
          {user.map((user) => (
            <tr key={user.id}>
              <td className="text-center">{user.id}</td>
              <td><EditDasboard user={user} /></td>
              <td className="flex justify-center items-center py-4 mx-10">
                <button className="bg-red-500 rounded-md text-white w-20 h-10 from-red-500 to-red-800 font-normal" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListDasboard;