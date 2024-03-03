import React, { useState } from "react";
import ContactField from "../organisms/ContactField";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [work, setWork] = useState("");
  const [phone, setPhone] = useState("");
  const [contactList, setContactList] = useState([]);

  const addContact = () => {
    if (name && phone && work) {
      setContactList((prevContacts) => [
        ...prevContacts,
        {
          id: Date.now(),
          name: name,
          phone: phone,
          work: work,
        },
      ]);

      setName("");
      setPhone("");
      setWork("");
    }
  };
  ``;

  return (
    <>
      <section className="flex-col gap-5 flex w-full z-50 ">
        <input
          className="px-2 border h-10 rounded-[10px] w-full bg-slate-100"
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="px-2 border h-10 rounded-[10px] w-full bg-slate-100"
          type="text"
          placeholder="Work"
          name="roles"
          value={work}
          onChange={(e) => setWork(e.target.value)}
        />
        <input
          className="px-2 border h-10 rounded-[10px] w-full bg-slate-100"
          type="number"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </section>
      <div className="p-4">
        <button
          type="button"
          onClick={addContact}
          className="p-1 w-20  rounded-[40px] bg-sky-300  hover:opacity-80 text-white"
        >
          Save
        </button>
      </div>

      {/* {contactList.map((contact)=>(
        <ContactField
        key={contact.id}
        contact={contact}
        />
        
      ))} */}
    </>
  );
};
export default ContactForm;
