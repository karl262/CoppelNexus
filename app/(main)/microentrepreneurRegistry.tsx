import React from 'react';
import { ScrollView, View, Text, TextInput, Image, Pressable, SafeAreaView } from "react-native";
import { ArrowLeft } from "lucide-react-native"; 
import { palette } from '@/themes/colors';
import ConfirmModal from '@/components/ConfirmationModal';
import StepProgress from '@/components/StepProgress';
import { useRegisterClient } from '@/hooks/useMicroEntrepreneurRegister';

export default function MicroEntrepreneurRegistry() {
    const {
        step,
        form,
        update,
        canNext,
        next,
        back,
        showExitModal,
        confirmExit,
        showSubmitModal,
        setShowSubmitModal,
        setShowExitModal,
        confirmSubmit,
      } = useRegisterClient();
    
      return (
        <SafeAreaView className="flex-1 bg-gray-50">
          {/* Header */}
          <View className="flex-row items-center px-4 bg-primary" style={{ paddingVertical: 12 }}>
            <Pressable onPress={() => setShowExitModal(true)}>
              <ArrowLeft color={palette.white} size={30} />
            </Pressable>
            <Text className="flex-1 font-bold text-center ms-2" style={{ color: palette.white, fontSize: 22 }}>
              Referir microempresario
            </Text>
            <View style={{ width: 24 }} />
          </View>
    
          {/* Progress */}
          <StepProgress step={step} />
    
          {/* Form */}
          <ScrollView className="px-6">
            {step === 1 && (
              <>
                <Text className="mb-1 text-gray-700">Nombre del propietario *</Text>
                <TextInput
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 mb-4 text-base text-black"
                  placeholder="Ej: Rodrigo"
                  placeholderTextColor={palette.gray400}
                  value={form.ownerName}
                  onChangeText={(v) => update('ownerName', v)}
                />
    
                <Text className="mb-1 text-gray-700">Apellidos del propietario *</Text>
                <TextInput
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 mb-4 text-base text-black"
                  placeholder="Ej: Pérez Ocampo"
                  placeholderTextColor={palette.gray400}
                  value={form.ownerLastName}
                  onChangeText={(v) => update('ownerLastName', v)}
                />
    
                <Text className="mb-1 text-gray-700">Teléfono *</Text>
                <TextInput
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 mb-4 text-base text-black"
                  placeholder="Ej: 5512345678"
                  placeholderTextColor={palette.gray400}
                  keyboardType="phone-pad"
                  value={form.phone}
                  onChangeText={(v) => update('phone', v)}
                />
    
                <Text className="mb-1 text-gray-700">Correo electrónico</Text>
                <TextInput
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 mb-4 text-base text-black"
                  placeholder="Ej: ejemplo@gmail.com"
                  placeholderTextColor={palette.gray400}
                  keyboardType="email-address"
                  value={form.email}
                  onChangeText={(v) => update('email', v)}
                />
              </>
            )}
    
            {step === 2 && (
              <>
                <Text className="mb-1 text-gray-700">Nombre del negocio *</Text>
                <TextInput
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 mb-4 text-base text-black"
                  placeholder="Ej: Miscelánea ‘La Bendición’"
                  placeholderTextColor={palette.gray400}
                  value={form.businessName}
                  onChangeText={(v) => update('businessName', v)}
                />
    
                <Text className="mb-1 text-gray-700">Tipo de negocio *</Text>
                <TextInput
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 mb-4 text-base text-black"
                  placeholder="Selecciona un tipo"
                  placeholderTextColor={palette.gray400}
                  value={form.businessType}
                  onChangeText={(v) => update('businessType', v)}
                />
    
                {/* Foto opcional */}
                <Pressable
                  className="w-full border-2 border-dashed border-gray-200 rounded-lg h-40 items-center justify-center mb-4"
                  onPress={() => console.log('Tomar/subir foto')}
                >
                  <Text className="text-gray-400">Presiona para tomar o subir una foto</Text>
                </Pressable>
              </>
            )}
    
            {step === 3 && (
              <>
                <Text className="mb-1 text-gray-700">Ubicación *</Text>
                <View className="mb-4 overflow-hidden rounded-lg h-40 bg-gray-100">
                  <Image
                    source={require('~assets/images/mapa.png')}
                    style={{ flex: 1, width: '100%' }}
                    resizeMode="cover"
                  />
                </View>
    
                <Text className="mb-1 text-gray-700">Estado *</Text>
                <TextInput
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 mb-4 text-base text-black"
                  placeholder="Ej: Veracruz"
                  placeholderTextColor={palette.gray400}
                  value={form.state}
                  onChangeText={(v) => update('state', v)}
                />
    
                <Text className="mb-1 text-gray-700">Municipio *</Text>
                <TextInput
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 mb-4 text-base text-black"
                  placeholder="Ej: Córdoba"
                  placeholderTextColor={palette.gray400}
                  value={form.city}
                  onChangeText={(v) => update('city', v)}
                />
    
                <Text className="mb-1 text-gray-700">Código postal *</Text>
                <TextInput
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 mb-4 text-base text-black"
                  placeholder="Ej: 94520"
                  placeholderTextColor={palette.gray400}
                  keyboardType="number-pad"
                  value={form.postalCode}
                  onChangeText={(v) => update('postalCode', v)}
                />
    
                <Text className="mb-1 text-gray-700">Colonia *</Text>
                <TextInput
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 mb-4 text-base text-black"
                  placeholder="Ej: San José"
                  placeholderTextColor={palette.gray400}
                  value={form.neighborhood}
                  onChangeText={(v) => update('neighborhood', v)}
                />
    
                <Text className="mb-1 text-gray-700">Calle *</Text>
                <TextInput
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 mb-4 text-base text-black"
                  placeholder="Ej: Calle 1"
                  placeholderTextColor={palette.gray400}
                  value={form.street}
                  onChangeText={(v) => update('street', v)}
                />
    
                <Text className="mb-1 text-gray-700">Número del edificio *</Text>
                <TextInput
                  className="w-full border border-gray-200 bg-white rounded-lg px-4 py-3 mb-8 text-base text-black"
                  placeholder="Ej: 264"
                  placeholderTextColor={palette.gray400}
                  keyboardType="number-pad"
                  value={form.buildingNumber}
                  onChangeText={(v) => update('buildingNumber', v)}
                />
              </>
            )}
          </ScrollView>
    
          {/* Botón */}
          <View className="px-6 py-4 bg-white border-t border-gray-200">
            <Pressable
              className="w-full py-3 rounded-full"
              style={{ backgroundColor: palette.primary }}
              onPress={next}
              disabled={!canNext()}
            >
              <Text className="text-center text-white font-semibold">
                {step < 3 ? 'Continuar' : 'Referir'}
              </Text>
            </Pressable>
          </View>
    
          {/* Modales */}
          <ConfirmModal
            visible={showExitModal}
            title="¿Quieres salir?"
            message="Perderás los datos llenados en el formulario."
            confirmLabel="Sí, salir"
            onConfirm={confirmExit}
            onCancel={() => setShowExitModal(false)}
          />
          <ConfirmModal
            visible={showSubmitModal}
            title="¿Quieres referir esta microempresa?"
            message="Al continuar, no podrás editar los datos ingresados."
            confirmLabel="Sí, referir"
            onConfirm={confirmSubmit}
            onCancel={() => setShowSubmitModal(false)}
          />
        </SafeAreaView>
      );
    
}