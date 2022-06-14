import Nav from './nav/Nav'
import styles from '../styles/Layout.module.css'
import { ElementsProvider } from './CONTEXT/ElementsProvider'
import { TemplateProvider } from './CONTEXT/TemplateProvider'

const Layout = ( {children} ) => {
    return (
        <>
            <TemplateProvider>
                <ElementsProvider>
                    <Nav/>
                    <div className={styles.container}>
                        <main className={styles.main}>
                            {children}
                        </main>
                    </div>
                </ElementsProvider>
            </TemplateProvider>
        </>
    )
}

export default Layout