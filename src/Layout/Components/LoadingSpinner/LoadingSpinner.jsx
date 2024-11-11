const LoadingSpinner = () => {
  return (
    <>
      <div className="main_container">
        <div className="h-auto w-full flex flex-col gap-2 justify-center items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black"></div>
          <p className="text-lg font-medium text-[#151515]">Loading...</p>
        </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
