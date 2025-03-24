import turnBack from "../assets/TurnBackPageButton.svg";
import { useState } from "react";
export default function AddTaskForm({ taskId, tasks, setShowPage, setTasks }) {
  const task = tasks.find((t) => t.id === taskId);
  const [title, setTitle] = useState(task.title);
  const [detail, setDetail] = useState(task.detail);
  return (
    <div className="top-0 z-15 fixed bg-white mx-auto w-full h-full">
      <header className="flex flex-row items-center bg-[#9395d3] mx-auto px-[26px] py-[24px] w-full">
        <div className="flex text-[24px]">
          <button
            onClick={() => setShowPage("home")}
            className="flex items-center cursor-pointer"
          >
            <img src={turnBack} />
          </button>
          <div className="ml-9">Edit Task</div>
        </div>
      </header>
      <div className="flex flex-col bg-white mx-auto px-[29px] addTaskForm">
        <input
          type="text"
          placeholder="Title"
          className="mt-11 border-[#8b8787] border-b-[1px] w-full h-7 !font-normal text-[#8b8787]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={detail}
          type="text"
          placeholder="Detail"
          className="mt-11 border-[#8b8787] border-b-[1px] w-full h-7 font-sans !font-normal text-[#8b8787]"
          onChange={(e) => setDetail(e.target.value)}
        />
        <div className="flex gap-12 mx-[-15px] mt-11 w-[calc(100%+30px)]">
          <button
            onClick={() => {
              setTasks(
                tasks.map((t) =>
                  t.id === task.id ? { ...t, title: title, detail: detail } : t
                )
              );
              setShowPage("home");
            }}
            className="flex-1 justify-center items-center bg-[#9395d3] shadow py-[18px] rounded-2xl !font-normal text-[15px] text-white"
          >
            Update
          </button>
          <button
            onClick={() => setShowPage("home")}
            className="flex-1 justify-center items-center bg-[#9395d3] shadow py-[18px] rounded-2xl !font-normal text-[15px] text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
