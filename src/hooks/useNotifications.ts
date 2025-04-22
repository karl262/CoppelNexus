import { useState } from 'react';

type Notification = {
  title: string;
  message: string;
  isRead: boolean;
};

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      title: 'Campaña Buen Fin 2024',
      message:
        'Hola Carlos, respecto a los materiales para la campaña de Buen Fin queremos informarle que por el momento nuestro stock '
        + 'es insuficiente, por tal motivo, se suspenderá el reabastecimiento de los materiales.  ',
      isRead: false,
    },
    {
      title: 'Campaña Buen Fin 2024',
      message: 'Te comento que serán entregados el día 17 de enero ',
      isRead: true,
    },
  ]);

  const [currentTab, setCurrentTab] = useState<'Sin leer' | 'Todas'>('Sin leer');

  const tabs = ['Sin leer', 'Todas'];

  const filteredNotifications = currentTab === 'Todas'
    ? notifications
    : notifications.filter((n) => !n.isRead);

  const markAsRead = (title: string) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.title === title ? { ...n, isRead: true } : n
      )
    );
  };

  return {
    currentTab,
    setCurrentTab,
    filteredNotifications,
    tabs,
    markAsRead,
  };
}
