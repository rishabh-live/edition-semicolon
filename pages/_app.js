import '../styles/globals.css'
import Logo from '../components/logo'

function MyApp({ Component, pageProps }) {
    return <> <Logo/>< Component {...pageProps }
    /></>
}

export default MyApp