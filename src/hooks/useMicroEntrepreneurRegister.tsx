import { useState } from 'react';
import { useRouter } from 'expo-router';

export type FormData = {
  ownerName: string;
  ownerLastName: string;
  phone: string;
  email: string;

  businessName: string;
  businessType: string;
  businessPhoto?: string; 
  locationPhoto?: string;
  state: string;
  city: string;
  postalCode: string;
  neighborhood: string;
  street: string;
  buildingNumber: string;
};

export function useRegisterClient() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    ownerName: '',
    ownerLastName: '',
    phone: '',
    email: '',
    businessName: '',
    businessType: '',
    businessPhoto: undefined,
    locationPhoto: undefined,
    state: '',
    city: '',
    postalCode: '',
    neighborhood: '',
    street: '',
    buildingNumber: '',
  });
  const [showExitModal, setShowExitModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const update = (key: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const canNext = (): boolean => {
    switch (step) {
      case 1:
        return !!(form.ownerName && form.ownerLastName && form.phone);
      case 2:
        return !!(form.businessName && form.businessType);
      case 3:
        return !!(form.state && form.city && form.postalCode && form.neighborhood && form.street && form.buildingNumber);
      default:
        return false;
    }
  };

  const next = () => {
    if (step < 3) {
      setStep((s) => s + 1);
    } else {
      setShowSubmitModal(true);
    }
  };

  const back = () => {
    if (step > 1) {
      setShowExitModal(true); 
    } else {
      router.back();
    }
  };

  const confirmExit = () => {
    setShowExitModal(false); 
    router.back();
  };

  const confirmSubmit = () => {
    setShowSubmitModal(false); 
  
    const dataToSend = {
      ownerName: form.ownerName,
      ownerLastName: form.ownerLastName,
      phone: form.phone,
      businessName: form.businessName,
      businessType: form.businessType,
      registeredAt: new Date().toLocaleDateString('es-MX'),
      address: `${form.street} ${form.buildingNumber}, ${form.neighborhood}, ${form.city}, ${form.state}, ${form.postalCode}`,
    };
  
    const isSuccess = true;
  
    router.push({
      pathname: '/(main)/(responsesRegister)/successfulResponse',
      params: {
        status: isSuccess ? 'success' : 'error',
        payload: JSON.stringify(dataToSend),
      },
    });
  };
  

  return {
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
  };
}
