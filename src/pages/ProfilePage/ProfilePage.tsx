import { useState } from 'react';
import { ProfilePic } from '../../components/ProfileComponents/ProfilePic';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../RegLoginPages/Navbar';

export const ProfilePage = () => {
  const navigate = useNavigate();

  const [isLoggleOut, setLoggleOut] = useState(false);
  const handleSubmit = () => {
    navigate('/main-page');
  };
  const handleLogout = () => {
    localStorage.removeItem('user');
    setLoggleOut(true);

    setTimeout(() => {
      navigate('/');
    }, 1000);
  };
  return (
    <div>
      <h1 className="text-4xl text-center">Ваш профиль:</h1>
      <div className="flex flex-row gap-32 m-auto justify-center align-middle mt-52">

        <div>
          <ProfilePic />
        </div>

        <div className="flex flex-col justify-center align-middle">
          <h2 className="text-3xl">{localStorage.getItem('userName')}</h2>

          <div>
            <button onClick={handleLogout}>Выйти</button>
          </div>

          <div>
            <button onClick={handleSubmit}>Главная страница</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};
