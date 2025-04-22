import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { palette } from '@/themes/colors';

interface Props {
    icon: React.ElementType;
    label: string;
    onPress: () => void;
}

export default function SettingsGridItem({ icon: Icon, label, onPress }: Props) {
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <Icon size={28} color={palette.primary} />
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '45%',
        aspectRatio: 1,
        borderRadius: 12,
        backgroundColor: palette.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        shadowColor: palette.black,
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    label: {
        marginTop: 8,
        fontSize: 14,
        color: palette.textPrimary,
        textAlign: 'center',
    },
});
