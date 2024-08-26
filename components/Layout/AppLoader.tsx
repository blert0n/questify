const AppLoader = (props: { message?: string }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center flex-col justify-center bg-white bg-opacity-50">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      <div className="pt-2 text-blue-500">{props.message}</div>
    </div>
  );
};

export default AppLoader;
