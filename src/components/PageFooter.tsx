import {useState} from 'react'
import {Link} from 'react-router-dom'

const CopyBtn = ({text}: { text: string }) => {
    const [copied, setCopied] = useState(false)

    const handle = (e: React.MouseEvent) => {
        e.stopPropagation()
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        })
    }

    return (
        <span
            onClick={handle}
            title="Копіювати"
            className="material-icons copy-btn"
            translate="no"
        >
            {copied ? 'check' : 'content_copy'}
        </span>
    )
}

const PageFooter = () => {
    return (
        <footer className="home-footer reveal">
            <div className="footer-content">
                <div className="footer-infographic">
                    <div className="info-badge">
                        <span className="material-icons" translate="no">devices</span>
                        <div className="info-text">
                            <span className="info-title">РОЗРОБКА</span>
                            <span className="info-subtitle">ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ</span>
                        </div>
                    </div>
                    <div className="footer-extra-info">
                        <div className="status-indicator">
                            <span>Відкритий до стажування та комунікації</span>
                        </div>
                        <div className="location-indicator">
                            <span>Обухів, Київ, УКРАЇНА (офіс/віддалено/гібрид)</span>
                        </div>
                    </div>
                </div>
                <div className="footer-nav-links">
                    <span className="footer-section-title">Навігація</span>
                    <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Головна</Link>
                    <Link to="/profile" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Профіль</Link>
                    <Link to="/portfolio" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Навчання</Link>
                </div>
                <div className="contact-info-blocks">
                    <span className="footer-section-title">Контактні дані</span>
                    <div className="info-block">
                        <span>@vadymvoitsekhovskyi</span>
                        <CopyBtn text="@vadymvoitsekhovskyi"/>
                    </div>
                    <div className="info-block">
                        <span>067 518 22 22</span>
                        <CopyBtn text="067 518 22 22"/>
                    </div>
                    <div className="info-block">
                        <span>vadim.rolex.2005@gmail.com</span>
                        <CopyBtn text="vadim.rolex.2005@gmail.com"/>
                    </div>
                </div>
                <div className="social-links-text">
                    <span className="footer-section-title">Соціальні мережі</span>
                    <a href="https://github.com/vadymvoitsekhovskyi" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/vadym-voitsekhovskyi-623868300/" target="_blank"
                       rel="noreferrer">LinkedIn</a>
                    <a href="https://discord.com/users/983375318268141629" target="_blank" rel="noreferrer">Discord</a>
                </div>
            </div>
            <div className="vault">
                <div className="footer-copyright">
                    © {new Date().getFullYear()} Вадим Войцеховський
                </div>
                <div className="label-name">
                    VOITSEKH
                </div>
            </div>
        </footer>
    )
}

export default PageFooter