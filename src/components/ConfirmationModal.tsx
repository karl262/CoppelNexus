import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { palette } from '@/themes/colors';

interface Props {
  visible: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel: string;
  cancelLabel?: string;
}

export default function ConfirmModal({
  visible,
  title,
  message,
  onConfirm,
  onCancel,
  confirmLabel,
  cancelLabel = 'Cancelar',
}: Props) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.backdrop}>
        <View style={styles.box}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>

          <Pressable style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.confirmLabel}>{confirmLabel}</Text>
          </Pressable>
          <Pressable style={styles.cancelButton} onPress={onCancel}>
            <Text style={styles.cancelLabel}>{cancelLabel}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: palette.overlay,  // rgba overlay
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,             // 1em
  },
  box: {
    width: '100%',
    maxWidth: 360,                     // ~md modal
    backgroundColor: palette.white,
    borderRadius: 16,                  // large rounding
    padding: 24,                       // 1.5em
  },
  title: {
    fontSize: 16,                      // Action
    lineHeight: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: palette.textPrimary,
  },
  message: {
    fontSize: 14,                      // Body small
    lineHeight: 22,
    marginBottom: 24,
    color: palette.textSecondary,
  },
  confirmButton: {
    backgroundColor: palette.primary,
    paddingVertical: 12,               // 0.75em
    borderRadius: 8,                   // small rounding
    marginBottom: 12,
  },
  confirmLabel: {
    color: palette.white,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: palette.primary,
    paddingVertical: 12,
    borderRadius: 8,
  },
  cancelLabel: {
    color: palette.primary,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});
