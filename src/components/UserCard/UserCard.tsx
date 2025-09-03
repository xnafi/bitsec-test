"use client"
import React, { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User } from "@/types/user";

const UserCard: FC<{ user: User }> = ({ user }) => {
  return (
    <Link href={`/users/${user.id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="cursor-pointer p-4 border rounded-xl shadow bg-white hover:shadow-lg overflow-hidden"
        role="article"
        aria-label={`Open details for ${user.name}`}
      >
        <h3 className="text-lg font-semibold text-blue-600">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-500">{user.phone}</p>
      </motion.div>
    </Link>
  );
};

export default UserCard;
