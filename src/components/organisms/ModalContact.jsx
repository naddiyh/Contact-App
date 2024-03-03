import { useState } from "react";
import data from "../../constant/data";
import { BiSolidUserCircle } from "react-icons/bi";

const ContactModal = (props) => {
  const { children, closeButton } = props;
  return (
    <>
      <main className="">
        <section className=" relative rounded-[50px] bg-white w-[370px] h-[730px] z-[99px]">
          <section className="relative py-14 px-6 flex flex-col gap-10 items-center">
            {closeButton}
            <h2 className="text-text-l font-bold">Add Contact</h2>
            <BiSolidUserCircle
              className="h-28 w-28 text-slate-400"
              alt="User Icon"
            />
            {children}
          </section>
        </section>
      </main>
    </>
  );
};

export default ContactModal;
