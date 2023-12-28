import {createRoot} from 'react-dom/client';
import './index.css';
import {App} from 'components/App/App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';

createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter>
        <App/>
    </HashRouter>
)

reportWebVitals()
