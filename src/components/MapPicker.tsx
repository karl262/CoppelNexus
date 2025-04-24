import React from 'react';
import { View, Image, Pressable } from 'react-native';

export default function MapPicker({ uri, onPick }: { uri?: string; onPick: () => void }) {
  return (
    <Pressable onPress={onPick} className="mb-4 overflow-hidden rounded-lg h-40 bg-gray100">
      {uri ? (
        <Image source={{ uri }} className="w-full h-full" resizeMode="cover" />
      ) : (
        <Image source={require('~assets/images/mapa.png')} className="w-full h-full" resizeMode="cover" />
      )}
    </Pressable>
  );
}