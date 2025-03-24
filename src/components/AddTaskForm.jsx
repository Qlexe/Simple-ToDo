import turnBack from "../assets/TurnBackPageButton.svg";
import { useState } from "react";
export default function AddTaskForm({ setShowPage, setTasks }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  return (
    <div className="top-0 z-15 fixed bg-white mx-auto w-full h-full">
      <header className="flex flex-row items-center bg-[#9395d3] mx-auto px-[26px] py-[24px] w-full">
        <div className="flex text-[24px]">
          <button
            className="flex items-center cursor-pointer"
            onClick={() => setShowPage("home")}
          >
            <img src={turnBack} />
          </button>
          <div className="ml-9">Add Task</div>
        </div>
      </header>
      <div className="bg-white mx-auto px-[29px] addTaskForm">
        <input
          type="text"
          placeholder="Title"
          className="mt-11 border-[#8b8787] border-b-[1px] w-full h-7 !font-normal text-[#8b8787]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <input
          type="text"
          placeholder="Detail"
          className="items-end mt-11 border-[#8b8787] border-b-[1px] w-[99%] h-7 font-sans !font-normal text-[#8b8787]"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <button
          className="flex justify-center items-center bg-[#9395d3] shadow mx-[-15px] mt-11 py-[18px] rounded-2xl w-[calc(100%+30px)] text-white text-xl uppercase"
          onClick={() => {
            title.length > 0 &&
              setTasks((prevTasks) => [
                ...prevTasks,
                {
                  id: prevTasks.length + 1,
                  title: title,
                  detail: detail,
                  isCompleted: false,
                },
              ]);
            setShowPage("home");
          }}
        >
          add
        </button>
      </div>
    </div>
  );
}
