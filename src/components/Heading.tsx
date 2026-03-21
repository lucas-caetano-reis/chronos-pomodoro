import styles from './Heading.module.css'

type HeadingProps = {
    children: React.ReactNode
}

export function Heading({ children }: HeadingProps) { //Desestruturação das propriedades
    return <h1 className={styles.heading}>{children}</h1>
}