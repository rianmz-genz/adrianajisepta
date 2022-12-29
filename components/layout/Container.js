const Container = ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen bg-[url('/bg.svg')] bg-contain bg-no-repeat">
      <div className="px-7 flex justify-center transition-all duration-500 backdrop-blur-[200px]">
        <div className="w-full sm:max-w-lg lg:max-w-5xl 2xl:max-w-7xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
