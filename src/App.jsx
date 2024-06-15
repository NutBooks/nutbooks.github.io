import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BookmarkListPage from './pages/BookmarkListPage';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/list',
    element: <BookmarkListPage />,
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
