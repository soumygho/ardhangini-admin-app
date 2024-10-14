import React from "react";
import logo from "../../images/logo.png";

function Header() {
  const accessToken: string | undefined = undefined;

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-700 shadow shadow-slate-100 z-50">
      <div className="flex items-center justify-between p-2">
        <a href="/" className="flex items-center gap-x-4">
          <img src={logo} alt="Logo" className="h-10 w-10 border-2 border-slate-100 rounded-full" />
          <p className="text-white text-xl">ARDHANGINI</p>
        </a>
        {accessToken && (
          <div className="bg-red-500">
            <a href="/" className="text-white">
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
