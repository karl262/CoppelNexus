// app/(main)/microentrepreneurRegistry.tsx
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  Pressable
} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { palette } from '@/themes/colors';
import ConfirmModal from '@/components/ConfirmationModal';
import StepProgress from '@/components/StepProgress';
import MapPicker from '@/components/MapPicker';
import AudioRecorder from '@/components/AudioRecorder';
import QuestionnaireField from '@/components/QuestionarieField';
import { useMicroEntrepreneurRegister } from '@/hooks/useMicroEntrepreneurRegister';

export default function MicroEntrepreneurRegistry() {
  const {
    step,
    form,
    update,
    canNext,
    next,
    back,
    showExitModal,
    setShowExitModal,
    confirmExit,
    showSubmitModal,
    setShowSubmitModal,
    confirmSubmit,
  } = useMicroEntrepreneurRegister();

  // Opciones de la encuesta (paso 4)
  const interestOptions = [
    'Muy interesado',
    'Interesado',
    'Poco interesado',
    'Nada interesado',
  ];
  const yesNo = ['Sí', 'No'];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-row items-center px-4 bg-primary" style={{ paddingVertical: 12 }}>
        <Pressable onPress={back} className="p-2">
          <ArrowLeft color={palette.white} size={28} />
        </Pressable>
        <Text className="flex-1 text-center text-white font-primary text-xl">
          Referir microempresario
        </Text>
        <View style={{ width: 32 }} />
      </View>

      <StepProgress step={step} />

      <ScrollView className="px-6 flex-1">
        {step === 1 && (
          <>
            <Text className="mb-1 text-gray-700 font-secondaryBd">Nombre del propietario *</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4"
              placeholder="Ej: Juan"
              placeholderTextColor={palette.gray400}
              value={form.ownerName}
              onChangeText={v => update('ownerName', v)}
            />

            <Text className="mb-1 text-gray-700 font-secondaryBd">Primer apellido</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4"
              placeholder="Ej: Pérez"
              placeholderTextColor={palette.gray400}
              value={form.ownerFirstLastName}
              onChangeText={v => update('ownerFirstLastName', v)}
            />

            <Text className="mb-1 text-gray-700 font-secondaryBd">Segundo apellido</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4"
              placeholder="Ej: López"
              placeholderTextColor={palette.gray400}
              value={form.ownerSecondLastName}
              onChangeText={v => update('ownerSecondLastName', v)}
            />

            <Text className="mb-1 text-gray-700 font-secondaryBd">Teléfono *</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4"
              placeholder="Ej: 5512345678"
              placeholderTextColor={palette.gray400}
              keyboardType="phone-pad"
              value={form.phone}
              onChangeText={v => update('phone', v)}
            />

            <Text className="mb-1 text-gray-700 font-secondaryBd">Correo electrónico</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-8"
              placeholder="Ej: ejemplo@mail.com"
              placeholderTextColor={palette.gray400}
              keyboardType="email-address"
              value={form.email}
              onChangeText={v => update('email', v)}
            />
          </>
        )}

        {step === 2 && (
          <>
            <Text className="mb-1 text-gray-700 font-secondaryBd">Nombre del negocio *</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4"
              placeholder="Ej: Miscelánea La Bendición"
              placeholderTextColor={palette.gray400}
              value={form.businessName}
              onChangeText={v => update('businessName', v)}
            />

            <Text className="mb-1 text-gray-700 font-secondaryBd">Tipo de negocio *</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4"
              placeholder="Ej: Abarrotes"
              placeholderTextColor={palette.gray400}
              value={form.businessType}
              onChangeText={v => update('businessType', v)}
            />

            <Pressable
              className="w-full h-40 border-2 border-dashed border-gray-200 rounded-lg items-center justify-center mb-8"
              onPress={() => {/* abrir cámara/galería */}}
            >
              <Text className="text-gray-400">Presiona para tomar o subir una foto</Text>
            </Pressable>
          </>
        )}

        {step === 3 && (
          <>
            <Text className="mb-1 text-gray-700 font-secondaryBd">Ubicación *</Text>
            <MapPicker uri={form.locationPhoto} onPick={() => {/* abrir mapa */}} />

            <Text className="mb-1 text-gray-700 font-secondaryBd">Código postal *</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4"
              placeholder="Ej: 94520"
              placeholderTextColor={palette.gray400}
              keyboardType="number-pad"
              value={form.postalCode}
              onChangeText={v => update('postalCode', v)}
            />

            <Text className="mb-1 text-gray-700 font-secondaryBd">Estado *</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4"
              placeholder="Ej: Veracruz"
              placeholderTextColor={palette.gray400}
              value={form.state}
              onChangeText={v => update('state', v)}
            />

            <Text className="mb-1 text-gray-700 font-secondaryBd">Municipio *</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4"
              placeholder="Ej: Córdoba"
              placeholderTextColor={palette.gray400}
              value={form.city}
              onChangeText={v => update('city', v)}
            />

            <Text className="mb-1 text-gray-700 font-secondaryBd">Colonia *</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4"
              placeholder="Ej: San José"
              placeholderTextColor={palette.gray400}
              value={form.neighborhood}
              onChangeText={v => update('neighborhood', v)}
            />

            <Text className="mb-1 text-gray-700 font-secondaryBd">Calle *</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4"
              placeholder="Ej: Calle 1"
              placeholderTextColor={palette.gray400}
              value={form.street}
              onChangeText={v => update('street', v)}
            />

            <Text className="mb-1 text-gray-700 font-secondaryBd">Número interior</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4"
              placeholder="Ej: 264"
              placeholderTextColor={palette.gray400}
              keyboardType="number-pad"
              value={form.buildingNumber}
              onChangeText={v => update('buildingNumber', v)}
            />

            <Text className="mb-1 text-gray-700 font-secondaryBd">Referencias (opcional)</Text>
            <TextInput
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 mb-8"
              placeholder="Ej: Frente a un OXXO"
              placeholderTextColor={palette.gray400}
              value={form.references}
              onChangeText={v => update('references', v)}
            />
          </>
        )}

        {step === 4 && (
          <>
            <View className="mb-4">
              <Pressable onPress={() => update('useAudio', true)} className="mr-4">
                <Text className={form.useAudio ? 'text-primary font-bold' : 'text-gray-400'}>
                  Audio
                </Text>
              </Pressable>
              <Pressable onPress={() => update('useAudio', false)}>
                <Text className={!form.useAudio ? 'text-primary font-bold' : 'text-gray-400'}>
                  Formulario
                </Text>
              </Pressable>
            </View>

            {form.useAudio ? (
              <AudioRecorder uri={form.audioUri} onFinish={uri => update('audioUri', uri)} />
            ) : (
              <>
                <QuestionnaireField
                  label="¿Qué tan interesado está en obtener financiamiento? *"
                  data={interestOptions}
                  value={form.answers.interestLevel}
                  onSelect={v => update('answers', { ...form.answers, interestLevel: v })}
                />
                <QuestionnaireField
                  label="¿Para qué usaría el financiamiento? *"
                  data={interestOptions}
                  value={form.answers.financingUsage}
                  onSelect={v => update('answers', { ...form.answers, financingUsage: v })}
                />
                <QuestionnaireField
                  label="¿Ya ha solicitado crédito antes? *"
                  data={yesNo}
                  value={form.answers.hadCreditBefore}
                  onSelect={v => update('answers', { ...form.answers, hadCreditBefore: v })}
                />
                <QuestionnaireField
                  label="¿Actualmente tiene deudas activas? *"
                  data={yesNo}
                  value={form.answers.hasActiveDebts}
                  onSelect={v => update('answers', { ...form.answers, hasActiveDebts: v })}
                />
                <QuestionnaireField
                  label="¿El negocio tiene al menos 6 meses operando? *"
                  data={yesNo}
                  value={form.answers.businessAge}
                  onSelect={v => update('answers', { ...form.answers, businessAge: v })}
                />
              </>
            )}
          </>
        )}
      </ScrollView>

      {/* Botón inferior */}
      <View className="px-6 py-4 bg-white border-t border-gray-200">
        <Pressable
          className={`w-full py-3 rounded-full ${
            canNext() ? 'bg-primary' : 'bg-gray-200'
          }`}
          disabled={!canNext()}
          onPress={next}
        >
          <Text className={`text-center text-white ${canNext() ? 'font-semibold' : ''}`}>
            {step < 4 ? 'Continuar' : 'Referir microempresa'}
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
