import React, { Fragment, useState } from 'react';

const EditDashboard = ({ user }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
  const [type, setType] = useState(user?.type || '');

  // update user information
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, phoneNumber, type };
      const response = await fetch(
        `http://localhost:8080/api/v1/users/${user.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );
      window.location = '/';
    } catch (error) {
      console.error(error.message);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setName(user?.name || '');
    setEmail(user?.email || '');
    setPhoneNumber(user?.phoneNumber || '');
    setType(user?.type || '');
  };

  return (
    <Fragment>
      {/* Button to open the modal */}
      <div className="flex justify-center items-center py-4 mx-10">
        <button
          className="bg-green-500 rounded-md text-white w-20 h-10 from-green-500 to-green-800 font-normal"
          onClick={toggleModal}
        >
          Edit
        </button>
      </div>

      {/* Modal code */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg">
              <div className="p-4">
                <h2 className="text-lg font-bold mb-4">Edit user information</h2>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(e) => {
                      toggleModal();
                      updateUser(e);
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default EditDashboard;
