import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { NavRedeem } from '@/components/NavRedeem';
import { CardRedeemDetail } from '@/components/CardRedeemDetails';


export default function RedemDetails() {
    const localImage = require('assets/images/tarjetas/MonederoDigital.png');

    const handleRedeem = () => {
        console.log('Canjear');
    };

    return (
        <SafeAreaView className="flex-1 bg-[#F1F4FA]">
            <NavRedeem title="30% de descuento en tienda" />
            <ScrollView className="flex-1">
                <CardRedeemDetail
                    imageSource={localImage}
                    onRedeem={handleRedeem}
                />
            </ScrollView>
        </SafeAreaView>
    );
}