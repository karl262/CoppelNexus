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

interface LoginFormData {
    collaboratorNumber: string;
    password: string;
}

export default function Login() {
    const [secure, setSecure] = useState(true);
    const [remember, setRemember] = useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors, touchedFields },
    } = useForm<LoginFormData>({
        mode: 'onBlur',
    });


    const onSubmit = async (data: LoginFormData) => {
        const { collaboratorNumber, password } = data;

        // Método a reemplazar con la API mediante environment variables
        const validCredentials = {
            collaboratorNumber: "123456",
            password: "soyCarlos26&",
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
                    <Image 
                        source={logoCoppel} 
                        className="mb-6 self-center"
                        style={{ width: 150, height: 150, maxWidth: '100%', resizeMode: 'contain' }} 
                        />

                        <Text className="text-[24px] leading-8 font-bold text-center text-[#1B1A16] mb-2">¡Hola de nuevo!</Text>
                        <Text className="text-[#595959] text-center text-[16px] leading-6 mb-6">Inicia sesión para ayudar emprendedores y recibir recompensas</Text>
                        <Controller
                            control={control}
                            name="collaboratorNumber"
                            rules={{
                                required: 'Este campo es obligatorio',
                                minLength: {
                                    value: 6,
                                    message: 'Este campo debe tener al menos 6 dígitos'
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: 'Este campo solo acepta números'
                                }
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <CustomInput
                                    label="Número de colaborador"
                                    placeholder="Ej: 1234567890"
                                    keyboardType="number-pad"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={touchedFields.collaboratorNumber ? errors.collaboratorNumber?.message : undefined}
                                />
                            )}
                        />


                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: 'La contraseña es obligatoria',
                                minLength: {
                                    value: 6,
                                    message: 'La contraseña debe tener al menos 6 caracteres'
                                },
                                pattern:{
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                                    message: 'La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial'
                                }
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <CustomInput
                                    label="Contraseña"
                                    placeholder="●●●●●●"
                                    secureTextEntry={secure}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={touchedFields.password ? errors.password?.message : undefined}
                                    rightIcon={
                                        <Pressable onPress={() => setSecure(!secure)}>
                                            {secure ?
                                                <Eye className={`${errors.password ? 'text-red-400' : 'text-gray-400'}`} /> :
                                                <EyeOff className={`${errors.password ? 'text-red-400' : 'text-gray-400'}`} />
                                            }
                                        </Pressable>
                                    }
                                />
                            )}
                        />

                        <View className="flex-row items-center my-4">
                            <Checkbox
                                value={remember}
                                onValueChange={setRemember}
                                color={remember ? palette.primary : undefined}
                            />
                            <Text className="ml-2 text-[14px] text-[#595959]">
                                Recordar sesión
                            </Text>
                        </View>

                        <Pressable
                            className="w-full py-3 rounded-full"
                            style={{ backgroundColor: palette.primary }}
                            onPress={handleSubmit(onSubmit)}
                        >
                            <Text className="text-white text-center font-semibold text-[16px]">
                                Iniciar sesión
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
