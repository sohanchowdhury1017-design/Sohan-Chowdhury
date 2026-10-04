import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in application:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#FAF9F5', padding: '24px', fontFamily: 'sans-serif', color: '#1c1917', textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>N.B.N Sohan Chowdhury</h1>
          <p style={{ fontSize: '14px', color: '#78716c', marginBottom: '16px' }}>ওয়েবসাইটটি লোড হতে সাময়িক সমস্যা হয়েছে। অনুগ্রহ করে রিফ্রেশ করুন।</p>
          <button 
            onClick={() => window.location.reload()}
            style={{ padding: '10px 24px', background: '#FA812F', color: '#fff', border: 'none', borderRadius: '999px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            পুনরায় লোড করুন (Reload)
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootEl = document.getElementById('root');
if (rootEl) {
  createRoot(rootEl).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
