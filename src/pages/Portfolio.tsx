import {useEffect, useState} from 'react'
import PageFooter from '../components/PageFooter'
import {useReveal} from '../hooks/useReveal'
import HeroSection from '../components/HeroSection'

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

const Portfolio = () => {
    const [modalSrc, setModalSrc] = useState<string | null>(null)

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setModalSrc(null)
        }

        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [])

    useReveal()

    return (
        <div className="page-portfolio">
            <HeroSection />
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
                <PageFooter/>
                <div className={`modal${modalSrc ? ' active' : ''}`} onClick={() => setModalSrc(null)}>
                    {modalSrc && <img src={modalSrc} alt=""/>}
                </div>
            </main>
        </div>
    )
}

export default Portfolio