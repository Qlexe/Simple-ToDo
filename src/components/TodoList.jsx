import pencilIcon from "../assets/Pencil.svg";
import trash from "../assets/Trash.svg";
import checkCircle from "../assets/CheckCircle.svg";

function TodoList({ tasks, setTasks, setShowPage, setSelectedTaskId }) {
  if (!Array.isArray(tasks)) {
    console.error("Expected an array, but received:", tasks);
    tasks = [];
  }

  function TodoItem({ task }) {
    const isCompleted = task.isCompleted;
    return (
      <div className="flex justify-between items-center bg-white shadow-md mt-5 py-5 pr-6 pl-5 rounded-2xl w-full min-h-20 todo-item">
        <div className="flex flex-col max-[380px]:gap-5">
          <h4
            className={`text-[#9395d3] text-[13px] text-left uppercase ${
              !isCompleted ? "" : "line-through"
            }`}
          >
            {task.title}
          </h4>

          <h5
            className={`mt-[5px] !font-normal text-[10px] text-black text-left uppercase ${
              !isCompleted ? "" : "line-through"
            }`}
          >
            {task.detail}
          </h5>
        </div>
        <div className="flex max-[380px]:flex-col items-center">
          <button
            className="max-[400px]:mb-1 ml-5 w-[25px] cursor-pointer"
            onClick={() => {
              setSelectedTaskId(task.id);
              setShowPage("edit");
            }}
          >
            <img src={pencilIcon} alt="Edit task" />
          </button>
          <button
            className="max-[400px]:mb-1 ml-5 w-[25px] cursor-pointer"
            onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
          >
            <img src={trash} alt="Detele task" />
          </button>
          <button
            className="ml-5 w-[25px] cursor-pointer"
            onClick={() =>
              setTasks(
                tasks.map((t) =>
                  t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
                )
              )
            }
          >
            <img src={checkCircle} alt="Complete task" />
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="px-1.5">
        {tasks
          .sort((a, b) => a.isCompleted - b.isCompleted)
          .map((task) => (
            <TodoItem key={task.id} task={task} />
          ))}
      </div>
    </>
  );
}

export default TodoList;
