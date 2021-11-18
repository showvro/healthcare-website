import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    error,
    isLogin,
    toogleLogin,
    googleSignIn,
    handleName,
    handleEmail,
    handlePassword,
    handleResetPassword,
    handleRegistration,
  } = useAuth();

  //Use Location
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";

  //Use History
  const history = useHistory();

  //handle google sign in
  const handleGoogleSignIn = () => {
    googleSignIn().then(() => {
      history.push(redirect_url);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-20 w-auto bg-gray-200 p-2 rounded-full"
            src="https://raw.githubusercontent.com/Showvro/healthcare-img/866d17d0d3f470c5f7384f2765bf386efde4af32/fav.svg"
            alt="Workflow"
          />
          <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? "Login your account" : "Register new account"}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            By Procceding our Terms and Conditions
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleRegistration}
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="sr-only">
                  Full-Name
                </label>
                <input
                  name="name"
                  type="name"
                  autoComplete="name"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md mb-1 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                  onBlur={handleName}
                />
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none rounded-t-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Email address"
                onBlur={handleEmail}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Password"
                onBlur={handlePassword}
              />
            </div>
          </div>

          <div className="flex items-center justify-evenly">
            <div className="flex items-center">
              <input
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                onChange={toogleLogin}
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Already Registered?
              </label>
            </div>
            <div>
              <button
                className="hover:text-blue-800 hover:underline"
                onClick={handleResetPassword}
              >
                Forget Password?
              </button>
            </div>
          </div>
          <div>
            <p className="text-red-600">{error}</p>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-72 mx-auto flex justify-center py-2 px-4 border border-transparent rounded-full text-whitr border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black font-bold transition-all"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              {isLogin ? "Login" : "Register"}
            </button>
          </div>
        </form>
        <button
          className="hover:text-blue-800 hover:underline"
          onClick={handleGoogleSignIn}
        >
          Signin with Google?
        </button>
      </div>
    </div>
  );
};

export default Register;
