import { TaskForm } from "./index";

export default function EditTaskForm({ taskId, tasks, setShowPage, setTasks }) {
  const task = tasks.find((t) => t.id === taskId);
  
  const handleSubmit = ({ title, detail }) => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, title, detail } : t
      )
    );
    setShowPage("home");
  };

  const handleCancel = () => {
    setShowPage("home");
  };

  return (
    <TaskForm
      title="Edit Task"
      initialTitle={task.title}
      initialDetail={task.detail}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      submitButtonText="Update"
      showCancelButton={true}
      setShowPage={setShowPage}
    />
  );
}
