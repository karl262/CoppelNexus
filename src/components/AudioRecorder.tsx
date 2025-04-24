// src/features/referral/components/AudioRecorder.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { palette } from '@/themes/colors';

interface Props {
  uri?: string;
  onFinish: (uri: string) => void;
}

export default function AudioRecorder({ uri, onFinish }: Props) {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [duration, setDuration] = useState<number>(0);

  // Cleanup: detener grabación si el componente se desmonta
  useEffect(() => {
    return () => {
      if (recording) {
        void recording.stopAndUnloadAsync();
      }
    };
  }, [recording]);

  // Formatea segundos a MM:SS
  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const startRecording = async () => {
    try {
      const { granted } = await Audio.requestPermissionsAsync();
      if (!granted) return;

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      // Usamos createAsync() con el preset actualizado
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );

      recording.setOnRecordingStatusUpdate((status) => {
        if (status.isRecording && status.durationMillis != null) {
          setDuration(Math.floor(status.durationMillis / 1000));
        }
      });

      setRecording(recording);
    } catch (error) {
      console.error('Error al iniciar grabación:', error);
    }
  };

  const stopRecording = async () => {
    try {
      if (!recording) return;
      await recording.stopAndUnloadAsync();
      const uriGrabacion = recording.getURI();
      setRecording(null);
      setDuration(0);
      if (uriGrabacion) {
        onFinish(uriGrabacion);
      }
    } catch (error) {
      console.error('Error al detener grabación:', error);
    }
  };

  const handlePress = recording ? stopRecording : startRecording;
  const label = recording ? 'Grabando...' : 'Listo para grabar';

  return (
    <View className="items-center mb-4">
      <Pressable
        onPress={handlePress}
        className="w-32 h-32 rounded-full border-2 border-primary items-center justify-center"
      >
        <Text className="text-primary text-2xl font-bold">
          {formatTime(duration)}
        </Text>
      </Pressable>
      <Text className="mt-2 text-textSecondary text-sm">{label}</Text>
    </View>
  );
}
