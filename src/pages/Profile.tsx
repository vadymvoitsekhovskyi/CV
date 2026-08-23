import {useEffect, useState} from 'react'

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

const Profile = () => {
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setModalOpen(false)
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

    const closeOnBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) setModalOpen(false)
    }

    return (
        <div className="page-profile">
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
                            <h2 className="section-title">Профіль</h2>
                            <div className="profile-text">
                                <p>
                                    &emsp;Звати мене Вадим. Студент 4-го курсу університету. В розробці близько
                                    трьох років. В планах надалі вчитися та працювати у напрямі backend development.
                                    Розробляю рішення різними мовами, зокрема на Java, .NET та JavaScript – бекенд,
                                    REST API, робота з базами тощо. В рамках навчання маю досвід в написанні різних
                                    програмних рішень таких як сайти, десктопні програми, ігри, мобільні застосунки.
                                    Працював з проєктуванням UML, розгортанням на Docker, створенням прототипів у
                                    Figma. Слабкі сторони – фронтенд, дизайн, комунікативні навички. <br/>
                                    &emsp;З програмуванням познайомився у школі на уроках інформатики. Мова, на якій
                                    вчився писати код була Pascal. Дуже сподобалось програмувати, запускати й
                                    тестувати створені програми.
                                </p>
                                <p>
                                    &emsp; Почало виходити, так і пішов у цьому напрямку. Практичного досвіду над
                                    реальними проєктами немає. На період навчання в технікумі проходив технологічну
                                    практику на підприємстві, де ознайомлювався з ІТ-відділом та виробничими
                                    процесами. Як результат практики написав 2 рішення - дропшипінгову платформу й
                                    автомобільний чат-бот. У 2025 проходив ознайомчу практику і як результат написав
                                    з командою невеликий проєкт. У 2026 році пройшов виробничу практику в компанії.
                                    В команді написали і захистили проєкт. Маю кілька сертифікатів про проходження
                                    безплатних курсів та пару проєктів на GitHub.
                                </p>
                                <button className="download-btn" onClick={() => setModalOpen(true)}>
                                    Скачати резюме
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-section reveal">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h2 className="section-title">Освіта</h2>
                            <div className="education-grid">
                                <div className="edu-item">
                                    <p className="title">Академічний ліцей №5</p>
                                    <p className="period">2011 - 2020</p>
                                    <p className="txt">Базова середня освіта</p>
                                </div>
                                <div className="edu-item">
                                    <p className="title">
                                        <abbr
                                            title="Фаховий коледж інформаційних систем і технологій Київського національного економічного університету імені Вадима Гетьмана">
                                            ФКІСІТ КНЕУ ім. В. Гетьмана
                                        </abbr>
                                    </p>
                                    <p className="period">2020 - 2024</p>
                                    <p className="txt">Фаховий молодший бакалавр</p>
                                </div>
                                <div className="edu-item">
                                    <p className="title">
                                        <abbr title="Державний університет інформаційно-комунікаційних технологій">
                                            ДУІКТ
                                        </abbr>
                                    </p>
                                    <p className="period">2024 - наш час</p>
                                    <p className="txt">Бакалавр</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-section reveal">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h2 className="section-title">Досвід роботи</h2>
                            <div className="experience-grid">
                                <div className="exp-item">
                                    <p className="title">ПрАТ «ККПК»</p>
                                    <p className="period">2024</p>
                                    <p className="txt">
                                        Проходив технологічну та переддипломну практику. Ознайомлювався з
                                        IT-відділом підприємства, написав 2 рішення.
                                    </p>
                                </div>
                                <div className="exp-item">
                                    <p className="title">NIX Solutions</p>
                                    <p className="period">2026</p>
                                    <p className="txt">
                                        Перебував дистанційно на виробничій практиці. Разом з командою
                                        розробляли невеликий проєкт за методологією Scrum. Був бекенд-розробником
                                        у команді, займався серверною частиною програми, і трохи зачепив
                                        фронтенд-верстку деяких сторінок. Попрацював з GitLab, Trello, Java,
                                        TypeScript.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-section reveal">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h2 className="section-title">Технічні навички</h2>
                            <div className="skills-container">
                                <div className="hard-skills">
                                    <div className="skill">
                                        <p>
                                            1) Java (OOP, Core)
                                            <br/>
                                            2) C# (.NET)
                                            <br/>
                                            3) Python (базово)
                                            <br/>
                                            4) JavaScript/TypeScript (базово)
                                            <br/>
                                            5) Docker
                                            <br/>
                                            6) Postman, Swagger
                                            <br/>
                                            7) OOP, REST, MVC
                                        </p>
                                        <p>
                                            8) Android (Java, Kotlin, Flutter)
                                            <br/>
                                            9) Spring Boot, Spring MVC, Hibernate/JPA
                                            <br/>
                                            10) MVVM, WPF, WinForms, JavaFX, Razor
                                            <br/>
                                            11) PostgreSQL, MySQL, Firebase
                                            <br/>
                                            12) git, GitLab/GitHub
                                            <br/>
                                            13) Figma, Bootstrap
                                            <br/>
                                            14) HTML, CSS
                                        </p>
                                    </div>
                                    <div className="languages">
                                        <span className="language-item">
                                            <img src="https://cdn-icons-png.flaticon.com/128/14009/14009737.png" alt=""
                                                 className="flag-icon"/>
                                            Українська -<br/>
                                            рідна
                                        </span>
                                        <span className="language-item">
                                            <img src="https://cdn-icons-png.flaticon.com/128/14009/14009732.png" alt=""
                                                 className="flag-icon"/>
                                            Англійська - обмежений рівень <br/>
                                            (достатній для роботи)
                                        </span>
                                    </div>
                                </div>
                                <div className="soft-skills">
                                    <div className="skill other-info">
                                        <p className="other-title">Інше</p>
                                        <p>
                                            Двічі приймав участь у школі DES.
                                            Писав і захищав з командою
                                            невеличкі ІТ-проєкти.
                                        </p>
                                        <p>
                                            <b>Хобі</b>: настільний теніс, велоспорт,
                                            автомобілі. Маю посвідчення водія.
                                        </p>
                                    </div>
                                </div>
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
                <div className={`modal${modalOpen ? ' show' : ''}`} onClick={closeOnBackdrop}>
                    <div className="modal-content">
                        <span className="close-button" onClick={() => setModalOpen(false)}>
                            &times;
                        </span>
                        <h3>Виберіть мову резюме 👇</h3>
                        <div className="language-options">
                            <a href="/docs/Резюме.pdf" download="Резюме.pdf" className="language-option">
                                <img src="https://cdn-icons-png.flaticon.com/128/14009/14009737.png" alt=""
                                     className="flag-icon"/>
                                <span>Українська</span>
                            </a>
                            <a href="/docs/Resume.pdf" download="Resume.pdf" className="language-option">
                                <img src="https://cdn-icons-png.flaticon.com/128/14009/14009732.png" alt=""
                                     className="flag-icon"/>
                                <span>Англійська</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Profile