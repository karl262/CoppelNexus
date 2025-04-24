import React from 'react';
import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

interface RedeemCardProps {
  title: string;
  image: ImageSourcePropType;
  onPress?: () => void;
  className?: string;
}

const RedeemCard: React.FC<RedeemCardProps> = ({
  title,
  image,
  onPress,
  className = '',
}) => {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container 
      className={`w-full bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {/* Contenedor de imagen con relación de aspecto */}
      <View className="w-full aspect-[1.5]"> 
        <Image 
          source={image}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      
      {/* Contenido textual */}
      <View className="p-4">
        <Text 
          className="text-base font-semibold text-gray-800 text-center"
          numberOfLines={2} 
        >
          {title}
        </Text>
      </View>
    </Container>
  );
};

export default RedeemCard;