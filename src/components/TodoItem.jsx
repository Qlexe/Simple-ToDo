import pencilIcon from "../assets/Pencil.svg";
import trash from "../assets/Trash.svg";
import checkCircle from "../assets/CheckCircle.svg";

export default function TodoItem() {
  return (
    <div className="flex justify-between items-center bg-white shadow-md mt-5 pr-6 pl-5 rounded-2xl w-full h-20 todo-item">
      <div>
        <h4 className="text-[#9395d3] text-[13px] text-left uppercase">
          todo title
        </h4>
        <h5 className="mt-[5p] !font-normal text-[10px] text-black text-left uppercase">
          todo subtitle
        </h5>
      </div>
      <div className="flex flex-wrap-reverse items-center">
        <button className="ml-5 w-[25px] cursor-pointer">
          <img src={pencilIcon} alt="" />
        </button>
        <button className="ml-5 w-[25px] cursor-pointer">
          <img src={trash} alt="" />
        </button>
        <button className="ml-5 w-[25px] cursor-pointer">
          <img src={checkCircle} alt="" />
        </button>
      </div>
    </div>
  );
}
