'use client'
import { useState } from "react";

export default function ResetPassword({ handleSignUp }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCredentialsValid, setIsCredentialsValid] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsCredentialsValid(e.target.value === password);
  };

  return (
    <div className="w-[70%] flex flex-col gap-2">
      <div
        className="text-left cursor-pointer font-extraBold"
        onClick={handleSignUp}
      >
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_309_2645)">
              <path
                d="M9.69997 18.3C10.09 17.91 10.09 17.28 9.69997 16.89L5.82997 13H21C21.55 13 22 12.55 22 12C22 11.45 21.55 11 21 11H5.82997L9.70997 7.11998C10.1 6.72998 10.1 6.09998 9.70997 5.70998C9.31997 5.31998 8.68997 5.31998 8.29997 5.70998L2.69997 11.3C2.30997 11.69 2.30997 12.32 2.69997 12.71L8.28997 18.3C8.67997 18.68 9.31997 18.68 9.69997 18.3Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_309_2645">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
      <div className="w-full flex flex-col gap-3 py-5">
        <h1 className="text-black font-extrabold text-3xl whitespace-nowrap">
          Create New Password
        </h1>
        <h5 className="text-[#666666] text-sm">
          Yay! your password was Reset. And now you can create a new password.
        </h5>
      </div>
      <form
        className=" flex flex-col justify-around gap-40"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="w-full flex flex-col gap-5">
          <input
            className="py-4 w-full px-3 mt-2 rounded-md border bg-[#f4f4f4] text-black focus:outline-blue-400 placeholder:text-[#666666]"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            className="py-4 px-3 mt-2 w-full rounded-md border bg-[#f4f4f4] text-black focus:outline-blue-400 placeholder:text-[#666666]"
            type="password"
            name="passwordChange"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button
          href={""}
          className="bg-blue-600 h-full hover:bg-blue-700 disabled:bg-[#666666] rounded-xl text-white py-4 text-center"
          disabled={!isCredentialsValid}
          onClick={handleSignUp}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
