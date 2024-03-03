import { AiOutlineSearch } from "react-icons/ai";

function searchBar({ FilterData, onFilterData }) {
  return (
    <section className="relative flex gap-2 items-center">
      <div className="absolute px-4">
        <AiOutlineSearch className="text-gray-500 h-5 w-5" />
      </div>
      <input
        id="contact"
        type="text"
        name="name"
        value={FilterData}
        onChange={(e) => onFilterData(e.target.value)}
        className="ring-1 ring-gray-400 ring-inset focus:ring-2 focus:ring-gray-500 rounded-[12px] py-1 px-12 w-full bg-gray-100"
        placeholder="Search"
      />
    </section>
  );
}

export default searchBar;
