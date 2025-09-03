"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { User } from "@/types/user";

export default function UserDetailsClient({ user }: { user: User | null }) {
  // if data not found this will appear
  if (!user) {
    return <p className="text-center mt-10 text-gray-600">User not found.</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white p-6 rounded-xl shadow max-w-2xl mx-auto container"
    >
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <p className="mb-1">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="mb-1">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
      <p className="mb-1">
        <span className="font-semibold">Website:</span> {user.website}
      </p>
      {user.company && (
        <p className="mb-1">
          <span className="font-semibold">Company:</span> {user.company.name}
        </p>
      )}
      {user.address && (
        <p className="mb-1">
          <span className="font-semibold">Address:</span> {user.address.street},{" "}
          {user.address.city} {user.address.zipcode}
        </p>
      )}

      <div className="mt-4">
        <Link href="/users">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Back to Users
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
