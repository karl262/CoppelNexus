import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { palette } from '@/themes/colors';
import { Check } from 'lucide-react-native';

interface Props {
  step: number;
}

const titles = ['Propietario', 'Negocio', 'Ubicación'];

export default function StepProgress({ step }: Props) {
  return (
    <View style={styles.container}>
      {titles.map((t, i) => {
        const idx = i + 1;
        const active = idx === step;
        const done = idx < step;

        return (
          <View key={t} style={styles.stepWrapper}>
            <View
              style={[
                styles.circle,
                { backgroundColor: done || active ? palette.primary : palette.gray300 }
              ]}
            >
              {done ? (
                <Check size={16} color={palette.white} />
              ) : (
                <Text style={styles.circleText}>
                  {idx}
                </Text>
              )}
            </View>
            <Text style={[
              styles.label,
              { color: active
                  ? palette.primary
                  : done
                    ? palette.gray500
                    : palette.gray400
              }
            ]}>
              {t}
            </Text>
            {i < titles.length - 1 && (
              <View style={styles.connector} />
            )}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,   // 1.5em = 24px
    marginBottom: 16,
    color: palette.white,
  },
  stepWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  circle: {
    width: 32,                // 2em = 32px
    height: 32,
    borderRadius: 16,         // half of width/height
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: palette.white,
    fontWeight: '700',
  },
  label: {
    marginTop: 4,             // 0.25em = 4px
    fontSize: 10,             // caption-small
    lineHeight: 12,
  },
  connector: {
    position: 'absolute',
    top: 16,                  // center of circle
    left: '64%',
    right: '-36%',
    height: 2,                // border 2px
    backgroundColor: palette.gray300,
  },
});
