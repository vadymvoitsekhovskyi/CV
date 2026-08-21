import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="nav-buttons">
                <div className="internship-badge">
                    <span>Шукаю стажування</span>
                </div>
                <NavLink to="/">Головна</NavLink>
                <NavLink to="/profile">Профіль</NavLink>
                <NavLink to="/portfolio">Додатково</NavLink>
            </nav>

            <div className="name" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <NavLink to="/">Вадим<br/>Войцеховський</NavLink>
            </div>
        </header>
    )
}

export default Header