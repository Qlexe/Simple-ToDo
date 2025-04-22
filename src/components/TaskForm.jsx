import { useState } from "react";
import Header from "./Header";

export default function TaskForm({ 
  title: headerTitle, 
  initialTitle = "", 
  initialDetail = "", 
  onSubmit, 
  onCancel,
  submitButtonText,
  showCancelButton = false,
  setShowPage
}) {
  const [title, setTitle] = useState(initialTitle);
  const [detail, setDetail] = useState(initialDetail);

  const handleSubmit = () => {
    if (title.length > 0) {
      onSubmit({ title, detail });
    }
  };

  return (
    <div className="top-0 z-15 fixed bg-white mx-auto w-full h-full">
      <Header title={headerTitle} setShowPage={setShowPage} />
      <div className="flex flex-col bg-white mx-auto px-[29px] addTaskForm">
        <input
          type="text"
          placeholder="Title"
          className="mt-11 !p-0 !pb-1.5 border-[#8b8787] border-b-[1px] focus:outline-none w-full h-7 !font-normal text-[#8b8787]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <input
          type="text"
          placeholder="Detail"
          className="mt-11 ml-[3px] !p-0 !pb-1.5 border-[#8b8787] border-b-[1px] focus:outline-none w-full h-7 !font-normal text-[#8b8787]"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        {!showCancelButton ? (
          <button
            className="flex justify-center items-center bg-[#9395d3] shadow mx-[-15px] mt-11 py-[18px] rounded-2xl w-[calc(100%+30px)] text-white text-xl uppercase"
            onClick={handleSubmit}
          >
            {submitButtonText || "add"}
          </button>
        ) : (
          <div className="flex gap-12 mx-[-15px] mt-11 w-[calc(100%+30px)]">
            <button
              onClick={handleSubmit}
              className="flex-1 justify-center items-center bg-[#9395d3] shadow py-[18px] rounded-2xl !font-normal text-[15px] text-white"
            >
              {submitButtonText || "Update"}
            </button>
            <button
              onClick={onCancel}
              className="flex-1 justify-center items-center bg-[#9395d3] shadow py-[18px] rounded-2xl !font-normal text-[15px] text-white"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}