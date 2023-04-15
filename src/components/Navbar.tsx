import { auth } from "@/config/firebase";
import { signOut } from "@firebase/auth";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <>
      {user ? (
        <>
          <div className="shadow bg-white">
            <div className="h-16 mx-auto px-5 flex items-center justify-between">
              <Link
                className="text-lg lg:text-2xl font-semibold hover:text-cyan-500 transition-colors cursor-pointer"
                href="/"
              >
                Share-A-Meal
              </Link>

              <ul className="flex items-center gap-5">
                <li>
                  <Link
                    className="hover:text-cyan-500 transition-colors"
                    href="/post"
                  >
                    <button
                      className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                      type="submit"
                    >
                      Create Post
                    </button>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-cyan-500 transition-colors"
                    href="/browse"
                  >
                    <button
                      className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                      type="submit"
                    >
                      Browse Post
                    </button>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-cyan-500 transition-colors"
                    href="/"
                  >
                    <button
                      className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                      type="submit" onClick={logout}
                    >
                      Logout
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="shadow bg-white">
            <div className="h-16 mx-auto px-2 lg:px-5 flex items-center justify-between">
              <Link
                className="text-lg lg:text-2xl font-semibold hover:text-cyan-500 transition-colors cursor-pointer"
                href="/"
              >
                Share-A-Meal
              </Link>

              <ul className="flex items-center gap-5">
                <li>
                  <Link
                    className="hover:text-cyan-500 transition-colors"
                    href="/signup"
                  >
                    <button
                      className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                      type="submit"
                    >
                      Signup
                    </button>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-cyan-500 transition-colors"
                    href="/login"
                  >
                    <button
                      className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                      type="submit"
                    >
                      Login
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
