import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import '@/styles';
import App from '@/components/App';

const root = createRoot(document.body.appendChild(document.createElement('div')));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
