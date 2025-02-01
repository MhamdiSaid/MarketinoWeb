import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Register from "./Register.tsx";
import UserSpace from './components/userspace/userspace.tsx';
import './index.css';
import StoreDashboard from './components/StoreDashboard.tsx/StoreDashboard.tsx';
import StoreSection from './components/ModifyStore/StoreSection.tsx';
import ProductManager from './components/ModifyStore/ProductManager.tsx';
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <h1>s</h1>
    <ProductManager />
    </StrictMode>
)
