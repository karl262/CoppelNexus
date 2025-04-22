import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Pressable, StyleSheet, Switch } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { palette } from '@/themes/colors';
import { router } from 'expo-router';
import { useSettings } from '@/hooks/useSettings';

export default function NotificationsSettingsScreen() {
  const {
    rewardAvailable,
    infoUpdate,
    support,
    toggleSetting,
  } = useSettings();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <ArrowLeft size={22} color={palette.white} />
        </Pressable>
        <Text style={styles.headerText}>Notificaciones</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* Sección de aplicación */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Aplicación</Text>
        <SettingSwitch
          label="Recompensa disponible"
          value={rewardAvailable}
          onToggle={() => toggleSetting('rewardAvailable')}
        />
      </View>

      {/* Sección de configuración */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configuración</Text>
        <SettingSwitch
          label="Información actualizada"
          value={infoUpdate}
          onToggle={() => toggleSetting('infoUpdate')}
        />
        <SettingSwitch
          label="Soporte"
          value={support}
          onToggle={() => toggleSetting('support')}
        />
      </View>
    </SafeAreaView>
  );
}

function SettingSwitch({
  label,
  value,
  onToggle,
}: {
  label: string;
  value: boolean;
  onToggle: () => void;
}) {
  return (
    <View style={styles.switchRow}>
      <Text style={styles.switchLabel}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        thumbColor={value ? palette.primary : '#ccc'}
        trackColor={{ false: '#ccc', true: '#b3d4ff' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.gray100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: palette.primary,
    justifyContent: 'space-between',
  },
  headerText: {
    color: palette.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: palette.textPrimary,
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  switchLabel: {
    fontSize: 14,
    color: palette.textPrimary,
  },
});
