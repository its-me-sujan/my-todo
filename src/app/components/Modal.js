import React from "react";

const Modal = ({
  showModal,
  setShowModal,
  editedTodo,
  handleInputChange,
  handleSave,
}) => {
  return (
    showModal && (
      <div className="modal max-w-sm mt-4 md:mt-0 md:ml-3 border border-black rounded-lg">
        <div className="modal-content relative p-3">
          <h2 className="text-center">Edit Todo</h2>
          <span
            className="close absolute top-0 right-0 mt-1 mr-2 text-xl text-red-500 hover:text-black cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            &times;
          </span>

          <div className="mb-4">
            Title
            <input
              type="text"
              name="title"
              value={editedTodo.title}
              onChange={handleInputChange}
              className="block w-full border-2 rounded-lg p-2"
            />
          </div>
          <div className="mb-4">
            Description
            <input
              name="description"
              value={editedTodo.description}
              onChange={handleInputChange}
              className="block w-full border-2 rounded-lg p-2"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-14 h-7 rounded-lg bg-sky-500 text-white hover:bg-sky-700"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
