import "./SignIn.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import logo from "../../../../assets/logoFooter.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser, loading } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userEmail = data.email;
    const userPassword = data.password;

    signInUser(userEmail, userPassword)
      .then(() => {
        // Sweet alert__
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });

        navigate("/");
      })
      .catch((error) => {
        setError("Invalid! user or password. Try again");
        console.log("sign in error", error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="main_signIn_container">
          <div className="main_signIn_outer_container">
            <div className="main_signIn_inner_container">
              <div className="left_signIn_main_container">
                <div className="signIn_image_container">
                  <img src={logo} alt="logo" />
                </div>

                <h2>Let&apos;s Sign In</h2>
                <p>
                  Welcome back to Ztep! 👋 We&apos;re excited to see you again.
                  Dive in and explore our latest collection to find your perfect
                  pair of shoes!
                </p>
                <span className="pl-5 text-gray-800 font-normal">
                  Dont have an account{" "}
                  <Link to="/signUp" className="text-blue-700 font-medium">
                    Register
                  </Link>{" "}
                  now!
                </span>
              </div>

              <div className="right_signIn_main_container">
                <div className="max-w-screen-lg mx-auto">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="email"
                      {...register("email", { required: true })}
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />

                    <div>
                      {errors.email && (
                        <span className="text-sm text-red-500">
                          Email field is required
                        </span>
                      )}
                    </div>

                    <label
                      htmlFor="email"
                      className="peer-focus:font-medium absolute text-lg text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email address
                    </label>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="password"
                      name="password"
                      {...register("password", { required: true })}
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />

                    <div>
                      {errors.password && (
                        <span className="text-sm text-red-500">
                          Password field is required
                        </span>
                      )}
                    </div>

                    <div className="text-red-600 pb-5">
                      <span>{error}</span>
                    </div>

                    <label
                      htmlFor="password"
                      className="peer-focus:font-medium absolute text-lg text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>

                  <div className="w-full pt-10 flex items-center justify-end">
                    {loading ? (
                      <button
                        type="submit"
                        className="text-white flex items-center justify-center gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                      >
                        <p>Working...</p>
                        <div className="w-4 h-4 border-4 border-dashed rounded-full animate-spin"></div>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                      >
                        Sign In
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignIn;
