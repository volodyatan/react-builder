import Nav from './nav/Nav'
import styles from '../styles/Layout.module.css'
import { ElementsProvider } from './CONTEXT/ElementsProvider'
import { TemplateProvider } from './CONTEXT/TemplateProvider'

const Layout = ( {children} ) => {
    return (
        <>
            <ElementsProvider>
                <TemplateProvider>
                    <Nav/>
                    <div className={styles.container}>
                        <main className={styles.main}>
                            {children}
                        </main>
                    </div>
                </TemplateProvider>
            </ElementsProvider>
        </>
    )
}

export default Layout