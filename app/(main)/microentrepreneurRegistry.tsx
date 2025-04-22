import React from 'react';
import { ScrollView, View, Text, TextInput, Image, Pressable, SafeAreaView } from "react-native";
import { ArrowLeft } from "lucide-react-native"; 
import { palette } from '@/themes/colors';
import { useState } from 'react';

export default function MicroEntrepreneurRegistry() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
}