import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import StepProgress from '@/components/StepProgress';
import { useMicroEntrepreneurRegister } from '@/hooks/useMicroEntrepreneurRegister';
import AudioRecorder from '@/components/AudioRecorder';
import QuestionnaireField from '@/components/QuestionarieField';
import ReferralButton from '@/components/ReferralButton';

export default function EntrevistaScreen() {
  const { step, form, update, next, back } = useMicroEntrepreneurRegister();
  const options = ['Sí', 'No', 'Poco', 'Muy interesado'];
  return (
    <ScrollView className="flex-1 bg-gray-50 px-6">
      <StepProgress step={step} />
      <View className="flex-row items-center mb-4">
        <Pressable onPress={() => update('useAudio', true)} className="mr-4">
          <Text className={form.useAudio ? 'text-primary font-bold' : 'text-gray400'}>Audio</Text>
        </Pressable>
        <Pressable onPress={() => update('useAudio', false)}>
          <Text className={!form.useAudio ? 'text-primary font-bold' : 'text-gray400'}>Formulario</Text>
        </Pressable>
      </View>
      {form.useAudio ? (
        <AudioRecorder uri={form.audioUri} onFinish={uri => update('audioUri', uri)} />
      ) : (
        <>  
          <QuestionnaireField label="¿Qué tan interesado está en obtener financiamiento? *" data={options} value={form.answers.interestLevel} onSelect={v => update('answers', { ...form.answers, interestLevel: v })} />
          <QuestionnaireField label="¿Para qué usaría el financiamiento? *" data={options} value={form.answers.financingUsage} onSelect={v => update('answers', { ...form.answers, financingUsage: v })} />
          <QuestionnaireField label="¿Ya ha solicitado crédito antes? *" data={['Sí', 'No']} value={form.answers.hadCreditBefore} onSelect={v => update('answers', { ...form.answers, hadCreditBefore: v })} />
          <QuestionnaireField label="¿Actualmente tiene deudas activas? *" data={['Sí', 'No']} value={form.answers.hasActiveDebts} onSelect={v => update('answers', { ...form.answers, hasActiveDebts: v })} />
          <QuestionnaireField label="¿El negocio tiene al menos 6 meses operando? *" data={['Sí', 'No']} value={form.answers.businessAge} onSelect={v => update('answers', { ...form.answers, businessAge: v })} />
        </>
      )}
      <ReferralButton onBack={back} onNext={next} canNext={canNext()} />
    </ScrollView>
  );
}