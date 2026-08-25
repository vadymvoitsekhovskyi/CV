import {useEffect, useRef, useState} from 'react'
import {Link} from 'react-router-dom'

const SLIDES = ['Java', 'C#', 'JavaScript', 'React', 'Android', 'Kotlin', 'PostgreSQL', 'Docker', '.NET', 'git/GitHub']

interface Project {
    img: string
    title?: string
    description?: React.ReactNode
    link?: string
}

const PROJECTS: Project[] = [
    {
        img: '/images/restaurant.png',
        title: 'Restaurant',
        description:
            'Простий сайт-візитка онлайн ресторану, написаний на HTML/CSS/JavaScript. З нього я почав знайомство з ' +
            'вебом. Сайт не функціональний, без бази даних. ' +
            'Просто робив його, щоб навчитися розташовувати кнопки, блоки, меню, попрацювати зі стилями, фреймворком ' +
            'Bootstrap. На сайті кілька сторінок, зокрема головна з категоріями страв, конкретні страви та їх деталі, ' +
            'кошик та оформлення замовлення.',
    },
    {
        img: '/images/spots.png',
        title: 'Spots',
        description: (
            <>
                Інтерактивна головоломка "П'ятнашки", створена на простому
                JavaScript у зимовому стилі з музикою на фоні та мультяшним інтерфейсом.
                Має базовий ряд налаштувань типу звуки/музика, правила гри, складність і
                таймер. Сприяє розвитку логічного мислення й може слугувати як розвага,
                так і антистрес. Пограти можна за посиланням {' '}
                <a href="https://topkidgame.onrender.com" target="_blank" rel="noreferrer">
                    topkidgame.onrender.com
                </a>.
            </>
        ),
    },
    {
        img: '/images/smarttodo.png',
        title: 'SmartToDo',
        description:
            'Вебсистема управління завданнями, реалізована на ExpressJS, що надасть ' +
            'користувачу можливість фіксувати свої робочі записи та повсякденні справи. ' +
            'Можна написати алгоритм виконання спортивних вправ або поставити ' +
            'задачі під якийсь проєкт. Дозволяє створювати завдання, ' +
            'встановлювати терміни виконання, прикріпляти їх на головній сторінці, розподіляти їх по категоріях та ' +
            'отримувати нагадування (наприклад, про завершення дедлайну справи).',
    },
    {
        img: '/images/chatbot.png',
        title: 'Chatbot',
        description: (
            <>
                Простий інформаційно-навчальний бот на Java + TelegramAPI. Спрямований
                на тих, хто цікавиться автомобілями, вчиться в автошколі та простих автолюбителів.
                Надає короткі довідки про принцип роботи, основи керування, будову авто, техніку управління,
                категорії ТЗ, марки, історію. Поки доступно невелику кількість функціоналу, програма в процесі
                розробки.
                Ознайомитися з ботом можна за посиланням {' '}
                <a href="https://chatbot-ftcs.onrender.com" target="_blank" rel="noreferrer">
                    chatbot-ftcs.onrender.com
                </a>.
            </>
        ),
    },
    {
        img: '/images/tirevault.png',
        title: 'TireVault',
        description:
            'Вебрішення для автосервісу написане на Java + Spring Boot. Клієнти можуть онлайн ' +
            'записатися на технічне обслуговування або ремонт, переглядати перелік послуг і купувати ' +
            'автозапчастини в інтегрованому магазині. Передбачено особистий кабінет із історією записів і ' +
            'замовлень, а також користувачі можуть лишати відгуки в магазині та на послуги.',
    },
    {
        img: '/images/myblog.png',
        title: 'MyBlog',
        description:
            'Вебплатформа для ведення блогу, реалізована на ASP.NET. Користувачі можуть реєструватися, ' +
            'створювати та редагувати власні пости, прикріплювати зображення. Передбачена система коментарів ' +
            'для обговорення публікацій та лайки для оцінки контенту. Адміністрація здійснює модерацію дописів ' +
            'і може блокувати порушників правил спільноти.',
    },
    {
        img: '/images/cloudy.png',
        title: 'Cloudy',
        description:
            'Мобільний Android додаток для прогнозу погоди на базі Flutter/Dart. Використовує ' +
            'геолокацію та API штучного інтелекту для аналізу метеоданих. Має систему динамічних ' +
            'фонів, які адаптуються під хронологію часу доби, анімації ' +
            'погоди, прогноз та інші віджети. Є система пошуку міст для визначення погоди.',
    },
    {
        img: '/images/myfinance.png',
        title: 'MyFinance',
        description:
            'Нативний Android-застосунок на Kotlin для управління особистим бюджетом ' +
            'та фіксації транзакцій. Базується на сервісах Firebase для безпечного збереження ' +
            'даних. Є можливість авторизації через OAuth. Містить інтерактивну статистику, кастомізацію профілю та ' +
            'можливості імпорту й експорту фінансової історії у CSV або JSON.',
    }
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

const Home = () => {
    const [modalSrc, setModalSrc] = useState<string | null>(null)
    const [infoModal, setInfoModal] = useState<Project | null>(null)
    const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({})

    const toggleFlip = (idx: number) => {
        setFlippedCards(prev => ({...prev, [idx]: !prev[idx]}))
    }

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setModalSrc(null)
                setInfoModal(null)
            }
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
        <div className="page-home">
            <div className="hero-section">
                <picture className="full-width-resume">
                    <source media="(max-width: 768px)" srcSet="/images/profile_mobile.png"/>
                    <img src="/images/profile.png" alt="..."/>
                </picture>
                <div className="hero-socials">
                    <a href="https://www.linkedin.com/in/vadym-voitsekhovskyi-623868300/" target="_blank"
                       rel="noreferrer" className="hero-btn linkedin">
                        LinkedIn
                    </a>
                    <a href="https://github.com/vadymvoitsekhovskyi" target="_blank" rel="noreferrer"
                       className="hero-btn github">
                        GitHub
                    </a>
                </div>
            </div>
            <main className="timeline-main">
                <div className="timeline-container">
                    <div className="timeline-section reveal">
                        <div className="timeline-content">
                            <h2 className="section-title">Портфоліо</h2>
                            <p className="section-subtitle">
                                Наведіть курсором на картку для деталей (ПК) або натисніть на іконку інформації
                                (телефон).
                                Натисніть на картку для детального перегляду фото.
                            </p>
                            <div className="home-projects">
                                <div className="project-gallery">
                                    {PROJECTS.map((p, i) => (
                                        <div key={i} className="project-card">
                                            <div className={`project-card-inner${flippedCards[i] ? ' flipped' : ''}`}
                                                 onClick={() => setModalSrc(p.img)}>
                                                <div className="project-card-front">
                                                    <img src={p.img} alt=""/>
                                                    <div className="info-btn" onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (window.innerWidth <= 768) {
                                                            setInfoModal(p);
                                                        } else {
                                                            toggleFlip(i);
                                                        }
                                                    }}>
                                                        <span className="material-icons">info</span>
                                                    </div>
                                                </div>
                                                <div className="project-card-back">
                                                    <h3>{p.title}</h3>
                                                    {p.description && <p>{p.description}</p>}
                                                    <div className="close-flip-btn" onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleFlip(i);
                                                    }}>
                                                        <span className="material-icons">close</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-section">
                        <div className="timeline-content glossy-wrapper full-width-marquee">
                            <p className="section-subtitle instruments">Інструменти з якими працюю</p>
                            <div className="skills-carousel-section full-width-marquee">
                                <div className="carousel-viewport">
                                    <div className="carousel-track marquee-track">
                                        <div className="marquee-group">
                                            {SLIDES.map((s, i) => (
                                                <div key={`orig-${i}`} className="carousel-slide marquee-slide">
                                                    <h2>{s}</h2>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="marquee-group" aria-hidden="true">
                                            {SLIDES.map((s, i) => (
                                                <div key={`clone-${i}`} className="carousel-slide marquee-slide">
                                                    <h2>{s}</h2>
                                                </div>
                                            ))}
                                        </div>
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
            </main>
            <div className={`modal${modalSrc ? ' active' : ''}`} onClick={() => setModalSrc(null)}>
                {modalSrc && <img src={modalSrc} alt=""/>}
            </div>
            <div className={`modal${infoModal ? ' active' : ''}`} onClick={() => setInfoModal(null)}>
                {infoModal && (
                    <div className="text-modal-content" onClick={e => e.stopPropagation()}>
                        <div className="close-text-modal" onClick={() => setInfoModal(null)}>
                            <span className="material-icons">close</span>
                        </div>
                        <h3>{infoModal.title}</h3>
                        <p>{infoModal.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home