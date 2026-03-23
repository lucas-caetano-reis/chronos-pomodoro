import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";

export function MainForm() {
    const taskNameInput = useRef<HTMLInputElement>(null)

    function handleCreateNewTask(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()

        console.log("Deu certo")
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