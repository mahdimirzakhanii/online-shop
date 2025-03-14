import { useEffect, useRef, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { PiX } from "react-icons/pi";
import { useSearchParams } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const search = searchParams.get("search");
  // const searchRef = useRef();

  // useEffect(() => {
  //   if (search) {
  //     searchRef.current.value = search;
  //     setTextSearch(search);
  //   }
  // }, [search, setTextSearch]);

  // const handleSearch = (key, value) => {
  //   setTextSearch((prev) => {
  //     if (value === null || value === "") {
  //       prev.delete(key);
  //     } else {
  //       prev.set(key, value);
  //     }
  //     return prev;
  //   });
  // };

  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   handleSearch("search", searchRef.current.value);
  //   setTextSearch(searchRef.current.value);
  // };

  return (
    <div className=" w-full h-screen bg-black/70 flex items-start py-20 justify-center">
      <div className="flex top-20 h-16 p-3 rounded bg-tertiary w-1/2">
        <div className="flex items-center gap-5 justify-between w-full border-2 p-1 rounded-sm border-gold">
          <form
            className="w-full flex items-center"
            //  onSubmit={searchHandler}
          >
            <PiX
              className="text-black text-xl cursor-pointer"
              onClick={() => setShowSearch(false)}
            />
            <input
              // ref={searchRef}
              type="text"
              className="text-black bg-transparent outline-none w-full"
              // onChange={(e) => setTextSearch(e.target.value)}
            />
            <LiaSearchSolid className="text-2xl text-black" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
