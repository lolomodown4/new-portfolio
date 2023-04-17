import Modal from "react-modal";
import React from "react";
import { useGlobalContext } from "../hooks/AppContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};

const Sent = () => {
  const { modalOpen, setModalOpen } = useGlobalContext();

  return (
    <div className="App">
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="text-3xl">Your Email has been sent. Thank you!</div>

        <button
          onClick={() => setModalOpen(false)}
          className="p-2 mt-5 rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:bg-gradient-to-l hover:text-pink-500 transition ease-linear delay-150 text-lg"
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
};

export default Sent;
