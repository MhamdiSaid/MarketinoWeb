import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Register from "./Register.tsx";
import UserSpace from './components/userspace/userspace.tsx';
import './index.css';
import StoreDashboard from './components/StoreDashboard.tsx/StoreDashboard.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <StoreDashboard />
    </StrictMode>
)
