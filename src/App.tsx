import {useEffect} from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Portfolio from './pages/Portfolio'

const App = () => {
    const {pathname} = useLocation()

    useEffect(() => {
        if (pathname === '/') {
            window.scrollTo({top: 0, behavior: 'smooth'})
        } else {
            setTimeout(() => {
                const mainElement = document.querySelector('main')
                if (mainElement) {
                    const offsetPosition = mainElement.getBoundingClientRect().top + window.scrollY - 50
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    })
                } else {
                    window.scrollTo({top: 0, behavior: 'smooth'})
                }
            }, 100)
        }
    }, [pathname])

    return (
        <>
            <Header/>
            <div key={pathname} className="page-transition">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    )
}

export default App