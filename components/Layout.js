// react/next
import styles from '../styles/Layout.module.css'

// context
import { ElementsProvider } from './CONTEXT/ElementsProvider'
import { TemplateProvider } from './CONTEXT/TemplateProvider'

// custom componenets
import Nav from './nav/Nav'

// external libraries
import { SnackbarProvider } from 'notistack';

const Layout = ( {children} ) => {
    return (
        <>
        <SnackbarProvider maxSnack={3}>
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
        </SnackbarProvider>
        </>
    )
}

export default Layout