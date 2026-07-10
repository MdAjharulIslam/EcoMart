import React from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Login = () => {
  const [state, setState] = React.useState("login");
  const [showOtp, setShowOtp] = React.useState(false);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [otp, setOtp] = React.useState("");

  const { setShowUserlogin, setUser, axios, navigate } = useAppContext();

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setOtp("");
  };

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();

      if (showOtp) {
        const { data } = await axios.post("/api/user/verify-otp", {
          email,
          otp,
        });

        if (data.success) {
          toast.success(data.message);
          setUser(data.user);
          setShowUserlogin(false);
          navigate("/");
          resetForm();
          setShowOtp(false);
        } else {
          toast.error(data.message);
        }

        return;
      }

      const payload =
        state === "register"
          ? { name, email, password }
          : { email, password };

      const { data } = await axios.post(`/api/user/${state}`, payload);

      if (data.success) {
        if (state === "register") {
          toast.success(data.message);
          setShowOtp(true);
        } else {
          toast.success("Login successful");
          setUser(data.user);
          setShowUserlogin(false);
          navigate("/");
          resetForm();
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div
      onClick={() => {
        setShowUserlogin(false);
        setShowOtp(false);
        resetForm();
      }}
      className="fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50"
    >
      <form
        onSubmit={onSubmitHandler}
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <p className="text-2xl font-medium m-auto">
          <span className="text-primary">User</span>{" "}
          {showOtp ? "Verify OTP" : state === "login" ? "Login" : "Sign Up"}
        </p>

        {showOtp ? (
          <div className="w-full">
            <p>OTP</p>
            <input
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
              placeholder="Enter OTP"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              type="text"
              required
            />
          </div>
        ) : (
          <>
            {state === "register" && (
              <div className="w-full">
                <p>Name</p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="type here"
                  className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                  type="text"
                  required
                />
              </div>
            )}

            <div className="w-full">
              <p>Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="type here"
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                type="email"
                required
              />
            </div>

            <div className="w-full">
              <p>Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="type here"
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                type="password"
                required
              />
            </div>

            {state === "register" ? (
              <p>
                Already have account?{" "}
                <span
                  onClick={() => setState("login")}
                  className="text-primary cursor-pointer"
                >
                  click here
                </span>
              </p>
            ) : (
              <p>
                Create an account?{" "}
                <span
                  onClick={() => setState("register")}
                  className="text-primary cursor-pointer"
                >
                  click here
                </span>
              </p>
            )}
          </>
        )}

        <button className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer">
          {showOtp ? "Verify OTP" : state === "register" ? "Create Account" : "Login"}
        </button>

        {showOtp && (
          <p
            onClick={() => {
              setShowOtp(false);
              setOtp("");
            }}
            className="text-primary cursor-pointer text-center w-full"
          >
            Back to register
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;