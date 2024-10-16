import { useState } from "react";
import { Link } from "react-router-dom";

import OAuth from "../components/OAuth";
import { toast } from "react-toastify";
import { getAuth, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e){
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email sent.")
    } catch (error) {
      toast.error(error.message)
    }
  } 
  return (
    <section className="flex min-h-[92vh] items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-8 text-center text-3xl font-bold">Sign In</h1>

        <div className="mb-6 flex items-center">
          <img
            src="https://img.freepik.com/premium-vector/illustration-sign-up-log-wireframe-idea-showcasing-various-ui-elements_1278800-10899.jpg?w=740"
            alt="signin-vector"
            className="h-20 w-20 flex-shrink-0 rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold">Welcome Back!</h2>
            <p className="text-gray-600">Please sign in to continue.</p>
          </div>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
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

          <div className="flex flex-wrap justify-between">
            <p className="text-sm">
              Don't have an account{" "}
              <Link className="text-sm text-blue-700 underline" to="/sign-up">
                Sign Up
              </Link>
            </p>
            <p className="text-sm">
              <Link to="/sign-in" className="text-sm text-blue-700 underline">
                Sign in instead
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send Reset Mail
          </button>
          <p className="text-center text-sm font-semibold">OR</p>

          <OAuth />
        </form>
      </div>
    </section>
  );
}
