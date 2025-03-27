// import turnBack from "../assets/TurnBackPageButton.svg";
import TodoItem from "./TodoItem.jsx";
import Header from "./Header.jsx";

export default function CompletedTasks({ setShowPage, tasks }) {
  return (
    <div className="top-0 z-15 fixed bg-[#d6d7ef] mx-auto w-full h-full">
      <Header title="Completed Tasks" setShowPage={setShowPage} />
      <div className="px-1.5">
        {tasks.map(
          (task) => task.isCompleted && <TodoItem key={task.id} task={task} />
        )}{" "}
      </div>
    </div>
  );
}
