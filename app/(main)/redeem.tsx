import { View, Text, ScrollView } from 'react-native';
import TopNavbar from '@/components/NavTop';
import BottomTab from '@/components/BottomTabMenu';
import CarRedeem from '@/components/Card';
import GridRedeem from '@/components/GridRedeem';
import ListRedeem from '@/components/ListRedeem';


export default function Redeem() {

    return (
        <View className="flex-1 bg-[#F1F4FA]">
            <TopNavbar />

            <ScrollView className="flex-1">
                <View className="pb-4 "> 
                    <CarRedeem/>
                    <Text className="text-[19px] leading-8 font-bold text-[#1B1A16] mb-2 ml-4 mt-2">Recompensas</Text>
                    <View className="px-4">
                        <GridRedeem />
                    </View>
                    <Text className="text-[19px] leading-8 font-bold text-[#1B1A16] mb-2 ml-4 mt-2">Historial de canje</Text>
                    <View className="px-4">
                        <ListRedeem/>
                    </View>
                </View>
            </ScrollView>

            <BottomTab />
        </View>
    );

}