import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "../organisms/ModalContact";

const addContact = ({ onClickAdd }) => {
  return (
    <>
      <button className="absolute bottom-14 right-9 " onClick={onClickAdd}>
        <AiOutlinePlus className="h-[55px] w-[55px] cursor-pointer  rounded-[100%] p-3 bg-[#7ac5fe] text-white hover:bg-sky-300" />
      </button>
    </>
  );
};
export default addContact;
