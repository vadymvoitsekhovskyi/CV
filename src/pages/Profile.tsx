import { useEffect, useState } from 'react'
import PageFooter from '../components/PageFooter'
import { useReveal } from '../hooks/useReveal'
import HeroSection from '../components/HeroSection'

const Profile = () => {
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setModalOpen(false)
        }

        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [])

    useReveal()

    const closeOnBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) setModalOpen(false)
    }

    return (
        <div className="page-profile">
            <HeroSection />
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
                                        <img src="/images/portrait.jpg" alt="..." className="portrait-img" />
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
                                        Figma. Слабкі сторони – фронтенд та вебдизайн.
                                        З програмуванням познайомився у школі на уроках інформатики. Мова, на якій
                                        вчився писати код була Pascal.
                                    </p>
                                    <p>
                                        &emsp; Дуже сподобалось програмувати, запускати й
                                        тестувати створені програми. Почало виходити, так і пішов у цьому напрямку. Комерційного досвіду над
                                        реальними проєктами немає. На період навчання в технікумі проходив
                                        практику на підприємстві, де ознайомлювався з ІТ-відділом та виробничими
                                        процесами. Як результат практики написав 2 рішення. У 2025 році проходив ще одну практику
                                        і як результат написав
                                        з командою невеликий проєкт. У 2026 році проходив виробничу практику в ІТ компанії.
                                        В команді написали і захистили проєкт. Маю кілька сертифікатів про проходження
                                        безплатних курсів та деякі роботи на GitHub.
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
                                            <p className="list-item-desc">
                                                Здобув повну загальну середню освіту на базі 11 класів та фахову
                                                передвищу освіту за освітньо-професійним ступенем фахового молодшого
                                                бакалавра за спеціальністю Інженерія програмного забезпечення.
                                            </p>
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
                                            <p className="list-item-subtitle">Бакалавр &bull; 2024 - 2027</p>
                                            <p className="list-item-desc">
                                                Здобуваю вищу освіту за освітнім ступенем бакалавра за спеціальністю
                                                Інженерія програмного забезпечення.
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
                                <h2 className="section-title">Досвід роботи</h2>
                            </div>
                            <div className="list-view-container">
                                <div className="list-item">
                                    <div className="list-item-left">
                                        <span className="list-item-number">01</span>
                                        <div className="list-item-content">
                                            <h3 className="list-item-title">ПрАТ ККПК</h3>
                                            <p className="list-item-subtitle">Практикант &bull; 2024 (2 місяці)</p>
                                            <p className="list-item-desc">
                                                Проходив практику в ІТ-відділі виробничого підприємства. Самостійно
                                                розробив 2 програмні рішення.
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
                                            <h3 className="list-item-title">DES Winter School</h3>
                                            <p className="list-item-subtitle">Практикант &bull; 2025, 2026</p>
                                            <p className="list-item-desc">
                                                Двічі брав участь в ІТ-інтенсиві Data Engineering and Security, де переймав
                                                досвід у провідних практиків галузі. Як результат - разом із командою
                                                розробив та захистив 2 проєкти.
                                            </p>
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
                                            <h3 className="list-item-title">NIX Solutions</h3>
                                            <p className="list-item-subtitle">Стажування &bull; 2026 (1 місяць)</p>
                                            <p className="list-item-desc">
                                                Стажувався у ІТ компанії в онлайн
                                                форматі, де з командою працювали за Scrum та розробили проєкт.
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
                                    <h3 className="bento-title">Технічний стек</h3>
                                    <div className="skills-chips">
                                        <span className="skill-chip">Java</span>
                                        <span className="skill-chip">C#</span>
                                        <span className="skill-chip">JavaScript / TypeScript</span>
                                        <span className="skill-chip">Python</span>
                                        <span className="skill-chip">Kotlin</span>
                                        <span className="skill-chip">Figma</span>
                                        <span className="skill-chip">Spring Boot (Data, Security)</span>
                                        <span className="skill-chip">Hibernate / JPA</span>
                                        <span className="skill-chip">ASP.NET / Razor</span>
                                        <span className="skill-chip">Entity Framework</span>
                                        <span className="skill-chip">Node.js / Express</span>
                                        <span className="skill-chip">Django</span>
                                        <span className="skill-chip">PostgreSQL</span>
                                        <span className="skill-chip">MySQL</span>
                                        <span className="skill-chip">Firebase</span>
                                        <span className="skill-chip">Android SDK</span>
                                        <span className="skill-chip">Flutter</span>
                                        <span className="skill-chip">WPF / WinForms</span>
                                        <span className="skill-chip">JavaFX</span>
                                        <span className="skill-chip">REST API</span>
                                        <span className="skill-chip">OOP</span>
                                        <span className="skill-chip">MVC / MVVM</span>
                                        <span className="skill-chip">Git (GitHub, GitLab)</span>
                                        <span className="skill-chip">Docker</span>
                                        <span className="skill-chip">Postman / Swagger</span>
                                        <span className="skill-chip">HTML / CSS</span>
                                        <span className="skill-chip">Bootstrap</span>
                                    </div>
                                    <h3 className="bento-title" style={{ marginTop: '30px' }}>Особисті якості</h3>
                                    <div className="skills-chips">
                                        <span className="skill-chip">Командна робота (Scrum)</span>
                                        <span className="skill-chip">Аналітичне мислення (problem-solving)</span>
                                        <span className="skill-chip">Швидке засвоєння нових технологій</span>
                                        <span className="skill-chip">Самостійність та відповідальність</span>
                                        <span className="skill-chip">Адаптивність (гнучкість до стеку)</span>
                                        <span className="skill-chip">Тайм-менеджмент</span>
                                        <span className="skill-chip">Висока працездатність</span>
                                        <span className="skill-chip">Бажання вчитися</span>
                                    </div>
                                </div>
                                <div className="bento-col">
                                    <div className="bento-box languages-box">
                                        <h3 className="bento-title">Мови</h3>
                                        <div className="languages-list">
                                            <div className="lang-item">
                                                <img src="https://cdn-icons-png.flaticon.com/128/14009/14009737.png"
                                                    alt="..." className="flag-icon" />
                                                <div className="lang-text">
                                                    <span className="lang-name">Українська</span>
                                                    <span className="lang-level">Рідна</span>
                                                </div>
                                            </div>
                                            <div className="lang-item">
                                                <img src="https://cdn-icons-png.flaticon.com/128/14009/14009732.png"
                                                    alt="..." className="flag-icon" />
                                                <div className="lang-text">
                                                    <span className="lang-name">Англійська</span>
                                                    <span
                                                        className="lang-level">Обмежений рівень володіння (достатній для роботи)</span>
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
                <PageFooter />
                <div className={`modal${modalOpen ? ' show' : ''}`} onClick={closeOnBackdrop}>
                    <div className="modal-content">
                        <span className="close-button" onClick={() => setModalOpen(false)}>
                            &times;
                        </span>
                        <h3>Виберіть мову резюме 👇</h3>
                        <div className="language-options">
                            <a href="/docs/Резюме.pdf" download="Резюме.pdf" className="language-option">
                                <img src="https://cdn-icons-png.flaticon.com/128/14009/14009737.png" alt="..."
                                    className="flag-icon" />
                                <span>Українська</span>
                            </a>
                            <a href="/docs/Resume.pdf" download="Resume.pdf" className="language-option">
                                <img src="https://cdn-icons-png.flaticon.com/128/14009/14009732.png" alt="..."
                                    className="flag-icon" />
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