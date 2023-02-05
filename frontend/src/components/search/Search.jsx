import { SearchIcon } from "../../../public/assets/svg/Icons";

const Search = ({ handleChange }) => (
  <div className="flex ml-auto rounded-[12px] shadow-lg border-[1px] bg-white max-w-fit">
    <div className="flex self-center px-[1rem]">
      <SearchIcon />
    </div>
    <input
      type="text"
      className="w-[450px] px-[25px] py-[8px] text-[0.8rem] rounded-tr-[12px] rounded-br-[12px]"
      placeholder="Type in here to search for a keyword"
      onChange={handleChange}
    />

    {/* <button className="bg-bac px-[25px] py-[8px] justify-center text-white rounded-tr-[12px] rounded-br-[12px] text-[0.8rem] font-inter not-italic font-bold">
      Search
    </button> */}
  </div>
);

export default Search;
