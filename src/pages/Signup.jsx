import { useState } from "react";
import { Link } from "react-router-dom";

import OAuth from "../components/OAuth";

export default function Signup() {
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    password: "",
  });

  const {name, email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <section className="flex min-h-[92vh] items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-center text-3xl font-bold">Sign Up</h1>

        <div className="mb-6 flex items-center">
          <img
            src="https://img.freepik.com/premium-vector/illustration-sign-up-log-wireframe-idea-showcasing-various-ui-elements_1278800-10899.jpg?w=740"
            alt="signin-vector"
            className="h-20 w-20 flex-shrink-0 rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold">Hello There!</h2>
            <p className="text-gray-600">Please sign up to continue.</p>
          </div>
        </div>

        <form className="space-y-4">
        <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Enter Full Name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your Email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter Password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex flex-wrap justify-between">
            <p className="text-sm">
              Already have an account?{" "}
              <Link className="text-sm text-blue-700 underline" to="/sign-in">
                Sign In
              </Link>
            </p>
            <p className="text-sm">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-700 underline"
              >
                Forgot Password
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign Up
          </button>
          <p className="text-center text-sm font-semibold">OR</p>

          <OAuth />
        </form>
      </div>
    </section>
  );
}
