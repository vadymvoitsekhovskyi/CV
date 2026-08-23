import {useEffect, useState} from 'react'

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
                        <div className="contact-info-blocks">
                            <div className="info-block">
                                <div className="icons-combined">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                         style={{color: '#0088cc'}}>
                                        <path
                                            d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.787l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                                    </svg>
                                </div>
                                <span>@vadymvoitsekhovskyi</span>
                                <CopyBtn text="@vadymvoitsekhovskyi"/>
                            </div>
                            <div className="info-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"
                                     style={{color: '#4CAF50'}}>
                                    <path
                                        d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                                </svg>
                                <span>067 518 22 22</span>
                                <CopyBtn text="067 518 22 22"/>
                            </div>
                            <div className="info-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     style={{color: '#EA4335'}}>
                                    <path
                                        d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                                </svg>
                                <span>vadim.rolex.2005@gmail.com</span>
                                <CopyBtn text="vadim.rolex.2005@gmail.com"/>
                            </div>
                        </div>
                        <div className="social-links-blocks">
                            <a href="https://github.com/vadymvoitsekhovskyi" target="_blank" rel="noreferrer"
                               className="social-btn">
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/vadym-voitsekhovskyi-623868300/" target="_blank"
                               rel="noreferrer" className="social-btn">
                                LinkedIn
                            </a>
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