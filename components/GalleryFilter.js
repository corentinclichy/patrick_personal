import { useState } from "react";

function GalleryFilter() {
  const markupCalendar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );

  const markupSize = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
      />
    </svg>
  );

  const markupAvailable = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
      />
    </svg>
  );

  const chevronRight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  const chevronDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const listOfFilter = [
    {
      name: "Year",
      icon: markupCalendar,
      options: ["2020", "2019", "2018", "All"],
    },
    { name: "Size", icon: markupSize, options: ["S", "M", "L", "All"] },
    {
      name: "Available",
      icon: markupAvailable,
      options: ["Available", "Sold", "All"],
    },
  ];

  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="border border-[1pxs] border-gray-100 rounded bg-gray-50 p-3 my-10 text-gray-600">
      <div
        className={`flex items-center ${filterOpen && "mb-5"} filter-header`}
        onClick={() => setFilterOpen(!filterOpen)}
      >
        <span>Filter</span>
        {filterOpen ? chevronDown : chevronRight}
      </div>
      <div
        className={`flex flex-col justify-between gap-4 filter-content md:flex-row ${
          filterOpen ? "" : "hidden"
        }`}
      >
        {listOfFilter.map((filter) => (
          <div
            className={`flex ${filter.name.toLowerCase()} items-center bg-gray-200 p-2 rounded cursor-pointer flex-1 md:justify-center`}
            key={filter.name}
          >
            {filter.icon}
            <span className="mx-1">{filter.name + ": "}</span>
            <span>{filter.options[2]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryFilter;
