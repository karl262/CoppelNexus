import React from 'react';
import { View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { palette } from '@/themes/colors';

export default function QuestionnaireField({
  label, data, value, onSelect
}: {
  label: string;
  data: string[];
  value?: string;
  onSelect: (val: string) => void;
}) {
  return (
    <View className="mb-4">
      <Text className="text-gray700 mb-1 font-secondaryBd">{label}</Text>
      <SelectDropdown
        buttonStyle={{ width: '100%', backgroundColor: palette.white, borderWidth: 1, borderColor: palette.gray200, borderRadius: 8, paddingHorizontal: 12 }}
        buttonTextStyle={{ color: value ? palette.textPrimary : palette.gray400 }}
        data={data}
        defaultButtonText="Selecciona"
        onSelect={onSelect}
        buttonTextAfterSelection={selected => selected}
        rowTextForSelection={row => row}
      />
    </View>
  );
}