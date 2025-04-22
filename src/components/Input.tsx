import { TextInput, View, Text } from 'react-native';
import { ReactNode } from 'react';

interface Props extends React.ComponentProps<typeof TextInput> {
  label: string;
  rightIcon?: ReactNode;
}

export default function CustomInput({ label, rightIcon, ...props }: Props) {
  return (
    <View className="w-full mb-4">
      <Text className="text-[#595959] mb-1 text-[14px]">{label}</Text>
      <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-3">
        <TextInput className="flex-1" placeholderTextColor="#9CA3AF" {...props} />
        {rightIcon}
      </View>
    </View>
  );
}
