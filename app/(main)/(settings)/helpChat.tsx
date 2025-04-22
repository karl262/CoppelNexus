import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform, FlatList } from 'react-native';
import { ArrowLeft, Send } from 'lucide-react-native';
import { palette } from '@/themes/colors';
import { router } from 'expo-router';

type Message = {
  id: number;
  text: string;
  from: 'user' | 'bot';
};

export default function LiveChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: '¡Hola! ¿En qué puedo ayudarte hoy?',
      from: 'bot',
    },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      from: 'user',
    };

    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: 'Gracias por tu mensaje. Un agente se comunicará contigo.',
          from: 'bot',
        },
      ]);
    }, 1000);

    setInput('');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-row items-center justify-between px-4 py-3 bg-primary rounded-t-2xl">
        <View className="flex-row gap-4 items-center">
          <Pressable onPress={() => router.back()}>
            <ArrowLeft size={22} color={palette.white} />
          </Pressable>
          <Text className="text-white text-xl font-bold">Chat en vivo</Text>
        </View>
        <View className="w-6" />
      </View>

      <FlatList
        className="flex-1 px-4 py-2"
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            className={`max-w-[75%] px-4 py-2 rounded-lg mb-2 ${
              item.from === 'user'
                ? 'bg-primary self-end rounded-br-none'
                : 'bg-gray-200 self-start rounded-bl-none'
            }`}
          >
            <Text className={`${item.from === 'user' ? 'text-white' : 'text-gray-800'}`}>
              {item.text}
            </Text>
          </View>
        )}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={100}
        className="px-4 pb-4 pt-2 bg-white border-t border-gray-200"
      >
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
          <TextInput
            className="flex-1 text-sm text-gray-800"
            placeholder="Escribe tu mensaje..."
            placeholderTextColor="#aaa"
            value={input}
            onChangeText={setInput}
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />
          <Pressable onPress={sendMessage}>
            <Send size={20} color={palette.primary} />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
