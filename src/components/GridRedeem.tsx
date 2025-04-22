import React from 'react';
import { View } from 'react-native';
import RedeemCard from './RedeemCard';
const MonederoImage = require('../../assets/images/tarjetas/MonederoDigital.png');
const VacacionesImage = require('../../assets/images/tarjetas/Coppel.png');  

const cardData = [
  {
    id: '1',
    title: '30% de descuento',
    image: MonederoImage
  },
  {
    id: '2',
    title: 'días de vacaciones',
    image: VacacionesImage
  },
  {
    id: '3',
    title: '15% nómina extra',
    image: VacacionesImage
  },
  {
    id: '4',
    title: '50% de descuento',
    image: MonederoImage
  }
];

const GridRedeem: React.FC = () => {
  return (
    <View className="flex-row flex-wrap justify-between p-2">
      {cardData.map((card) => (
        <View key={card.id} className="w-[48%] h-[200px] mb-4 mt-4">
          <RedeemCard 
            title={card.title}
            image={card.image}
          />
        </View>
      ))}
    </View>
  );
};

export default GridRedeem; 