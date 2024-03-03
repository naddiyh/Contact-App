import React, { useState } from "react";
import { LiaUserCircleSolid } from "react-icons/lia";
import SearchBar from "./SearchBar";
import ContactList from "./ContactField";
import Add from "../atom/IconAdd";
import ContactForm from "../molecul/ContactForm";
import Modal from "../organisms/ModalContact";
import { AiOutlineClose } from "react-icons/ai";

function ContactCard() {
  const [FilterData, setFilterData] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleIsClosed = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <main className="w-screen h-screen justify-center items-center flex ">
        <section className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-[370px] h-[730px] px-6 py-8 relative flex border-2 border-slate-300 rounded-[50px] flex-col gap-10 bg-white ">
          <header className="flex  flex-col gap-6 ">
            <section className="flex flex-col gap-6 ">
              <div className="flex justify-between">
                <h1 className="font-bold text-text-l">Contacts</h1>
                <LiaUserCircleSolid className="h-10 w-10" />
              </div>
              <SearchBar FilterData={FilterData} onFilterData={setFilterData} />
            </section>
          </header>
          <section className="relative overflow-y-scroll hide-scrollbar">
            <ContactList FilterData={FilterData} />
          </section>
          <Add onClickAdd={handleOpenModal} />
        </section>
        <section className="absolute ">
          {isOpenModal && (
            <Modal
              closeButton={
                <AiOutlineClose
                  className="h-6 w-6 absolute top-6 left-6 cursor-pointer"
                  onClick={handleIsClosed}
                  aria-label="Close"
                />
              }
            >
              <ContactForm />
            </Modal>
          )}
        </section>
      </main>
    </>
  );
}
export default ContactCard;
