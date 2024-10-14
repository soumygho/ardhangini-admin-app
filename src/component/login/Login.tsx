import React, { useContext } from "react";
import { indexContext, IndexContext } from "../../context/index/index.context";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Login() {
  const context: IndexContext | null = useContext<IndexContext | null>(
    indexContext
  );
  return (
    <section className="login-component my-[8rem]">
      <div className="main flex flex-col justify-center items-center shadow-lg bg-gray-100 rounded-md w-1/4 m-auto p-5">
        <div className="relative">
          <h1 className="text-2xl">Sign In</h1>
          <div className="absolute -left-3 bg-black h-[3px] w-24"></div>
        </div>
        <form className="w-full py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
            <Label htmlFor="email" className="px-0.5 font-semibold">
              Email
            </Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
            <Label htmlFor="password" className="px-0.5 font-semibold">
              Password
            </Label>
            <Input type="password" id="password" placeholder="password" />
          </div>

          <Button
            variant="default"
            className="w-full mt-12"
            onClick={context?.handleLogin}
          >
            Sign In
          </Button>
        </form>
        <p className="hover:text-red-500">
          <Link to={"#"}> Forgot Password?</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
