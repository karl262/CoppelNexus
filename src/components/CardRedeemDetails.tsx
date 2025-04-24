import React from 'react';
import { View, Image, Pressable, Text } from 'react-native';

interface CardRedeemDetailProps {
    imageSource: any;
    onRedeem: () => void;
}

export const CardRedeemDetail = ({ imageSource, onRedeem }: CardRedeemDetailProps) => {
    return (
        <View className="flex-1 mx-4 mt-4 mb-6" 
            style={{borderRadius:30}}>
            <Text className="text-black text-lg font-bold" style={{ marginTop: -10, marginBottom: 10 }}>
                30% de descuento en tienda
            </Text>
            {/* Sección Imagen */}
            <View className="bg-white rounded-t-3xl h-50">
                <Image
                    source={imageSource}
                    resizeMode="contain"
                    className="w-full h-full"
                    style={{
                        marginTop:-20,
                        transform: [{ scale: 1.01 }],
                        width: '100%',
                    }}
                />
            </View>

            {/* Sección Contenido */}
            <View className="bg-white p-5 rounded-b-2xl shadow-sm" style={{
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                overflow: 'hidden'
            }}>
                <Pressable
                    style={{
                        backgroundColor: '#006FB9',
                        paddingVertical: 10,
                        borderRadius: 20,
                        margin: 16,
                        marginTop: 1
                    }}
                    onPress={onRedeem}
                >
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 18
                    }}>
                        Canjear ahora
                    </Text>
                </Pressable>

                <View className="mt-6 space-y-4">
                

                    <Text className="text-gray-800 text-base leading-6"
                        style={{ paddingHorizontal: 15 }}>
                        Aprovecha esta recompensa exclusiva y obtén un 30% de descuento en tus compras de productos seleccionados.
                        ¡Es el momento perfecto para consentirte o renovar lo que necesitas!
                    </Text>

                    <Text className="text-black text-lg font-bold" style={{ textAlign: 'center' }}>
                        Términos y condiciones
                    </Text>

                    <Text className="text-gray-800 text-base leading-6"
                        style={{ paddingHorizontal: 15 }}>
                        La promoción es exclusivapara colaboradores seleccionados que reciban notificación a travpes de la aplicación de que este cupón se encuentra disponible.
                        Se otorgará el 30% en Dinero Electronico a colaboradores candidatos en todas las compras que realicen con su crédito Coppel en Tiendas Coppel, Coppel.com, y en la App Coppel tras 15 días canjedo el cupón
                        -Solo son válidas las compras a crédito.
                    </Text>
                </View>
            </View>
        </View>
    );
};