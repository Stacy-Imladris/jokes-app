import {createRoot} from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import {App} from 'components/App/App';

createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter>
        <App/>
    </HashRouter>
)

reportWebVitals()
