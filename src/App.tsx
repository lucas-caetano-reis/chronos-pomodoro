import { Heading } from './components/Heading'

import './styles/theme.css'
import './styles/global.css'

export function App() {
    return (
        <>
            <Heading attr={123} attr2='String'>Olá mundo!</Heading>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente reprehenderit cumque ipsam, perferendis quidem hic consequuntur in dolorum? Libero, eius doloribus omnis saepe non quod eveniet praesentium tempore ducimus laboriosam!
            </p>
        </>
    )
}