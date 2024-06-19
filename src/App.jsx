import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BookmarkListPage from './pages/BookmarkListPage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import PrivateRoute from './pages/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/list',
    element: (
      <PrivateRoute>
        <BookmarkListPage />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/join',
    element: <JoinPage />,
  },
]);

function App() {
  return (
    <>
      <main className="container mx-auto px-4">
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
