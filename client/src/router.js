import { createBrowserRouter } from 'react-router-dom';
import App from './app';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

export default router;
