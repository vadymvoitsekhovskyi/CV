import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {HashRouter} from 'react-router-dom'
import App from './App'
import './css/global.css'
import './css/header.css'
import './css/footer.css'
import './css/page-footer.css'
import './css/home.css'
import './css/portfolio.css'
import './css/profile.css'
import './css/theme.css'
import './css/tablet.css'
import './css/mobile.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </StrictMode>
)