"use client"
import SignUp from "./signup/page";
import CompleteProfile from "./completeprofile/page";
import { useState } from "react";
import LeftScreen from "./leftscreen";
import CreateAccount from "./createaccount/page";
import ResetPassword from "./resetpassword/page";

export default function Login() {
  const [currentPage, setCurrentPage] = useState("createaccount");

  const handleSignUp = () => {
    setCurrentPage("signup");
  };

  const handleForgetPassword = () => {
    setCurrentPage("resetPassword");
  };

  const handleCreateAccount = () => {
    setCurrentPage("createaccount");
  };

  const handleCompleteProfile = () => {
    setCurrentPage("completeprofile");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "completeprofile":
        return (
          <CompleteProfile
            handleSignUp={handleSignUp}
            handleForgetPassword={handleForgetPassword}
            handleCompleteProfile={handleCompleteProfile}
            handleCreateAccount={handleCreateAccount}
          />
        );
      case "resetPassword":
        return (
          <ResetPassword
            handleSignUp={handleSignUp}
            handleForgetPassword={handleForgetPassword}
            handleCompleteProfile={handleCompleteProfile}
            handleCreateAccount={handleCreateAccount}
          />
        );
      case "signup":
        return (
          <SignUp
            handleSignUp={handleSignUp}
            handleForgetPassword={handleForgetPassword}
            handleCompleteProfile={handleCompleteProfile}
            handleCreateAccount={handleCreateAccount}
          />
        );
      default:
        return (
          <CreateAccount
            handleSignUp={handleSignUp}
            handleForgetPassword={handleForgetPassword}
            handleCompleteProfile={handleCompleteProfile}
            handleCreateAccount={handleCreateAccount}
          />
        );
    }
  };

  return (
    <main className="flex w-screen h-screen">
      <LeftScreen />
      <div className="sm:w-full md:w-[50%] sm:overflow-auto md:overflow-hidden bg-white flex items-center justify-center flex-col">
        {renderPage()}
      </div>
    </main>
  );
}
