import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
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
