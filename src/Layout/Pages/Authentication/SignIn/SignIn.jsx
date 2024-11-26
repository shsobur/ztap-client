import "./SignIn.css";
import logo from "../../../../assets/logoFooter.png";

const SignIn = () => {
  return (
    <>
      <form>
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
              </div>

              <div className="right_signIn_main_container">
                <div className="max-w-screen-lg mx-auto">

                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="email"
                      name="email"
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
                  </div>

                  <div className="w-full pt-10 flex items-center justify-end">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      Sign In
                    </button>
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
