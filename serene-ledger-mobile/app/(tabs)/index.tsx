import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Typography, Spacing, Radii } from '../../constants/Typography';
import FinanceHeroCard from '../../components/FinanceHeroCard';
import QuickRecordBanner from '../../components/QuickRecordBanner';
import TrendMiniChart from '../../components/TrendMiniChart';
import CategoryBreakdown from '../../components/CategoryBreakdown';
import TransactionList from '../../components/TransactionList';

export default function OverviewScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} style={styles.monthPill}>
          <View style={styles.pulseDot} />
          <Text style={styles.monthText}>OCT 2024</Text>
          <MaterialIcons name="unfold-more" size={16} color={Colors.onSurfaceVariant} />
        </TouchableOpacity>

        <View style={styles.headerActions}>
          <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
            <MaterialIcons name="notifications-none" size={20} color={Colors.onSurfaceVariant} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.avatarButton}>
            <MaterialIcons name="person" size={18} color={Colors.onPrimary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Scroll Content */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Master Finance Card */}
        <FinanceHeroCard />

        {/* Quick Voice / Scan Record Banner */}
        <QuickRecordBanner />

        {/* Bento Grid: 7-day Trend & Category Breakdown */}
        <View style={styles.bentoRow}>
          <TrendMiniChart />
          <CategoryBreakdown />
        </View>

        {/* Recent Transactions Stream */}
        <TransactionList />

        {/* Bottom padding for tab bar */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  header: {
    height: 56,
    paddingHorizontal: Spacing.margin,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(18, 19, 22, 0.85)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  monthPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radii.full,
    backgroundColor: Colors.surfaceContainerHigh,
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.primaryContainer,
  },
  monthText: {
    ...Typography.labelMonoSm,
    fontFamily: 'JetBrainsMono_700Bold',
    color: Colors.onSurface,
    letterSpacing: 0.8,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primaryContainer,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.margin,
    gap: Spacing.spaceMd,
  },
  bentoRow: {
    gap: Spacing.spaceMd,
  },
  bottomSpacer: {
    height: 72,
  },
});
