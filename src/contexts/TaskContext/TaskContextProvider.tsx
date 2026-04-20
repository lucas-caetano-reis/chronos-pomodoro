import { useEffect, useReducer } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    if (!state.activeTask) {
      console.log("Nenhuma activeTask encontrada");
      return;
    }

    const worker = TimerWorkerManager.getInstance();

    worker.onmessage((e) => {
      const countDownSeconds = e.data;
      console.log(countDownSeconds);

      if (countDownSeconds <= 0) {
        console.log("Worker COMPLETED");
        worker.terminate();
      }
    });

    worker.postMessage(state);

    return () => {
      console.log("Worker encerrado");
      worker.terminate();
    };
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
