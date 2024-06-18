import React from 'react'
import Root from './components/Root'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Email from './pages/Email';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: 'email', element: <Email /> },
      // { path: 'importdata', element: <ImportData /> },
      // { path: 'dataimport', element: <DataImport /> },
      // { path: 'users', element: <Users /> },
      // { path: 'register', element: <Register /> },
    ],
  },
]);
const App = () => {
  return (
    <>
      <Root />
    </>
  )
}

export default App