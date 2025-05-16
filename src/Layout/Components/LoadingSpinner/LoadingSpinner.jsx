const LoadingSpinner = () => {
  return (
    <>
      <div className="main_container">
        <div className="h-auto w-full flex flex-col gap-2 justify-center items-center">
          <div className="w-16 h-16 border-black  border-4 border-dashed rounded-full animate-spin"></div>
          <p className="text-lg mt-5 font-medium text-[#151515]">Loading...</p>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;