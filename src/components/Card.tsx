import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

interface CardProps {
  title?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  className?: string;
  sideImage?: ImageSourcePropType;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  onPress, 
  className = '',
  sideImage
}) => {
  const CardContainer = onPress ? TouchableOpacity : View;

  return (
    <CardContainer
      className={`overflow-hidden bg-[#006FB9] p-4 flex-row items-center ${className}`}
      onPress={onPress}
    >
      <View className="w-1/2">
        {title && (
          <Text className="text-xl font-bold text-white mb-1">
            {title}
          </Text>
        )}
        {children && (
          <Text className="text-white">
            {children}
          </Text>
        )}
      </View>
      {sideImage && (
        <View className="w-1/2 flex justify-center items-center">
          <Image
            source={sideImage}
            className="w-4 h-4"
          />
        </View>
      )}
    </CardContainer>
  );
};

export default Card; 