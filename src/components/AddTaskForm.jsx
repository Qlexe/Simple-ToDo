import { TaskForm } from "./index";

export default function AddTaskForm({ setShowPage, setTasks }) {
  const handleSubmit = ({ title, detail }) => {
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
  };

  return (
    <TaskForm
      title="Add Task"
      onSubmit={handleSubmit}
      submitButtonText="add"
      setShowPage={setShowPage}
    />
  );
}
