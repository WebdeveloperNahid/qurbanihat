import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#22c55e" size={60} />
    </div>
  );
};

export default Loading;