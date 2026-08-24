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

    // const isMaintenance = true;
    // if (isMaintenance) {
    //     return (
    //         <div className="maintenance-container">
    //             <h1>404</h1>
    //             <p>Сторінка зараз на ремонті 😉</p>
    //         </div>
    //     )
    // }

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
                        <div className="timeline-content profile-split-content">
                            <div className="profile-left-col">
                                <div className="portrait-container">
                                    <div className="portrait-outline"></div>
                                    <div className="portrait-wrapper">
                                        <img src="/images/portrait.jpg" alt="..." className="portrait-img"/>
                                    </div>
                                </div>
                                <span className="portrait-label">Портрет</span>
                            </div>
                            <div className="profile-right-col">
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
                    </div>
                    <div className="timeline-section reveal">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content list-view-section">
                            <div className="list-view-header">
                                <h2 className="section-title">Освіта</h2>
                            </div>
                            <div className="list-view-container">
                                <div className="list-item">
                                    <div className="list-item-left">
                                        <span className="list-item-number">01</span>
                                        <div className="list-item-content">
                                            <h3 className="list-item-title">Академічний ліцей №5</h3>
                                            <p className="list-item-subtitle">Базова середня освіта &bull; 2011 -
                                                2020</p>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <button className="list-item-btn">Деталі</button>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div className="list-item-left">
                                        <span className="list-item-number">02</span>
                                        <div className="list-item-content">
                                            <h3 className="list-item-title">
                                                <abbr
                                                    title="Фаховий коледж інформаційних систем і технологій Київського національного економічного університету імені Вадима Гетьмана">
                                                    ФКІСІТ КНЕУ ім. В. Гетьмана
                                                </abbr>
                                            </h3>
                                            <p className="list-item-subtitle">Фаховий молодший бакалавр &bull; 2020 -
                                                2024</p>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <button className="list-item-btn">Деталі</button>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div className="list-item-left">
                                        <span className="list-item-number">03</span>
                                        <div className="list-item-content">
                                            <h3 className="list-item-title">
                                                <abbr
                                                    title="Державний університет інформаційно-комунікаційних технологій">
                                                    ДУІКТ
                                                </abbr>
                                            </h3>
                                            <p className="list-item-subtitle">Бакалавр &bull; 2024 - наш час</p>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <button className="list-item-btn">Деталі</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-section reveal">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content list-view-section">
                            <div className="list-view-header">
                                <h2 className="section-title">Досвід роботи</h2>
                            </div>
                            <div className="list-view-container">
                                <div className="list-item">
                                    <div className="list-item-left">
                                        <span className="list-item-number">01</span>
                                        <div className="list-item-content">
                                            <h3 className="list-item-title">ПрАТ «ККПК»</h3>
                                            <p className="list-item-subtitle">Технологічна та переддипломна
                                                практика &bull; 2024</p>
                                            <p className="list-item-desc">
                                                Проходив технологічну та переддипломну практику. Ознайомлювався з
                                                IT-відділом підприємства, написав 2 рішення.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <button className="list-item-btn">Деталі</button>
                                    </div>
                                </div>
                                <div className="list-item">
                                    <div className="list-item-left">
                                        <span className="list-item-number">02</span>
                                        <div className="list-item-content">
                                            <h3 className="list-item-title">NIX Solutions</h3>
                                            <p className="list-item-subtitle">Виробнича практика &bull; 2026</p>
                                            <p className="list-item-desc">
                                                Перебував дистанційно на виробничій практиці. Разом з командою
                                                розробляли невеликий проєкт за методологією Scrum. Був
                                                бекенд-розробником у команді, займався серверною частиною програми, і
                                                трохи зачепив фронтенд-верстку деяких сторінок. Попрацював з GitLab,
                                                Trello, Java, TypeScript.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <button className="list-item-btn">Деталі</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-section reveal">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content list-view-section">
                            <div className="list-view-header">
                                <h2 className="section-title">Навички</h2>
                            </div>
                            <div className="skills-bento-grid">
                                <div className="bento-box tech-skills-box">
                                    <h3 className="bento-title">Технології</h3>
                                    <div className="skills-chips">
                                        <span className="skill-chip">Java (OOP, Core)</span>
                                        <span className="skill-chip">C# (.NET)</span>
                                        <span className="skill-chip">Python (базово)</span>
                                        <span className="skill-chip">JavaScript / TypeScript (базово)</span>
                                        <span className="skill-chip">Docker</span>
                                        <span className="skill-chip">Postman, Swagger</span>
                                        <span className="skill-chip">OOP, REST, MVC</span>
                                        <span className="skill-chip">Android (Java, Kotlin, Flutter)</span>
                                        <span className="skill-chip">Spring Boot, MVC, Hibernate/JPA</span>
                                        <span className="skill-chip">MVVM, WPF, WinForms, JavaFX, Razor</span>
                                        <span className="skill-chip">PostgreSQL, MySQL, Firebase</span>
                                        <span className="skill-chip">git, GitLab/GitHub</span>
                                        <span className="skill-chip">Figma, Bootstrap</span>
                                        <span className="skill-chip">HTML, CSS</span>
                                    </div>

                                    {/* Доданий блок Soft Skills */}
                                    <h3 className="bento-title" style={{marginTop: '30px'}}>Особисті якості</h3>
                                    <div className="skills-chips">
                                        <span className="skill-chip">Командна робота</span>
                                        <span className="skill-chip">Комунікабельність</span>
                                        <span className="skill-chip">Вирішення проблем (Problem-solving)</span>
                                        <span className="skill-chip">Адаптивність</span>
                                        <span className="skill-chip">Тайм-менеджмент</span>
                                        <span className="skill-chip">Відповідальність</span>
                                        <span className="skill-chip">Бажання вчитися</span>
                                    </div>
                                </div>
                                <div className="bento-col">
                                    <div className="bento-box languages-box">
                                        <h3 className="bento-title">Мови</h3>
                                        <div className="languages-list">
                                            <div className="lang-item">
                                                <img src="https://cdn-icons-png.flaticon.com/128/14009/14009737.png"
                                                     alt="UA" className="flag-icon"/>
                                                <div className="lang-text">
                                                    <span className="lang-name">Українська</span>
                                                    <span className="lang-level">Рідна</span>
                                                </div>
                                            </div>
                                            <div className="lang-item">
                                                <img src="https://cdn-icons-png.flaticon.com/128/14009/14009732.png"
                                                     alt="EN" className="flag-icon"/>
                                                <div className="lang-text">
                                                    <span className="lang-name">Англійська</span>
                                                    <span
                                                        className="lang-level">Обмежений рівень (достатній для роботи)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bento-box other-box">
                                        <h3 className="bento-title">Інше</h3>
                                        <p className="other-info-text">
                                            <b>Хобі:</b> настільний теніс, велоспорт, автомобілі. Маю посвідчення водія.
                                        </p>
                                    </div>
                                </div>
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
                        <div className="social-links-blocks">
                            <a href="https://github.com/vadymvoitsekhovskyi" target="_blank" rel="noreferrer"
                               className="social-btn-circular">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/vadym-voitsekhovskyi-623868300/" target="_blank"
                               rel="noreferrer" className="social-btn-circular">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a href="https://discord.com/users/983375318268141629" target="_blank" rel="noreferrer"
                               className="social-btn-circular">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                                </svg>
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