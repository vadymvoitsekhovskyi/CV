import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const GALLERY_ITEMS = [
    {type: 'img', src: '/images/c0.jpg', className: ''},
    {type: 'empty', className: 'col-span-2'},

    {type: 'empty', className: ''},
    {type: 'empty', className: ''},
    {type: 'img', src: '/images/c2.jpg', className: 'row-span-2'},

    {type: 'img', src: '/images/c5.jpg', className: 'col-span-2'},
    {type: 'empty', src: '/images/c3.jpg', className: ''},
    {type: 'img', src: '/images/c3.jpg', className: 'col-span-2'},

    {type: 'img', src: '/images/c4.jpg', className: 'row-span-2'},
    {type: 'empty', className: ''},
    {type: 'empty', className: ''},

    {type: 'img', src: '/images/c1.jpg', className: 'col-span-2'},
    {type: 'img', src: '/images/c6.jpg', className: ''},
    {type: 'empty', className: ''},
    {type: 'img', src: '/images/c7.jpg', className: ''}
]

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
        >
            {copied ? 'check' : 'content_copy'}
        </span>
    )
}

const Portfolio = () => {
    const [modalSrc, setModalSrc] = useState<string | null>(null)

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setModalSrc(null)
        }

        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.1});

        const hiddenElements = document.querySelectorAll('.reveal');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="page-portfolio">
            <div className="hero-section">
                <picture className="full-width-resume">
                    <source media="(max-width: 768px)" srcSet="/images/profile_mobile.png"/>
                    <img src="/images/profile.png" alt="..."/>
                </picture>
            </div>
            <main className="timeline-main">
                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    <div className="timeline-section reveal">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h2 className="section-title">Сертифікати</h2>
                            <p className="section-subtitle">Досягнення, курси та інша активність</p>
                            <div className="certificate-gallery">
                                {GALLERY_ITEMS.map((item, i) => (
                                    item.type === 'img' ? (
                                        <div key={i} className={`gallery-item img-item ${item.className}`}
                                             onClick={() => setModalSrc(item.src!)}>
                                            <img src={item.src} alt="сертифікат"/>
                                        </div>
                                    ) : (
                                        <div key={i} className={`gallery-item empty-block ${item.className}`}></div>
                                    )
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
                <footer className="home-footer reveal">
                    <div className="footer-content">
                        <div className="footer-infographic">
                            <div className="info-badge">
                                <span className="material-icons">developer_mode</span>
                                <div className="info-text">
                                    <span className="info-title">РОЗРОБКА</span>
                                    <span className="info-subtitle">ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ</span>
                                </div>
                            </div>
                            <div className="footer-extra-info">
                                <div className="status-indicator">
                                    <span>Шукаю стажування (Open to work)</span>
                                </div>
                                <div className="location-indicator">
                                    <span>Обухів, Україна (Remote / Hybrid)</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer-nav-links">
                            <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Головна</Link>
                            <Link to="/profile"
                                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Профіль</Link>
                            <Link to="/portfolio"
                                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Додатково</Link>
                        </div>
                        <div className="contact-info-blocks">
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
                            <a href="https://github.com/vadymvoitsekhovskyi" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/in/vadym-voitsekhovskyi-623868300/" target="_blank"
                               rel="noreferrer">LinkedIn</a>
                            <a href="https://discord.com/users/983375318268141629" target="_blank"
                               rel="noreferrer">Discord</a>
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
                <div className={`modal${modalSrc ? ' active' : ''}`} onClick={() => setModalSrc(null)}>
                    {modalSrc && <img src={modalSrc} alt=""/>}
                </div>
            </main>
        </div>
    )
}

export default Portfolio