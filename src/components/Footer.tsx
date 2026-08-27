import {useEffect, useState} from 'react'

const getCookie = (name: string) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
}

const Footer = () => {
    const [isDark, setIsDark] = useState(
        () => localStorage.getItem('theme') === 'dark'
    )

    const [showScroll, setShowScroll] = useState(false)
    const [currentLang, setCurrentLang] = useState('uk')

    useEffect(() => {
        const gtCookie = getCookie('googtrans');
        if (gtCookie && gtCookie.includes('/en')) {
            setCurrentLang('en');
        } else {
            setCurrentLang('uk');
        }
    }, [])

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDark)
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }, [isDark])

    useEffect(() => {
        const check = () => setShowScroll(window.pageYOffset > 300)
        check()
        window.addEventListener('scroll', check)
        return () => window.removeEventListener('scroll', check)
    }, [])

    const toggleLanguage = () => {
        const newLang = currentLang === 'uk' ? 'en' : 'uk';
        document.cookie = `googtrans=/uk/${newLang}; path=/`;
        document.cookie = `googtrans=/uk/${newLang}; domain=.${window.location.hostname}; path=/`;
        window.location.reload();
    }

    return (
        <div className="foot">
            <div className={`scroll-to-top${showScroll ? ' visible' : ''}`}
                 onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <span className="material-icons" translate="no">arrow_upward</span>
            </div>
            <div className="theme-toggle" onClick={toggleLanguage}>
                <span className="lang-icon" translate="no">
                    {currentLang === 'uk' ? 'EN' : 'UA'}
                </span>
            </div>
            <div className="theme-toggle" onClick={() => setIsDark(d => !d)}>
                <span className="material-icons theme-icon sun-icon" translate="no">dark_mode</span>
                <span className="material-icons theme-icon moon-icon" translate="no">light_mode</span>
            </div>
        </div>
    )
}

export default Footer