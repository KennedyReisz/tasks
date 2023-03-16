// Import's
import { useState, useEffect } from "react";

// Asset's
import styles from "../styles/Home.module.css";

const Home = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [createButtonEnabled, setCreateButtonEnabled] = useState(false);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    if (taskName && taskDate) {
      setCreateButtonEnabled(true);
    } else {
      setCreateButtonEnabled(false);
    }
  }, [taskDate, taskName]);

  const handleCreateTask = () => {
    if (taskName && taskDate) {
      const newTask = {
        name: taskName,
        date: taskDate,
      };
      setTasks([...tasks, newTask]);
      setTaskName("");
      setTaskDate("");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.taskCreator}>
        <h1>Criar Lembrete</h1>
        <input
          type="text"
          placeholder="Nome do lembrete"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
          min="2023-01-01"
          max="2023-12-12"
          required
        />
        <button
          style={
            createButtonEnabled
              ? { cursor: "pointer", opacity: 1 }
              : { cursor: "not-allowed", opacity: 0.5 }
          }
          onClick={handleCreateTask}
        >
          Criar
        </button>
      </div>
      <div className={styles.tasksArea}>
        {tasks.map((task, index) => (
          <div key={index} className={styles.taskItem}>
            <h2>{task.name}</h2>
            <h2>{task.date}</h2>
            <button onClick={() => alert(index)}>Deletar</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
