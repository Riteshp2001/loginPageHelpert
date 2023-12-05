"use client";
import { useState } from "react";

export default function CompleteProfile({
  handleSignUp,
  handleCompleteProfile,
}) {
  const [fullName, setFullName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const isProfileComplete = () => {
    return fullName !== "" && lastName !== "" && birthdate !== "";
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
            <g clipPath="url(#clip0_309_2645)">
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
        <h1 className="sm:text-2xl text-black font-extrabold md:text-3xl whitespace-nowrap">
          Complete your Profile
        </h1>
        <h5 className="text-[#666666] text-sm sm:w-[90%] md:w-[70%]">
          Tell us about yourself & don’t worry, your information is safe &
          secure.
        </h5>
      </div>
      <form
        className=" flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Full Name */}
        <input
          className="py-4 px-3 w-full rounded-md border bg-[#f4f4f4] text-black focus:outline-blue-400 placeholder:text-[#666666]"
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            isCredentialsValid();
          }}
        />
        {/* Last Name */}
        <input
          className="py-4 px-3 w-full rounded-md border bg-[#f4f4f4] text-black focus:outline-blue-400 placeholder:text-[#666666]"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            isProfileComplete();
          }}
        />
        {/* Birthdate */}
        <input
          className="py-4 px-3 w-full rounded-md border bg-[#f4f4f4] text-black focus:outline-blue-400 placeholder:text-[#666666]"
          type="date"
          name="birthdate"
          placeholder="Birthdate"
          value={birthdate}
          onChange={(e) => {
            setBirthdate(e.target.value);
            isProfileComplete();
          }}
        />
        <button
          className="bg-blue-600 mt-5 hover:bg-blue-700 rounded-xl text-white py-4 text-center"
          onClick={handleCompleteProfile}
          disabled={!isProfileComplete()}
        >
          Complete your Profile
        </button>
      </form>
    </div>
  );
}
