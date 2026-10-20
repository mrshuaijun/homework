import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Typography, Radii } from '../constants/Typography';
import { Transaction } from '../constants/MockData';

interface TransactionItemProps {
  transaction: Transaction;
}

/**
 * Maps transaction icon name to MaterialIcons name
 */
function getIconName(icon: string): keyof typeof MaterialIcons.glyphMap {
  const iconMap: Record<string, keyof typeof MaterialIcons.glyphMap> = {
    restaurant: 'restaurant',
    subway: 'subway',
    'shopping-bag': 'shopping-bag',
    payments: 'payments',
  };
  return iconMap[icon] || 'receipt';
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const { title, icon, iconColor, iconBgColor, paymentMethod, time, amount, category, isIncome } =
    transaction;

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <View style={styles.leftSection}>
        {/* Icon */}
        <View
          style={[
            styles.iconCircle,
            iconBgColor
              ? { backgroundColor: iconBgColor }
              : { backgroundColor: Colors.surfaceContainerHighest },
          ]}
        >
          <MaterialIcons name={getIconName(icon)} size={20} color={iconColor} />
        </View>
        {/* Text info */}
        <View style={styles.textInfo}>
          <Text
            style={[
              styles.title,
              isIncome && { color: Colors.secondaryContainer, fontWeight: '600' },
            ]}
            numberOfLines={1}
          >
            {title}
          </Text>
          <View style={styles.metaRow}>
            <Text style={styles.paymentMethod}>{paymentMethod}</Text>
            <View style={styles.metaDot} />
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
      </View>

      {/* Amount & category */}
      <View style={styles.rightSection}>
        <Text
          style={[
            styles.amount,
            isIncome && {
              color: Colors.secondaryContainer,
              fontWeight: '700',
            },
          ]}
        >
          {amount}
        </Text>
        <Text
          style={[
            styles.category,
            isIncome && { color: 'rgba(1, 229, 153, 0.8)' },
          ]}
        >
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    borderRadius: Radii.md,
    backgroundColor: Colors.surfaceContainer,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    minWidth: 0,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInfo: {
    flex: 1,
    minWidth: 0,
    gap: 2,
  },
  title: {
    ...Typography.bodyMd,
    fontFamily: 'Manrope_500Medium',
    color: Colors.onSurface,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 2,
  },
  paymentMethod: {
    ...Typography.labelMonoSm,
    color: Colors.onSurfaceVariant,
  },
  metaDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.surfaceVariant,
  },
  time: {
    ...Typography.bodySm,
    color: Colors.onSurfaceVariant,
  },
  rightSection: {
    alignItems: 'flex-end',
    paddingLeft: 8,
  },
  amount: {
    ...Typography.headlineSm,
    fontFamily: 'SpaceGrotesk_600SemiBold',
    color: Colors.onSurface,
    letterSpacing: -0.3,
  },
  category: {
    ...Typography.labelMonoSm,
    color: 'rgba(196, 201, 172, 0.7)',
  },
});
