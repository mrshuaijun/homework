import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Typography, Spacing, Radii } from '../constants/Typography';
import { trendBars } from '../constants/MockData';

export default function TrendMiniChart() {
  const maxBarHeight = 96; // max height in pixels for the tallest bar

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <MaterialIcons name="bar-chart" size={18} color={Colors.primaryContainer} />
          <Text style={styles.headerTitle}>近7天支出走势</Text>
        </View>
        <Text style={styles.headerSub}>日均 ¥184.2</Text>
      </View>

      {/* Bar chart */}
      <View style={styles.chartArea}>
        {trendBars.map((bar, index) => {
          const barHeight = bar.height * maxBarHeight;
          const isMonday = bar.label === '一';
          const isToday = bar.isToday;
          const showValue = bar.value != null;

          return (
            <View key={index} style={styles.barColumn}>
              {/* Value label above peak bars */}
              {showValue && (
                <Text
                  style={[
                    styles.barValueLabel,
                    { color: bar.highlightColor || Colors.primaryContainer },
                  ]}
                >
                  {bar.value}
                </Text>
              )}

              {/* Bar */}
              {bar.isHighlight && isToday ? (
                <LinearGradient
                  colors={[Colors.primaryContainer, Colors.secondaryContainer]}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  style={[
                    styles.bar,
                    {
                      height: barHeight,
                      shadowColor: Colors.secondaryContainer,
                      shadowOpacity: 0.4,
                      shadowRadius: 8,
                    },
                  ]}
                />
              ) : bar.isHighlight && isMonday ? (
                <View
                  style={[
                    styles.bar,
                    {
                      height: barHeight,
                      backgroundColor: Colors.primaryContainer,
                      shadowColor: Colors.primaryContainer,
                      shadowOpacity: 0.5,
                      shadowRadius: 10,
                      shadowOffset: { width: 0, height: 0 },
                    },
                  ]}
                />
              ) : (
                <View
                  style={[
                    styles.bar,
                    {
                      height: barHeight,
                      backgroundColor: Colors.surfaceContainerHighest,
                    },
                  ]}
                />
              )}

              {/* Day label */}
              <Text
                style={[
                  styles.dayLabel,
                  bar.isHighlight && {
                    color: bar.highlightColor || Colors.primaryContainer,
                    fontWeight: '600',
                  },
                ]}
              >
                {bar.label}
              </Text>
            </View>
          );
        })}
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
  chartArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 112,
    paddingTop: 16,
    paddingBottom: 4,
    paddingHorizontal: 4,
  },
  barColumn: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
    position: 'relative',
  },
  barValueLabel: {
    ...Typography.labelMonoSm,
    fontSize: 10,
    position: 'absolute',
    top: -16,
  },
  bar: {
    width: 12,
    borderRadius: Radii.full,
  },
  dayLabel: {
    ...Typography.labelMonoSm,
    color: Colors.onSurfaceVariant,
  },
});
