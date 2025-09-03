"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { User } from "@/types/user";

interface UserCardProps {
  user: User;
}
const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link href={`/users/${user.id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{
          type: "tween",
          stiffness: 50,
          damping: 200,
          duration: 0.5,
        }}
        className="cursor-pointer p-4 border rounded-xl shadow bg-white hover:shadow-lg overflow-hidden hover:bg-gray-300"
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
