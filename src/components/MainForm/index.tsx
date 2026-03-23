import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function MainForm() {
    const {state, setState} = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null)

    // Ciclos
    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        if (taskNameInput.current === null) return

        const taskName = taskNameInput.current.value.trim() //Remove espaços em uma string

        if(!taskName) {
            alert("Digite o nome da tarefa")
            return
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        }

        const secondsRemaining = newTask.duration * 60

        setState(prevState => {
            return {
                ...prevState,
                config: {...prevState.config},
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining, // Conferir
                formattedSecondsRemaining: '00:00', // Conferir
                tasks: [...prevState.tasks, newTask],
            }
        })
    }

    return (
        <form onSubmit = {handleCreateNewTask} className='form' action=''>
            <div className='formRow'>
                <DefaultInput 
                    labelText='task'
                    id='meuInput'
                    type='text'
                    placeholder='Digite algo'
                    ref={taskNameInput}
                />
            </div>

            <div className='formRow'>
                <p>Próximo intervalo é de 25 min</p>
            </div>

            <div className='formRow'>
                <Cycles />
            </div>

            <div className='formRow'>
                <DefaultButton icon={<PlayCircleIcon />} color='green'/>
            </div>
        </form>
    )
}