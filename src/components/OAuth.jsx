import { FaGoogle } from "react-icons/fa";

export default function OAuth() {
  return (
    <div className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-red-500 px-4 py-2 text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      <span>
        <FaGoogle />
      </span>
      <button type="submit">Continue with Google</button>
    </div>
  );
}
