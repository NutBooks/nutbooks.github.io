import { RouterProvider, createHashRouter } from 'react-router-dom';
import BookmarkListPage from './pages/BookmarkListPage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import PrivateRoute from './pages/PrivateRoute';

const router = createHashRouter([
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
  {
    path: '/mypage',
    element: (
      <PrivateRoute>
        <MyPage />
      </PrivateRoute>
    ),
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
