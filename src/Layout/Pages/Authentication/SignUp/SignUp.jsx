import "./SignUp.css";
import logo from "../../../../assets/logoFooter.png";

import { useContext, useState } from "react";
// import { BsEmojiHeartEyes } from "react-icons/bs";
// import { PiSmileyXEyesDuotone } from "react-icons/pi";
import UseAxiosPublic from "../../../Hooks/axiosPublic/axiosPublic";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// Image_hosting_key__
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const { signUpUser, loading } = useContext(AuthContext);

  // Hosting image__

  const handleImageHosting = async (e) => {
    const imageFile = { image: e.target.files[0] };
    setUploading(true);
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    setImage(res.data.data.display_url);
    setUploading(false);
  };

  // Handle SignUp form__
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Form data__
    const firstName = data.firstName.trim();
    const lastName = data.lastName.trim();
    const fullName = firstName + " " + lastName;
    const userName = fullName.trim();
    const userEmail = data.email.trim();
    const userPassword = data.password.trim();
    const userNumber = data.number.trim();

    const userInfo = {
      userName,
      userEmail,
      userPassword,
      userNumber,
      image,
    };

    // Sign Up call__
    signUpUser(userEmail, userPassword)
      .then(() => {
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
        console.log("Singed Up error:", error);
      });

    console.log(userInfo);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="main_signUp_container">
          <div className="main_signUp_outer_container">
            <div className="main_signUp_inner_container">

              <div className="left_signUp_main_container">
                <div className="signUp_image_container">
                  <img src={logo} alt="logo" />
                </div>

                <h2>Create Your New Account</h2>
                <p>
                  Thank you for joining us. As a member! you will enjoy
                  exclusive deals, personalized recommendations, and special
                  discounts. Explore our diverse collection of sneakers, formals
                  etc. to find your perfect pair Step ahead with Ztep!
                </p>
              </div>

              <div className="right_signUp_main_container">
                
                <div className="max-w-screen-lg mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="firstName"
                        {...register("firstName")}
                        className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />

                      <label
                        htmlFor="firstName"
                        className="peer-focus:font-medium absolute text-lg text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        First name
                      </label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="text"
                        name="lastName"
                        {...register("lastName")}
                        className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />

                      <label
                        htmlFor="lastName"
                        className="peer-focus:font-medium absolute text-lg text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Last name
                      </label>
                    </div>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="email"
                      {...register("email")}
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />

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
                      {...register("password", {
                        required: true,
                        minLength: 8,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                      })}
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />

                    <label
                      htmlFor="password"
                      className="peer-focus:font-medium absolute text-lg text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>

                    <div>
                      {errors.password?.type === "minLength" && (
                        <span className="text-sm text-red-500">
                          Password should be at least 8 characters
                        </span>
                      )}
                    </div>

                    <div>
                      {errors.password?.type === "pattern" && (
                        <span className="text-sm text-red-500">
                          Use at least one uppercase(A-Z) and lowercase(a-z)
                          character
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="password"
                      name="confirmPassword"
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) => {
                          if (watch("password") !== value) {
                            return "Password do not match";
                          }
                        },
                      })}
                      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />

                    <label
                      htmlFor="confirmPassword"
                      className="peer-focus:font-medium absolute text-lg text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Confirm password
                    </label>

                    <div>
                      {errors.confirmPassword && (
                        <span className="text-sm text-red-500">
                          Both password must match!
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="relative z-0 w-full mb-5 group">
                        <select
                          name="countryCode"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          required
                        >
                          <option value="" disabled selected hidden>
                            Country code 🔽
                          </option>
                          <option value="+1">+1 (USA)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+91">+91 (India)</option>
                          <option value="+880">+880 (Bangladesh)</option>
                          <option value="+81">+81 (Japan)</option>
                        </select>
                      </div>

                      <div className="relative z-0 w-full mb-5 group">
                        <input
                          type="tel"
                          name="number"
                          {...register("number")}
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          pattern="[0-9]{10}"
                          required
                        />

                        <label
                          htmlFor="number"
                          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          Mobile Number
                        </label>
                      </div>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                      <input
                        type="file"
                        name="image"
                        onChange={handleImageHosting}
                        className="block py-5 px-0 w-full text-base text-gray-900 bg-transparent border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      />

                      <label
                        htmlFor="image"
                        className="peer-focus:font-medium font-medium absolute text-2xl text-blue-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {uploading ? (
                          "Uploading..."
                        ) : (
                          <p>
                            Upload your image
                            <span className="text-gray-400"> (optional)</span>
                          </p>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-end">
                    {uploading ? (
                      <button className="text-gray-300 bg-blue-900 cursor-not-allowed hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Submit
                      </button>
                    ) : loading ? (
                      <button className="text-gray-300 bg-blue-900 cursor-not-allowed hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        <div className="w-4 h-4 border-4 border-dashed rounded-full animate-spin"></div>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                      >
                        Submit
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

export default SignUp;