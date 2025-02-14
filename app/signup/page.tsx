"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic (e.g., API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-slate-950 to-gray-950 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8"
      >
        <Card className="p-6 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 shadow-xl rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-lg mb-2">Full Name</label>
              <Input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-lg mb-2">Email Address</label>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 text-lg mb-2">Password</label>
              <Input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
            >
              Sign Up
            </Button>
          </form>
          <p className="text-gray-400 text-center mt-4">
            Already have an account? <Link href="/signin" className="text-violet-400 hover:underline">Sign In</Link>
          </p>
        </Card>
      </motion.div>
    </div>
  );
}