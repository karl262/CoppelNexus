import { useState, useMemo } from 'react';

export interface Referral {
  businessName: string;
  phone: string;
  businessType: string;
  registeredAt: string;
  address: string;
  keys: number;
  status: 'Aprobado' | 'Pendiente';
}

const SAMPLE: Referral[] = [
  {
    businessName: 'Nudos de Arte',
    phone: '2711222874',
    businessType: 'Emprendimiento',
    registeredAt: '21/04/2025',
    address: 'Calle 8 Nte, 407, Melesio Portillo, Fortín de las Flores, Veracruz',
    keys: 1,
    status: 'Aprobado',
  },
  // → añade más ejemplos o carga desde API
];

export function useReferrals() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'Todas'|'Aprobadas'|'Pendientes'>('Todas');

  const filtered = useMemo(() => {
    return SAMPLE.filter(r => {
      const matchesQuery = r.businessName.toLowerCase().includes(query.toLowerCase());
      const matchesFilter =
        filter === 'Todas'
          ? true
          : filter === 'Aprobadas'
            ? r.status === 'Aprobado'
            : r.status === 'Pendiente';
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return { referrals: filtered, query, setQuery, filter, setFilter };
}
