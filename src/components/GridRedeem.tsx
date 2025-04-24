import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import RedeemCard from './RedeemCard';
import { useRouter } from 'expo-router';
const MonederoImage = require('../../assets/images/tarjetas/MonederoDigital.png');
const VacacionesImage = require('../../assets/images/tarjetas/Coppel.png');  
const NominaImage = require('../../assets/images/tarjetas/Nomina.png'); 
const DescuentoImage = require('../../assets/images/tarjetas/Descuento.png'); 

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
    image: NominaImage
  },
  {
    id: '4',
    title: '50% de descuento',
    image: DescuentoImage
  }
];

const GridRedeem: React.FC = () => {
  const router = useRouter();
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>(
    cardData.reduce((acc, card) => ({ ...acc, [card.id]: true }), {})
  );

  const handleClose = (id: string) => {
    setVisibleCards(prev => ({ ...prev, [id]: false }));
  };

  return (
    <View className="flex-row flex-wrap justify-between p-2">
      {cardData.map((card) => (
        visibleCards[card.id] && (
          <TouchableOpacity
            key={card.id}
            className="w-[48%] mb-4 mt-4"
            onPress={() => router.replace('/(main)/redeemdetails')}
          >
            <View className="h-[200px]">
              <RedeemCard 
                title={card.title}
                image={card.image} 
              />
            </View>
          </TouchableOpacity>
        )
      ))}
    </View>
  );
};

export default GridRedeem; 