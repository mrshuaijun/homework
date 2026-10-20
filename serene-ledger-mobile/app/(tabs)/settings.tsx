import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Typography, Spacing, Radii } from '../../constants/Typography';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.iconCircle}>
          <MaterialIcons name="terminal" size={32} color={Colors.tertiaryFixed} />
        </View>
        <Text style={styles.title}>极客配置</Text>
        <Text style={styles.subtitle}>终端 API、自动同步与高阶 Neo-FinTech 规则</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.margin,
    gap: 12,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: Radii.full,
    backgroundColor: 'rgba(225, 224, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(225, 224, 255, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Typography.headlineMd,
    color: Colors.onSurface,
  },
  subtitle: {
    ...Typography.bodyMd,
    color: Colors.onSurfaceVariant,
    textAlign: 'center',
  },
});
