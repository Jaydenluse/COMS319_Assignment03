import React from "react";

const Header = ({
  showProducts,
  searchQuery,
  onSearchChange,
  isAdmin,
  showAddForm,
  showDeleteForm,
  onToggleProducts,
  onToggleAdmin,
  onToggleAddForm,
  onToggleDeleteForm,
  showInfo,
  isShowingInfo,
}) => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold ">fakestorage.</h1>

        {showProducts && (
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="rounded-full px-3 py-2 ml-6"
          />
        )}
        <div>
          <button
            className={`text-white hover:text-gray-300 ${
              showProducts ? "bg-gray-700" : "bg-blue-700"
            } rounded-full px-3 py-3 transition duration-300 ease-in-out ml-auto mr-3`}
            onClick={onToggleProducts}
          >
            {showProducts ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 448 512"
                className="text-blue-500"
              >
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 448 512"
                className="text-gray-400"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            )}
          </button>
          <button
            className={`text-white hover:text-gray-300 ${
              showDeleteForm ? "bg-gray-700" : "bg-blue-700"
            } rounded-full px-3 py-3 transition duration-300 ease-in-out mr-3`}
            onClick={onToggleDeleteForm}
          >
            {showDeleteForm ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 448 512"
                className="text-blue-500"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 448 512"
                className="text-gray-400"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            )}
          </button>
          <button
            className={`text-black font-bold ${
              showAddForm ? "bg-gray-700" : "bg-blue-700"
            } rounded-full px-3 py-3 transition duration-300 ease-in-out`}
            onClick={onToggleAddForm}
          >
            Add
          </button>
          <button
            className={`text-white hover:text-gray-300 ${
              isAdmin ? "bg-gray-700" : "bg-blue-700"
            } rounded-full px-1.5 py-2 transition duration-300 ease-in-out ml-3`}
            onClick={onToggleAdmin}
          >
            {isAdmin ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12"
                width="12"
                viewBox="0 0 448 512"
                className="text-blue-500"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="12"
                width="12"
                viewBox="0 0 448 512"
                className="text-gray-400"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            )}
          </button>
          {showInfo && (
            <button
              className={`text-white hover:text-gray-300 ${
                isShowingInfo ? "bg-gray-700" : "bg-blue-700"
              } rounded-full px-1.5 py-2 transition duration-300 ease-in-out ml-3`}
              onClick={showInfo}
            >
              {isShowingInfo ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 448 512"
                  className="text-blue-500"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="12"
                  viewBox="0 0 448 512"
                  className="text-gray-400"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
