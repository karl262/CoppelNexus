import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Checkbox } from "expo-checkbox"
import { Eye, EyeOff } from 'lucide-react-native';
import { router } from "expo-router";
import React, { useState } from "react";
import { palette } from "@/themes/colors";
import logoCoppel from '~assets/images/logos/LOGO_COPPEL_AZUL-09.png';
import CustomInput from "@/components/Input";
import { useForm, Controller } from "react-hook-form";

export default function Login() {
    const [secure, setSecure] = useState(true);
    const [remember, setRemember] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data: any) => {
        const { collaboratorNumber, password } = data;

        const validCredentials = {
            collaboratorNumber: "123456",
            password: "soycarlos26",
        };

        if (collaboratorNumber === validCredentials.collaboratorNumber && password === validCredentials.password) {
            console.log("Inicio de sesión exitoso");
            router.replace('/(main)/home');
        } else {
            console.log("Credenciales incorrectas");
        }
    };

    return (

        <SafeAreaProvider>
            <SafeAreaView className="flex-1 bg-[#F1F4FA]">
                <ScrollView className="flex-1 px-6 pt-10" keyboardShouldPersistTaps="handled">
                    <View className="bg-white rounded-2xl shadow-md px-6 py-10">
                        <Image source={logoCoppel} className="w-32 h-32 mb-6 self-center" resizeMode="contain" />
                        <Text className="text-[24px] leading-8 font-bold text-center text-[#1B1A16] mb-2">¡Hola de nuevo!</Text>
                        <Text className="text-[#595959] text-center text-[16px] leading-6 mb-6">Inicia sesión para ayudar emprendedores y recibir recompensas</Text>
                        <Controller
                            control={control}
                            name="collaboratorNumber"
                            rules={{ required: 'Número de colaborador es obligatorio' }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <CustomInput
                                    label="Número de colaborador"
                                    placeholder="Ej: 1234567890"
                                    keyboardType="number-pad"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                        />
                        {errors.collaboratorNumber && <Text className="text-red-500"> El número de colaborador es obligatorio </Text>}

                        <Controller
                            control={control}
                            name="password"
                            rules={{ required: 'Contraseña es obligatoria' }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <CustomInput
                                    label="Contraseña"
                                    placeholder="●●●●●●"
                                    secureTextEntry={secure}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    rightIcon={
                                        <Pressable onPress={() => setSecure(!secure)}>
                                            {secure ? <Eye className="text-gray-400" /> : <EyeOff className="text-gray-400" />}
                                        </Pressable>
                                    }
                                />
                            )}
                        />
                        {errors.password && <Text className="text-red-500"> La contraseña es obligatoria </Text>}

                        <View className="flex-row items-center my-4">
                            <Checkbox value={remember} onValueChange={setRemember} color={remember ? palette.primary : undefined} />
                            <Text className="ml-2 text-[14px] text-[#595959]">Recordar sesión</Text>
                        </View>

                        <Pressable className="w-full py-3 rounded-full" style={{ backgroundColor: palette.primary }} onPress={handleSubmit(onSubmit)}>
                            <Text className="text-white text-center font-semibold text-[16px]">Iniciar sesión</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
