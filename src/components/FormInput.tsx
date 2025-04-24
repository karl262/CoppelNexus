import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { palette } from '@/themes/colors';

interface Props extends TextInputProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
}

export default function FormInput({
  label,
  onChange,
  placeholder,
  keyboardType,
  secureTextEntry,
  value,
}: Props) {
  return (
    <View className="mb-4">
      <Text className="text-gray-700 mb-1 font-secondaryBd">{label}</Text>
      <TextInput
        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-base text-black"
        placeholder={placeholder}
        placeholderTextColor={palette.gray400}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChange}
        {...rest}
      />
    </View>
  );
}
