import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  title?: string;
  price: number;
  baths: number;
  beds: number;
  sqft: number;
  imageUrl: string;
  location: string;
  onClick?: () => void
  onFavoriteClick?: () => void
}




const Card = ({ title, price, baths, beds, sqft, imageUrl, location, onClick,onFavoriteClick }: CardProps) => {


  return (
    <div className="drop-shadow-md hover:drop-shadow-xl">
      <div className="">
        <img src={imageUrl} alt={title} />
      </div>
      <button onClick={onClick}>Go to</button>
      <h3>{title}</h3>
      <div className="text-2xl font-bold">
        <p>$ {price} долларов США</p>
      </div>
      <div className="flex space-x-4 ">
        <p>{beds} кровать</p>
        <p>{baths} ванна</p>
        <p>{sqft} кв. футов</p>
      </div>
      <div className="font-normal" >
        <p>{location}</p>
        <button className="btn ms-24 -mt-14" onClick={onFavoriteClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
      </div>
    </div>
  );
};

export default Card;
