"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar/SearchBar";
import UserCard from "@/components/UserCard/UserCard";
import Pagination from "@/components/Pagination/Pagination";
import { User } from "@/types/user";

export default function UsersClient({ users }: { users: User[] }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // filter by name/email
  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  // pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / usersPerPage));
  const start = (currentPage - 1) * usersPerPage;
  const paginated = filtered.slice(start, start + usersPerPage);

  return (
    <>
      <div className="mb-4">
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {paginated.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full">
            No users found.
          </p>
        ) : (
          paginated.map((u) => <UserCard key={u.id} user={u} />)
        )}
      </div>

      <div className="mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(p) =>
            setCurrentPage(Math.min(Math.max(1, p), totalPages))
          }
        />
      </div>
    </>
  );
}
