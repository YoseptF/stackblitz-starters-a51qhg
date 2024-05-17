"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { RxMagnifyingGlass } from "react-icons/rx";

const Filter: FC = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const filterFromParams = searchParams.get("filter") || "";

  const [filter, setFilter] = useState(filterFromParams);

  const { push } = useRouter();

  // this probably need a debounce so we only push new routes
  // after user has stopped typing
  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    if(!e.target.value) push("/");
    else push(`/search?filter=${e.target.value}`);
  };

  useEffect(() => {
    if(pathName !== "/search") setFilter("");
  },[pathName]);

  return (
    <div className="flex items-center gap-2 relative w-full">
      <input
        id="filter"
        type="text"
        className="border border-gray-300 rounded-md p-2 pl-9 outline-none w-full"
        placeholder="Type to search..."
        value={filter}
        onChange={handleFilter}
      />
      <RxMagnifyingGlass className="text-gray-400 absolute left-3 font-bold" size={20} />
    </div>
  );
};

export default Filter;