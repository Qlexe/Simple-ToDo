import turnBack from "../assets/TurnBackPageButton.svg";
import TodoItem from "./TodoItem.jsx";

export default function CompletedTasks({ setShowPage, tasks }) {
  return (
    <div className="top-0 z-15 fixed bg-[#d6d7ef] mx-auto w-full h-full">
      <header className="flex flex-row items-center bg-[#9395d3] mx-auto px-[26px] py-[24px] w-full">
        <div className="flex text-[24px]">
          <button
            onClick={() => setShowPage("home")}
            className="flex items-center cursor-pointer"
          >
            <img src={turnBack} />
          </button>
          <div className="ml-9">Completed Tasks</div>
        </div>
      </header>
      <div className="px-1.5">
        {tasks.map(
          (task) => task.isCompleted && <TodoItem key={task.id} task={task} />
        )}{" "}
      </div>
    </div>
  );
}
