import React from 'react';
import { View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

interface CardProps {
  onPress?: () => void;
  className?: string;
  backgroundImage?: ImageSourcePropType;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ 
  onPress,
  className = '',
  backgroundImage = require('assets/images/tarjetas/Banner.png'),
  children
}) => {
  const CardContainer = onPress ? TouchableOpacity : View;

  return (
    <CardContainer
      className={`w-full min-h-[150px] overflow-hidden ${className}`}
      onPress={onPress}
    >
      {/* Imagen de fondo */}
      <Image
        source={backgroundImage}
        className="w-full h-full absolute"
        resizeMode="cover"
      />
      
      {/* Capa de contenido */}
      <View className="p-4 z-10">
        {children}
      </View>
    </CardContainer>
  );
};

export default Card;