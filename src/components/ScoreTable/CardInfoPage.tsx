import React from 'react';
import Card from './Card';
import { useGetForDetailsQuery } from '../../store/Api/proprertyApi';
import { useNavigate } from 'react-router-dom';

export const CardInfoPage = () => {
//   const { data, error, isLoading } = useGetForDetailsQuery('1497548641'); // Используем кастомный хук
//   console.log(data);
//   const location = useLocation();


  return <Card title={''} price={0} baths={0} beds={0} sqft={0} imageUrl={''} location={''} />;
};
