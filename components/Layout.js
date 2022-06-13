import Nav from './nav/Nav'
import styles from '../styles/Layout.module.css'
import { ElementsProvider } from './CONTEXT/ElementsProvider'

const Layout = ( {children} ) => {
    return (
        <>
            <ElementsProvider>
                <Nav/>
                <div className={styles.container}>
                    <main className={styles.main}>
                        {children}
                    </main>
                </div>
            </ElementsProvider>
        </>
    )
}

export default Layout