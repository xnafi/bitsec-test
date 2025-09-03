"use client";
import { FC } from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const SearchBar: FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;
