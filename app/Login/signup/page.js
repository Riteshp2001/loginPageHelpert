"use client";
import { useState } from "react";

export default function SignUp({
  handleForgetPassword,
  handleCompleteProfile,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCredentialsValid, setIsCredentialsValid] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const isEmailValid = validateEmail(inputEmail);
    setIsCredentialsValid(isEmailValid);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (inputEmail) => {
    const validEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmailPattern.test(inputEmail);
  };

  return (
    <div className="w-[70%] flex flex-col gap-2">
      <div className="flex flex-col items-center justify-center gap-2">
        <span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 3.58073C0 1.60315 1.60315 0 3.58073 0H28.4193C30.3969 0 32 1.60315 32 3.58073V28.4193C32 30.3969 30.3969 32 28.4193 32H3.58073C1.60315 32 0 30.3969 0 28.4193V3.58073Z"
              fill="#0261FE"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.7634 7.76279C6.69923 8.82695 5.85509 10.0903 5.27917 11.4807C4.70325 12.8711 4.40682 14.3613 4.40682 15.8663C4.40682 17.3712 4.70325 18.8614 5.27917 20.2518C5.85509 21.6422 6.69923 22.9056 7.7634 23.9698C8.82756 25.0339 10.0909 25.8781 11.4813 26.454C12.8717 27.0299 14.3619 27.3263 15.8669 27.3263C17.3718 27.3263 18.8621 27.0299 20.2525 26.454L20.9272 28.0829C19.3229 28.7474 17.6034 29.0894 15.8669 29.0894C14.1304 29.0894 12.4109 28.7474 10.8066 28.0829C9.2023 27.4183 7.74459 26.4443 6.51671 25.2164C5.28882 23.9886 4.31481 22.5309 3.65029 20.9265C2.98576 19.3222 2.64374 17.6028 2.64374 15.8663C2.64374 14.1298 2.98577 12.4103 3.65029 10.806C4.31482 9.20169 5.28883 7.74398 6.51671 6.5161C7.74459 5.28822 9.2023 4.31421 10.8066 3.64968C12.4109 2.98516 14.1304 2.64313 15.8669 2.64313C17.6034 2.64313 19.3229 2.98516 20.9272 3.64968C22.5315 4.31421 23.9892 5.28822 25.2171 6.5161C26.4449 7.74398 27.4189 9.20169 28.0835 10.806C28.748 12.4103 29.09 14.1298 29.09 15.8663C29.09 17.6028 28.748 19.3222 28.0835 20.9265L26.4546 20.2518C27.0305 18.8614 27.3269 17.3712 27.3269 15.8663C27.3269 14.3613 27.0305 12.8711 26.4546 11.4807C25.8787 10.0903 25.0345 8.82696 23.9704 7.76279C22.9062 6.69863 21.6429 5.85449 20.2525 5.27856C18.8621 4.70264 17.3718 4.40622 15.8669 4.40622C14.3619 4.40622 12.8717 4.70264 11.4813 5.27856C10.0909 5.85448 8.82756 6.69862 7.7634 7.76279Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2567 10.2562C9.51998 10.9929 8.93558 11.8675 8.53686 12.8301C8.13815 13.7927 7.93293 14.8244 7.93293 15.8663C7.93293 16.9082 8.13815 17.9399 8.53686 18.9024C8.93558 19.865 9.51998 20.7396 10.2567 21.4764C10.9934 22.2131 11.8681 22.7975 12.8306 23.1962C13.7932 23.5949 14.8249 23.8002 15.8668 23.8002C16.9087 23.8002 17.9404 23.5949 18.903 23.1962L19.1284 23.1028L23.7964 23.7959L23.1034 19.1279L23.1968 18.9024C23.5955 17.9399 23.8007 16.9082 23.8007 15.8663C23.8007 14.8244 23.5955 13.7927 23.1968 12.8301C22.7981 11.8675 22.2136 10.9929 21.4769 10.2562C20.7402 9.51944 19.8656 8.93504 18.903 8.53632C17.9404 8.1376 16.9087 7.93239 15.8668 7.93239C14.8249 7.93239 13.7932 8.1376 12.8307 8.53632C11.8681 8.93503 10.9934 9.51944 10.2567 10.2562ZM6.90798 12.1554C7.3953 10.9789 8.10958 9.90992 9.01002 9.00948C9.91047 8.10903 10.9795 7.39476 12.1559 6.90744C13.3324 6.42012 14.5934 6.1693 15.8668 6.1693C17.1402 6.1693 18.4012 6.42012 19.5777 6.90744C20.7542 7.39476 21.8232 8.10903 22.7236 9.00948C23.6241 9.90993 24.3383 10.9789 24.8256 12.1554C25.313 13.3319 25.5638 14.5928 25.5638 15.8663C25.5638 17.0565 25.3447 18.2359 24.9181 19.3455L25.8896 25.889L19.3461 24.9176C18.2364 25.3441 17.0571 25.5632 15.8668 25.5632C14.5934 25.5632 13.3324 25.3124 12.1559 24.8251C10.9795 24.3378 9.91047 23.6235 9.01002 22.7231C8.10957 21.8226 7.3953 20.7536 6.90798 19.5771C6.42066 18.4007 6.16984 17.1397 6.16985 15.8663C6.16985 14.5928 6.42067 13.3319 6.90798 12.1554Z"
              fill="white"
            />
            <path
              d="M13.3984 15.8659C13.3984 16.4502 12.9248 16.9238 12.3405 16.9238C11.7563 16.9238 11.2827 16.4502 11.2827 15.8659C11.2827 15.2817 11.7563 14.8081 12.3405 14.8081C12.9248 14.8081 13.3984 15.2817 13.3984 15.8659Z"
              fill="white"
            />
            <path
              d="M16.9247 15.8656C16.9247 16.4499 16.4511 16.9235 15.8668 16.9235C15.2826 16.9235 14.809 16.4499 14.809 15.8656C14.809 15.2814 15.2826 14.8078 15.8668 14.8078C16.4511 14.8078 16.9247 15.2814 16.9247 15.8656Z"
              fill="white"
            />
            <path
              d="M20.4508 15.8656C20.4508 16.4499 19.9772 16.9235 19.393 16.9235C18.8087 16.9235 18.3351 16.4499 18.3351 15.8656C18.3351 15.2814 18.8087 14.8078 19.393 14.8078C19.9772 14.8078 20.4508 15.2814 20.4508 15.8656Z"
              fill="white"
            />
          </svg>
        </span>
        <h1 className="font-extrabold text-black">Helpert</h1>
      </div>
      <form className=" flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <input
          className="py-4 px-3 mt-5 rounded-md border bg-[#f4f4f4] text-black focus:outline-blue-400 placeholder:text-[#666666]"
          type="email"
          name="email"
          placeholder="Email or username"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="py-4 px-3 mt-5 rounded-md border bg-[#f4f4f4] text-black focus:outline-blue-400 placeholder:text-[#666666]"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <h1
          onClick={handleForgetPassword}
          className="text-blue-500 font-extrabold p-2 text-right hover:underline cursor-pointer"
        >
          Forgot Password?
        </h1>
        <button
          href={""}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-[#666666] rounded-xl text-white py-4 text-center"
          disabled={!isCredentialsValid}
          onClick={handleCompleteProfile}
        >
          Sign In
        </button>
        <h5 className="text-[#a6a6a6] text-center text-sm mt-4">
          By signing in you confirm that you are 13 years of age or above and{" "}
          <br />
          agree to our{" "}
          <span className="text-blue-500 cursor-pointer">
            Terms and Conditions
          </span>{" "}
          and{" "}
          <span className="text-blue-500 cursor-pointer">Privacy Policy</span>.
        </h5>
      </form>
      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400" />
        <p className="text-center text-sm">or Sign in with</p>
        <hr className="border-gray-400" />
      </div>
      <div className="flex justify-center gap-8 items-center">
        <button className="bg-white border p-3 rounded-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="25px"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
        </button>
        <button className="bg-white border p-3 rounded-full flex justify-center items-center">
          <svg
            width="25"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1642 17.4974V10.6674H13.4683L13.8108 7.99323H11.1642V6.2899C11.1642 5.51823 11.3792 4.9899 12.4866 4.9899H13.89V2.60573C13.2072 2.53256 12.5209 2.49722 11.8342 2.4999C9.79748 2.4999 8.39915 3.74323 8.39915 6.02573V7.98823H6.10999V10.6624H8.40415V17.4974H11.1642Z"
              fill="#1874EB"
            />
          </svg>
        </button>
      </div>
      <div className="text-[#666666] text-center">
        i don&apos;t have account{" "}
        <div
          onClick={handleCompleteProfile}
          className="font-extrabold text-blue-500 cursor-pointer hover:underline"
        >
          Sign Up
        </div>
      </div>
    </div>
  );
}
