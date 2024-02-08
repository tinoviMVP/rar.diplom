import React from 'react';
import { useGetForDetailsQuery } from '../../store/Api/proprertyApi';
import { useLocation } from 'react-router-dom';
import Card from './Card';

const PropertyDetailsPage = () => {
  const location = useLocation();
  const { data, error, isLoading } = useGetForDetailsQuery(location.state.property_id); // Используем кастомный хук

  const handleFavoriteClick = () => {
    // Retrieve existing favorite cards from local storage or initialize an empty array if it doesn't exist
    const existingFavorites = JSON.parse(localStorage.getItem('favoriteCards') || '[]');

    // Add current card to the favorite cards array
    existingFavorites.push(data.home);

    // Store the updated favorite cards array back to local storage
    localStorage.setItem('favoriteCards', JSON.stringify(existingFavorites));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const house = data.home;

  console.log(data);

  return (
    <div className="flex flex-col gap-4 w-52">
      <div className="flex skeleton w-96 ltr ps-80 py-8">
        <img src={house.home} alt="Property" />
        {data && (
          <Card
            onFavoriteClick={handleFavoriteClick}
            title={data.home.description.text}
            price={data.home.list_price}
            baths={data.home.description.baths}
            beds={data.home.description.beds}
            sqft={data.home.description.sqft}
            imageUrl={data.home.photos[0].href}
            location={data.home.location.city.county}
          />
        )}
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
