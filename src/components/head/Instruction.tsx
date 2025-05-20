import { BsArrowUp } from "react-icons/bs";

const Instruction = () => {
  return (
    <div className="flex flex-col gap-5 max-w-lg mx-left mt-10">
      <p className="text-secondary text-nowrap">Hướng dẫn lấy channel ID: </p>
      <div className="flex flex-wrap gap-4">
        <span className="flex gap-2 items-center">
          <p>Vào trang chủ Channel</p>
          <BsArrowUp className="rotate-90" />
        </span>
        <span className="flex gap-2 items-center">
          <p>About</p>
          <BsArrowUp className="rotate-90" />
        </span>
        <span className="flex gap-2 items-center">
          <p>Share</p>
          <BsArrowUp className="rotate-90" />
        </span>
        <span className="flex gap-2 items-center">
          <p>Copy channel ID</p>
        </span>
      </div>
    </div>
  );
};

export default Instruction;
