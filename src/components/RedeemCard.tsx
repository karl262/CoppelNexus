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
      className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center ${className}`}
    >
      <Image 
        source={image}
        className="w-full aspect-[2/1] rounded-t-md"
        resizeMode="cover"
      />
      <View className="flex-1 p-3 flex justify-center items-center w-full">
        <Text 
          className="text-center font-semibold text-gray-700"
          numberOfLines={2} 
        >
          {title}
        </Text>
      </View>
    </Container>
  );
};

export default RedeemCard; 