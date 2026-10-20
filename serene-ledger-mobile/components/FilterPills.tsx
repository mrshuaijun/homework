import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { Typography, Radii } from '../constants/Typography';

const filters = ['全部', '支出', '收入'];

interface FilterPillsProps {
  onFilterChange?: (filter: string) => void;
}

export default function FilterPills({ onFilterChange }: FilterPillsProps) {
  const [activeFilter, setActiveFilter] = useState('全部');

  const handlePress = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange?.(filter);
  };

  return (
    <View style={styles.container}>
      {filters.map((filter) => {
        const isActive = filter === activeFilter;
        return (
          <TouchableOpacity
            key={filter}
            onPress={() => handlePress(filter)}
            style={[styles.pill, isActive && styles.pillActive]}
            activeOpacity={0.7}
          >
            <Text style={[styles.pillText, isActive && styles.pillTextActive]}>
              {filter}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    borderRadius: Radii.full,
    backgroundColor: Colors.surfaceContainerHigh,
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: Radii.full,
  },
  pillActive: {
    backgroundColor: Colors.primaryContainer,
  },
  pillText: {
    ...Typography.labelMonoSm,
    color: Colors.onSurfaceVariant,
  },
  pillTextActive: {
    color: Colors.onPrimaryContainer,
    fontWeight: '600',
  },
});
