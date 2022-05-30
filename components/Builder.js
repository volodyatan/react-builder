import DNDArea from './builder/DNDArea'
import styles from '../styles/Builder.module.css'

const Builder = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <p>builder</p>

                <DNDArea></DNDArea>

            </main>
        </div>
    )
}

export default Builder