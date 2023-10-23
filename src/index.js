import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import { PropulseSlice } from './features/PropulseStore';
import { configureStore } from '@reduxjs/toolkit';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactView from './components/ContactView';


const store = configureStore({
  reducer: {
    products: PropulseSlice.reducer,
  },
});



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <App />
    </div>,
  },
  {
    path: "/contact",
    element: (
      <div>
        <ContactView />
      </div>
    ),
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
