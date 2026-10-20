import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Typography, Spacing, Radii } from '../constants/Typography';

export default function QuickRecordBanner() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.95}>
      {/* Lightning icon */}
      <View style={styles.leftContent}>
        <View style={styles.iconBox}>
          <MaterialIcons name="electric-bolt" size={24} color={Colors.onPrimaryContainer} />
        </View>
        <View style={styles.textContent}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>智能极速闪记</Text>
            <View style={styles.aiBadge}>
              <Text style={styles.aiBadgeText}>AI 2.0</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>语音唤醒、拍小票账单或一键唤起九宫格</Text>
        </View>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.circleButton} activeOpacity={0.7}>
          <MaterialIcons name="mic" size={19} color={Colors.onSurface} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton} activeOpacity={0.7}>
          <MaterialIcons name="photo-camera" size={19} color={Colors.onSurface} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: Radii.md,
    backgroundColor: Colors.surfaceContainerHigh,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.spaceSm,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: Radii.default,
    backgroundColor: Colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    // Neon glow
    shadowColor: Colors.primaryContainer,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  textContent: {
    flex: 1,
    gap: 2,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    ...Typography.headlineSm,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    color: Colors.onSurface,
  },
  aiBadge: {
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
    backgroundColor: Colors.surfaceContainerHighest,
  },
  aiBadgeText: {
    ...Typography.labelMonoSm,
    fontFamily: 'JetBrainsMono_700Bold',
    color: Colors.primaryContainer,
  },
  subtitle: {
    ...Typography.bodySm,
    color: Colors.onSurfaceVariant,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  circleButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.surfaceContainerHighest,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
