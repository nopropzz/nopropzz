
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { VisualEditorProvider } from './components/VisualEditor';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <VisualEditorProvider>
      <App />
    </VisualEditorProvider>
  </React.StrictMode>
);
