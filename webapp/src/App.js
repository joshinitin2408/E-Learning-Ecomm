import React from 'react'
import Root from './components/Root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Email from './pages/Email';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <Email /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;