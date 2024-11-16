import { MoonLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <>
      <div className="main_container">
        <div className="h-auto w-full flex flex-col gap-2 justify-center items-center">
          <MoonLoader color="#000000" loading size={50} speedMultiplier={0.5} />
          <p className="text-lg mt-5 font-medium text-[#151515]">Loading...</p>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
