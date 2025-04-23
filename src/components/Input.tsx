import { TextInput, View, Text } from 'react-native';
import { ReactNode } from 'react';

interface Props extends React.ComponentProps<typeof TextInput> {
  label: string;
  rightIcon?: ReactNode;
  error?: string;
}

export default function CustomInput({ label, rightIcon, error, ...props }: Props) {
  return (
    <View className="w-full mb-4">
      <Text className="text-[#595959] mb-1 text-[14px]">{label}</Text>
      <View
        className={`
        flex-row 
        items-center 
        border 
        rounded-sm 
        px-4 
        py-3 
        ${error ? 'border-red-500 bg-red-50' : 'border-gray-300'}
      `}
      >
        <TextInput
          className={`flex-1 ${error ? 'text-red-500' : 'text-gray-900'}`}
          placeholderTextColor={error ? '#EF4444' : '#9CA3AF'}
          {...props}
        />
        {rightIcon}
      </View>
      {error && (
        <Text className="text-red-500 text-[12px] mt-1 ml-1 font-medium">
          {error}
        </Text>
      )}
    </View>
  );
}
