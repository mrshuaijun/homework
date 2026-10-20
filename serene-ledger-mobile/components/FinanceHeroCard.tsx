import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Typography, Spacing, Radii } from '../constants/Typography';
import { heroData } from '../constants/MockData';

export default function FinanceHeroCard() {
  return (
    <View style={styles.container}>
      {/* Background ambient glows */}
      <View style={styles.glowTopRight} />
      <View style={styles.glowBottomLeft} />

      <View style={styles.content}>
        {/* Greeting & Health Score */}
        <View style={styles.headerRow}>
          <View style={styles.greetingRow}>
            <Text style={styles.greetingText}>{heroData.greeting}</Text>
            <View style={styles.syncedBadge}>
              <View style={styles.syncDot} />
              <Text style={styles.syncedText}>SYNCED</Text>
            </View>
          </View>
          <View style={styles.healthPill}>
            <MaterialIcons name="monitor-heart" size={14} color={Colors.secondaryContainer} />
            <Text style={styles.healthText}>
              健康 {heroData.healthScore}/{heroData.healthMax}
            </Text>
          </View>
        </View>

        {/* Main expense display */}
        <View style={styles.expenseSection}>
          <View style={styles.expenseLabelRow}>
            <Text style={styles.expenseLabel}>本月总支出 (EXPENSE)</Text>
            <View style={styles.deltaPill}>
              <MaterialIcons name="trending-down" size={13} color={Colors.primaryContainer} />
              <Text style={styles.deltaText}>{heroData.expenseDelta} 环比节约</Text>
            </View>
          </View>
          <View style={styles.amountRow}>
            <Text style={styles.currencySign}>¥</Text>
            <Text style={styles.amountValue}>{heroData.monthlyExpense}</Text>
          </View>
        </View>

        {/* 2-column grid: Income + Savings */}
        <View style={styles.metricsGrid}>
          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>本月总收入</Text>
            <Text style={styles.incomeValue}>{heroData.monthlyIncome}</Text>
            <Text style={styles.metricSubtitle}>{heroData.incomeSubtitle}</Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>净结余 (储蓄率)</Text>
            <View style={styles.savingsRow}>
              <Text style={styles.savingsValue}>{heroData.netSavings}</Text>
              <Text style={styles.savingsRate}>{heroData.savingsRate}</Text>
            </View>
            <Text style={styles.metricSubtitle}>{heroData.savingsSubtitle}</Text>
          </View>
        </View>

        {/* Budget progress bar */}
        <View style={styles.budgetSection}>
          <View style={styles.budgetLabelRow}>
            <Text style={styles.budgetLabel}>
              月度总预算消耗 ({heroData.budgetPercent}%)
            </Text>
            <Text style={styles.budgetRemaining}>
              剩余{' '}
              <Text style={styles.budgetRemainingValue}>{heroData.budgetRemaining}</Text>
            </Text>
          </View>
          <View style={styles.budgetBarOuter}>
            <LinearGradient
              colors={[Colors.secondaryContainer, Colors.primaryContainer, Colors.primaryContainer]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={[styles.budgetBarInner, { width: `${heroData.budgetPercent}%` }]}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    borderRadius: Radii.md,
    backgroundColor: 'rgba(31, 31, 35, 0.9)',
    padding: Spacing.spaceMd,
    overflow: 'hidden',
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 12,
  },
  glowTopRight: {
    position: 'absolute',
    top: -48,
    right: -48,
    width: 192,
    height: 192,
    borderRadius: 96,
    backgroundColor: 'rgba(195, 244, 0, 0.10)',
  },
  glowBottomLeft: {
    position: 'absolute',
    bottom: -64,
    left: -64,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(1, 229, 153, 0.10)',
  },
  content: {
    position: 'relative',
    zIndex: 10,
    gap: Spacing.spaceSm,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  greetingText: {
    ...Typography.bodyMd,
    fontFamily: 'Manrope_600SemiBold',
    color: Colors.onSurface,
    letterSpacing: -0.3,
  },
  syncedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: Radii.full,
    backgroundColor: Colors.surfaceContainerHighest,
  },
  syncDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.secondaryFixed,
  },
  syncedText: {
    ...Typography.labelMonoSm,
    color: Colors.onSurfaceVariant,
  },
  healthPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radii.full,
    backgroundColor: 'rgba(1, 229, 153, 0.15)',
  },
  healthText: {
    ...Typography.badgePill,
    color: Colors.secondaryContainer,
  },
  expenseSection: {
    marginTop: 4,
  },
  expenseLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  expenseLabel: {
    ...Typography.labelMonoSm,
    color: Colors.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  deltaPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: Radii.full,
    backgroundColor: 'rgba(195, 244, 0, 0.15)',
  },
  deltaText: {
    ...Typography.labelMonoSm,
    color: Colors.primaryContainer,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
    marginTop: 4,
  },
  currencySign: {
    ...Typography.labelMonoLg,
    fontFamily: 'JetBrainsMono_500Medium',
    color: Colors.onSurfaceVariant,
    fontWeight: '600',
  },
  amountValue: {
    ...Typography.displayHeroMobile,
    color: Colors.onSurface,
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: Spacing.spaceXs,
    marginTop: 4,
  },
  metricCard: {
    flex: 1,
    padding: 12,
    borderRadius: Radii.default,
    backgroundColor: 'rgba(41, 42, 45, 0.6)',
    gap: 4,
  },
  metricLabel: {
    ...Typography.labelMonoSm,
    color: Colors.onSurfaceVariant,
  },
  incomeValue: {
    ...Typography.headlineSm,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    color: Colors.secondaryContainer,
    letterSpacing: -0.3,
  },
  metricSubtitle: {
    ...Typography.bodySm,
    color: 'rgba(196, 201, 172, 0.8)',
  },
  savingsRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  savingsValue: {
    ...Typography.headlineSm,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    color: Colors.onSurface,
    letterSpacing: -0.3,
  },
  savingsRate: {
    ...Typography.labelMonoSm,
    fontFamily: 'JetBrainsMono_700Bold',
    color: Colors.primaryContainer,
  },
  budgetSection: {
    marginTop: 8,
    paddingTop: 8,
    gap: 6,
  },
  budgetLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  budgetLabel: {
    ...Typography.labelMonoSm,
    color: Colors.onSurfaceVariant,
  },
  budgetRemaining: {
    ...Typography.labelMonoSm,
    color: Colors.onSurface,
    fontWeight: '500',
  },
  budgetRemainingValue: {
    ...Typography.labelMonoSm,
    fontFamily: 'JetBrainsMono_700Bold',
    color: Colors.primaryContainer,
  },
  budgetBarOuter: {
    height: 8,
    width: '100%',
    borderRadius: Radii.full,
    backgroundColor: Colors.surfaceContainerHighest,
    overflow: 'hidden',
    padding: 2,
  },
  budgetBarInner: {
    height: '100%',
    borderRadius: Radii.full,
    // Neon glow shadow on iOS
    shadowColor: Colors.primaryContainer,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
});
