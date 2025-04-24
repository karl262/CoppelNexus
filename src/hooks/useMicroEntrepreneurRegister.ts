// src/hooks/useMicroEntrepreneurRegister.ts
import { useState } from 'react';
import { useRouter } from 'expo-router';

/**
 * Respuestas del cuestionario (paso 4)
 */
export interface InterviewAnswers {
  interestLevel: string;    // ¿Qué tan interesado está en obtener financiamiento?
  financingUsage: string;   // ¿Para qué usaría el financiamiento?
  hadCreditBefore: string;  // ¿Ya ha solicitado crédito antes?
  hasActiveDebts: string;   // ¿Actualmente tiene deudas activas?
  businessAge: string;      // ¿El negocio tiene al menos 6 meses operando?
}

/**
 * Todos los campos del formulario dividido en 4 pasos:
 * 1) Propietario
 * 2) Negocio
 * 3) Ubicación
 * 4) Entrevista
 */
export interface FormData {
  // Paso 1: Propietario
  ownerName: string;
  ownerFirstLastName: string;
  ownerSecondLastName: string;
  phone: string;
  email?: string;

  // Paso 2: Negocio
  businessName: string;
  businessType: string;
  businessPhoto?: string;

  // Paso 3: Ubicación
  locationPhoto?: string;
  postalCode: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  buildingNumber?: string;
  references?: string;

  // Paso 4: Entrevista
  useAudio: boolean;
  audioUri?: string;
  answers: Partial<InterviewAnswers>;
}

export function useMicroEntrepreneurRegister() {
  const router = useRouter();

  const [step, setStep] = useState<number>(1);
  const [form, setForm] = useState<FormData>({
    ownerName: '',
    ownerFirstLastName: '',
    ownerSecondLastName: '',
    phone: '',
    email: undefined,
    businessName: '',
    businessType: '',
    businessPhoto: undefined,
    locationPhoto: undefined,
    postalCode: '',
    state: '',
    city: '',
    neighborhood: '',
    street: '',
    buildingNumber: undefined,
    references: undefined,
    useAudio: true,
    audioUri: undefined,
    answers: {},
  });

  const [showExitModal, setShowExitModal] = useState<boolean>(false);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);

  /** Actualiza cualquier campo del formulario */
  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
  // Alias para destructuring en los screens
  const update = updateField;

  /** Valida si puede avanzar según el paso actual */
  const canNext = (): boolean => {
    switch (step) {
      case 1:
        // Propietario: nombre y teléfono obligatorios
        return !!(form.ownerName.trim() && form.phone.trim());

      case 2:
        // Negocio: nombre y tipo obligatorios
        return !!(form.businessName.trim() && form.businessType.trim());

      case 3:
        // Ubicación: todos los campos principales
        return !!(
          form.postalCode.trim() &&
          form.state.trim() &&
          form.city.trim() &&
          form.neighborhood.trim() &&
          form.street.trim()
        );

      case 4:
        // Entrevista: si graba audio, requiere URI; si formulario, requiere 5 respuestas
        if (form.useAudio) {
          return !!form.audioUri;
        } else {
          // Comprueba que haya contestado las 5 preguntas
          return Object.keys(form.answers).length === 5;
        }

      default:
        return false;
    }
  };

  /** Avanza de paso o muestra modal de confirmación al final */
  const next = () => {
    if (step < 4) {
      setStep((s) => s + 1);
    } else {
      setShowSubmitModal(true);
    }
  };

  /** Retrocede de paso o muestra modal de salida */
  const back = () => {
    if (step > 1) {
      setShowExitModal(true);
    } else {
      router.back();
    }
  };

  /** Confirma la salida sin guardar */
  const confirmExit = () => {
    setShowExitModal(false);
    router.back();
  };

  /** Confirma el envío final y redirige a pantalla de resultado */
  const confirmSubmit = () => {
    setShowSubmitModal(false);

    // Aquí podrías llamar a tu API antes de redirigir...
    const payload = {
      ...form,
      registeredAt: new Date().toLocaleDateString('es-MX'),
      address: `${form.street} ${form.buildingNumber ?? ''}, ${form.neighborhood}, ${form.city}, ${form.state} ${form.postalCode}`,
    };

    router.push({
      pathname: '/(main)/(responsesRegister)/successfulResponse',
      params: { status: 'success', payload: JSON.stringify(payload) },
    });
  };

  return {
    step,
    form,
    update,            // ahora disponible como `update()`
    canNext,
    next,
    back,
    showExitModal,
    setShowExitModal,
    confirmExit,
    showSubmitModal,
    setShowSubmitModal,
    confirmSubmit,
  };
}
