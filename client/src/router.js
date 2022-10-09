import { createBrowserRouter } from 'react-router-dom';
import App from './app';
import Login from './pages/admin/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/admin/login',
    element: <Login />,
  },
]);

export default router;
