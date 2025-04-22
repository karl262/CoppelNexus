import React from 'react';
import { View, Text } from 'react-native';

// Define la estructura de cada item de la lista
interface ListItem {
  id: string;
  title: string;
  date: string; // O podrías usar el tipo Date si prefieres
}

// Datos de ejemplo para la lista
const listData: ListItem[] = [
  {
    id: '1',
    title: '30% de descuento',
    date: '15/03/2025',
  },
  {
    id: '2',
    title: '3 días de vacaciones',
    date: '11/03/2025',
  },
  {
    id: '3',
    title: 'Cupón 1 día de vacaciones',
    date: '02/03/2025',
  },
];

const ListRedeem: React.FC = () => {
  return (
    <View className="mt-4 px-2">
      {listData.map((item) => (
        // Cambiar a flex-col, bg-gray-100, quitar justify/items
        <View 
          key={item.id} 
          className="bg-white p-4 mb-3 rounded-md shadow flex flex-col"
        >
          {/* Título - Ahora en la primera línea */}
          <Text className="text-base font-medium text-gray-800 mb-1" numberOfLines={1}>
            {item.title}
          </Text>
          {/* Fecha - Ahora en la segunda línea */}
          <Text className="text-sm text-gray-500">
            {item.date}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ListRedeem; 