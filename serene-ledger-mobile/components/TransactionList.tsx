import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Typography, Spacing, Radii } from '../constants/Typography';
import { transactions } from '../constants/MockData';
import FilterPills from './FilterPills';
import TransactionItem from './TransactionItem';

export default function TransactionList() {
  const [filter, setFilter] = useState('全部');

  const filteredTransactions = transactions.filter((t) => {
    if (filter === '支出') return !t.isIncome;
    if (filter === '收入') return t.isIncome;
    return true;
  });

  return (
    <View style={styles.container}>
      {/* Header with filter pills */}
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>近期流水动态</Text>
        <FilterPills onFilterChange={setFilter} />
      </View>

      {/* Transaction items */}
      <View style={styles.list}>
        {filteredTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </View>

      {/* View all link */}
      <TouchableOpacity style={styles.viewAllButton} activeOpacity={0.8}>
        <Text style={styles.viewAllText}>查看本月全部 68 笔流水明细</Text>
        <MaterialIcons name="arrow-forward" size={16} color={Colors.primaryContainer} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.spaceSm,
    marginTop: 4,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    ...Typography.headlineSm,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    color: Colors.onSurface,
  },
  list: {
    gap: 8,
  },
  viewAllButton: {
    marginTop: 8,
    width: '100%',
    paddingVertical: 12,
    borderRadius: Radii.md,
    backgroundColor: Colors.surfaceContainerLow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  viewAllText: {
    ...Typography.bodySm,
    fontFamily: 'Manrope_500Medium',
    color: Colors.onSurfaceVariant,
  },
});
