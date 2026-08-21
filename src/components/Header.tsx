import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className="nav-buttons">
                <div className="internship-badge">
                    <span>Шукаю стажування</span>
                </div>
                <Link to="/">Головна</Link>
                <Link to="/profile">Профіль</Link>
                <Link to="/portfolio">Додатково</Link>
            </nav>

            <div className="name">
                <Link to="/">Вадим<br/>Войцеховський</Link>
            </div>
        </header>
    )
}

export default Header