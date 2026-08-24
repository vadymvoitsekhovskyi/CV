import {useEffect, useRef, useState} from 'react'

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