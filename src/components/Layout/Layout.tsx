import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/users" className="text-xl font-bold text-blue-600">
            User Dashboard
          </Link>
          <nav className="hidden sm:block text-sm text-gray-600">
            <span>Built with Next + Tailwind + Framer Motion</span>
          </nav>
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="max-w-5xl mx-auto px-4 py-6"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
