import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { LoginPage } from './pages/RegLoginPages/LoginPage';
import { RegistrationPage } from './pages/RegLoginPages/RegistrationPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import Card from './components/ScoreTable/Card';
// import {FavoritePage} from "./pages/ProfilePage/ProfilePage";
// import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { Provider } from 'react-redux';
import { store } from './store/store';
import './tailwind.css';
import { CardContent } from '@mui/material';
// import { FavoritesPage } from './Favotites/FavoritePage';
import { CardInfoPage } from './components/ScoreTable/CardInfoPage';
import PropertyDetailsPage from './components/ScoreTable/CardPage';

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <WelcomePage/>,
    // },
    {
      path: '/',
      element: <RegistrationPage />,
    },
    {
      path: '/login-page',
      element: <LoginPage />,
    },
    {
      path: '/main-page',
      element: <MainPage />,
    },
    {
      path: '/profile-page',
      element: <ProfilePage />,
    },
    {
      path: '/card-page',
      element: <PropertyDetailsPage />,
    },
    //   {
    //     path: "/favorit-page",
    //     element: <FavoritesPage />,
    //  },
  ]);

  return (
    <div className="App">
      <div className="container">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </div>
    </div>
  );
}

export default App;
