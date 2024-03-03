import data from "../../constant/data";
import React from "react";

const Contact = ({ FilterData, contactList }) => {
  // Merge the initial data with the contacts added through the form
  const allContacts = Array.isArray(contactList)
    ? [...data, ...contactList]
    : data;

  return (
    <main draggable={false}>
      <section className="h-[592px]">
        <ul className="flex flex-col gap-3" draggable={false}>
          {allContacts
            .filter((contact) => {
              const filterText = FilterData.toLowerCase();
              return (
                filterText === "" ||
                contact.name.toLowerCase().includes(filterText) ||
                contact.role.toLowerCase().includes(filterText)
              );
            })
            .map((contact) => (
              <li
                className="flex p-3 gap-6 items-center cursor-pointer hover:bg-slate-100 hover:rounded-lg"
                key={contact.id}
              >
                <img
                  className="w-[40px] h-[40px] rounded-[100%] object-cover object-center"
                  src={contact.image}
                  alt={contact.name}
                />
                <div className="flex flex-col">
                  <p className="text-[16px] font-medium">{contact.name}</p>
                  <p className="text-[14px] font-normal">{contact.role}</p>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Contact;
