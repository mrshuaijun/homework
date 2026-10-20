import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Typography, Spacing, Radii } from '../constants/Typography';
import { categoryBreakdown } from '../constants/MockData';

export default function CategoryBreakdown() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <MaterialIcons name="donut-small" size={18} color={Colors.secondaryContainer} />
          <Text style={styles.headerTitle}>5月支出构成</Text>
        </View>
        <Text style={styles.headerSub}>TOP 4 类目</Text>
      </View>

      {/* Segmented bar */}
      <View style={styles.segmentedBarOuter}>
        {categoryBreakdown.map((cat, index) => (
          <View
            key={index}
            style={[
              styles.segment,
              {
                width: `${cat.percentage}%`,
                backgroundColor: cat.color,
              },
              index === 0 && styles.segmentFirst,
              index === categoryBreakdown.length - 1 && styles.segmentLast,
            ]}
          />
        ))}
      </View>

      {/* Legend grid 2x2 */}
      <View style={styles.legendGrid}>
        {categoryBreakdown.map((cat, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: cat.color }]} />
            <Text style={styles.legendName} numberOfLines={1}>
              {cat.name}
            </Text>
            <Text style={styles.legendPercent}>{cat.percentage}%</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Radii.md,
    backgroundColor: Colors.surfaceContainer,
    padding: Spacing.spaceMd,
    gap: 12,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  headerTitle: {
    ...Typography.headlineSm,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    color: Colors.onSurface,
  },
  headerSub: {
    ...Typography.labelMonoSm,
    color: Colors.onSurfaceVariant,
  },
  segmentedBarOuter: {
    flexDirection: 'row',
    height: 12,
    borderRadius: Radii.full,
    backgroundColor: Colors.surfaceContainerHighest,
    overflow: 'hidden',
    padding: 2,
    gap: 2,
  },
  segment: {
    height: '100%',
  },
  segmentFirst: {
    borderTopLeftRadius: Radii.full,
    borderBottomLeftRadius: Radii.full,
  },
  segmentLast: {
    borderTopRightRadius: Radii.full,
    borderBottomRightRadius: Radii.full,
  },
  legendGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  legendItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: Radii.default,
    backgroundColor: 'rgba(41, 42, 45, 0.5)',
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  legendName: {
    ...Typography.bodySm,
    color: Colors.onSurface,
    flex: 1,
  },
  legendPercent: {
    ...Typography.labelMonoSm,
    color: Colors.onSurfaceVariant,
  },
});
