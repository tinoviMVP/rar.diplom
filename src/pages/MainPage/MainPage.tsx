import React from 'react';
import Card from '../../components/ScoreTable/Card';
import { useGetForSaleQuery } from '../../store/Api/proprertyApi';
import { useNavigate } from 'react-router-dom';

interface ApiCardData {
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  location: string;
}

export const MainPage: React.FC = () => {
  const { data, isLoading, error } = useGetForSaleQuery('santa monica');
  const navigate = useNavigate();

  const homes = data?.home_search.results;
  // console.log(homes);

  return (
    <div className="">
      {isLoading && <h1>Loading...</h1>}
      <div className="grid grid-cols-3 gap-4 justify-center justify-items-center items-stretch py-8">
        {homes &&
          homes.map((elem: any) => (
            <Card
              title={''}
              price={elem.list_price}
              beds={elem.description.beds}
              baths={elem.description.baths}
              sqft={elem.description.sqft}
              imageUrl={elem.photos[0].href}
              location={elem.location.address.state}
              onClick={() => navigate('/card-page', { state: { property_id: elem.property_id } })}
            />
          ))}
      </div>
    </div>
  );
};
