import React from 'react';
import { ScrollView, View, Text, TextInput, Pressable } from 'react-native';
import { useMicroEntrepreneurRegister } from '@/hooks/useMicroEntrepreneurRegister';
import StepProgress from '@/components/StepProgress';
import MapPicker from '@/components/MapPicker';
import FormInput from '@/components/FormInput';
import ReferralButton from '@/components/ReferralButton';

export default function UbicacionScreen() {
  const { step, form, update, next, back } = useMicroEntrepreneurRegister();
  return (
    <ScrollView className="flex-1 bg-gray-50 px-6">
      <StepProgress step={step} />
      <MapPicker uri={form.locationPhoto} onPick={() => {/* abrir mapa */}} />
      <FormInput label="Código postal *" value={form.postalCode} placeholder="Ej: 94520" keyboardType="number-pad" onChange={v => update('postalCode', v)} />
      <FormInput label="Estado *" value={form.state} placeholder="Ej: Veracruz" onChange={v => update('state', v)} />
      <FormInput label="Municipio *" value={form.city} placeholder="Ej: Córdoba" onChange={v => update('city', v)} />
      <FormInput label="Colonia *" value={form.neighborhood} placeholder="Ej: San José" onChange={v => update('neighborhood', v)} />
      <FormInput label="Calle *" value={form.street} placeholder="Ej: Calle 1" onChange={v => update('street', v)} />
      <FormInput label="Número interior (opcional)" value={form.buildingNumber} placeholder="Ej: 264" keyboardType="number-pad" onChange={v => update('buildingNumber', v)} />
      <FormInput label="Referencias (Opcional)" value={form.references || ''} placeholder="Ej: Frente a un OXXO" onChange={v => update('references', v)} />
      <ReferralButton onBack={back} onNext={next} canNext={!!(form.postalCode && form.state && form.city && form.neighborhood && form.street)} />
    </ScrollView>
  );
}
