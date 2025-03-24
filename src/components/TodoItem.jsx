export default function TodoItem({ task }) {
  const isCompleted = task.isCompleted;
  return (
    <div className="flex justify-between items-center gap-1.5 bg-white shadow-md mt-5 pr-6 pl-5 rounded-2xl w-full h-20 todo-item">
      <div>
        <div
          className={`text-[#9395d3] text-[13px] text-left uppercase ${
            !isCompleted ? "" : "line-through"
          }`}
        >
          {task.title}
        </div>

        <div
          className={`mt-[5px] !font-normal text-[10px] text-black text-left uppercase ${
            !isCompleted ? "" : "line-through"
          }`}
        >
          {task.detail}
        </div>
      </div>
      <div></div>
    </div>
  );
}
