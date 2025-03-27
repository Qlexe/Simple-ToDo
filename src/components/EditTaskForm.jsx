import { useState } from "react";
import Header from "./Header";
export default function AddTaskForm({ taskId, tasks, setShowPage, setTasks }) {
  const task = tasks.find((t) => t.id === taskId);
  const [title, setTitle] = useState(task.title);
  const [detail, setDetail] = useState(task.detail);
  return (
    <div className="top-0 z-15 fixed bg-white mx-auto w-full h-full">
      <Header title="Edit Task" setShowPage={setShowPage} />
      <div className="flex flex-col bg-white mx-auto px-[29px] addTaskForm">
        <input
          type="text"
          placeholder="Title"
          className="mt-11 !p-0 !pb-1.5 border-[#8b8787] border-b-[1px] focus:outline-none w-full h-7 !font-normal text-[#8b8787]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={detail}
          type="text"
          placeholder="Detail"
          className="mt-11 ml-[3px] !p-0 !pb-1.5 border-[#8b8787] border-b-[1px] focus:outline-none w-full h-7 !font-normal text-[#8b8787]"
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
