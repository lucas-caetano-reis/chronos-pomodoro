import { Heading } from './components/Heading'

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react'

export function App() {
    return (
        <>
            <Heading>
                Olá mundo!
                <button>
                    <TimerIcon />
                </button>
                </Heading>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit cumque ipsam, perferendis quidem hic consequuntur in dolorum? Libero, eius doloribus omnis saepe non quod eveniet praesentium tempore ducimus laboriosam!
            </p>
        </>
    )
}