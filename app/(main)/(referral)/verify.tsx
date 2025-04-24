import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import StepProgress from '@/components/StepProgress';
import SummarySection from '@/components/SummarySection';
import ReferralButton from '@/components/ReferralButton';
import { useMicroEntrepreneurRegister } from '@/hooks/useMicroEntrepreneurRegister';

export default function VerificarScreen() {
  const { step, form, back, next } = useMicroEntrepreneurRegister();
  return (
    <ScrollView className="flex-1 bg-gray-50 px-6">
      <StepProgress step={step} />

      <SummarySection title="Propietario">
        <Text className="font-secondary text-base text-textPrimary">{`${form.ownerName} ${form.ownerFirstLastName} ${form.ownerSecondLastName}`}</Text>
        <Text className="text-textSecondary text-sm mt-1">Teléfono: {form.phone}</Text>
        {form.email && <Text className="text-textSecondary text-sm">Correo: {form.email}</Text>}
      </SummarySection>

      <SummarySection title="Negocio">
        <Text className="font-secondaryBd text-base text-textPrimary">{form.businessName}</Text>
        <Text className="text-textSecondary text-sm">Tipo: {form.businessType}</Text>
        {form.businessPhoto && <Image source={{ uri: form.businessPhoto }} className="w-full h-40 rounded-lg mt-2" resizeMode="cover" />}
      </SummarySection>

      <SummarySection title="Ubicación">
        <Text className="text-textPrimary text-base">{`${form.street} ${form.buildingNumber}, ${form.neighborhood}, ${form.city}, ${form.state}, ${form.postalCode}`}</Text>
      </SummarySection>

      <SummarySection title="Entrevista">
        {form.useAudio ? (
          <Text className="text-textSecondary text-sm">Audio grabado: {form.audioUri?.split('/').pop()}</Text>
        ) : (
          Object.entries(form.answers).map(([k,v]) => (
            <Text key={k} className="text-textSecondary text-sm mt-1">{String(v)}</Text>
          ))
        )}
      </SummarySection>

      <ReferralButton onBack={back} onNext={next} canNext={true} />
    </ScrollView>
  );
}
