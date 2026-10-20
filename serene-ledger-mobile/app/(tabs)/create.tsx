import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Typography, Spacing, Radii } from '../../constants/Typography';

export default function CreateTransactionScreen() {
  const router = useRouter();
  const [type, setType] = useState<'expense' | 'income'>('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('餐饮美食');

  const categories = [
    { name: '餐饮美食', icon: 'restaurant' },
    { name: '交通出行', icon: 'directions-subway' },
    { name: '日常购物', icon: 'shopping-bag' },
    { name: '住房物业', icon: 'home' },
    { name: '休闲娱乐', icon: 'sports-esports' },
    { name: '医疗健康', icon: 'medical-services' },
  ];

  const handleSave = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeButton}>
          <MaterialIcons name="close" size={24} color={Colors.onSurface} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>快捷记一笔</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Type Switcher */}
        <View style={styles.typeSwitcher}>
          <TouchableOpacity
            style={[styles.typeButton, type === 'expense' && styles.typeButtonActive]}
            onPress={() => setType('expense')}
          >
            <Text
              style={[
                styles.typeText,
                type === 'expense' && styles.typeTextActive,
              ]}
            >
              支出流水
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.typeButton, type === 'income' && styles.typeButtonActive]}
            onPress={() => setType('income')}
          >
            <Text
              style={[
                styles.typeText,
                type === 'income' && styles.typeTextActive,
              ]}
            >
              收入进账
            </Text>
          </TouchableOpacity>
        </View>

        {/* Amount Input */}
        <View style={styles.amountBox}>
          <Text style={styles.currencySymbol}>¥</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="0.00"
            placeholderTextColor="rgba(255, 255, 255, 0.2)"
            keyboardType="decimal-pad"
            value={amount}
            onChangeText={setAmount}
            autoFocus
          />
        </View>

        {/* Categories Grid */}
        <Text style={styles.sectionTitle}>选择分类</Text>
        <View style={styles.categoryGrid}>
          {categories.map((cat) => {
            const isSelected = category === cat.name;
            return (
              <TouchableOpacity
                key={cat.name}
                onPress={() => setCategory(cat.name)}
                style={[
                  styles.categoryChip,
                  isSelected && styles.categoryChipSelected,
                ]}
              >
                <MaterialIcons
                  name={cat.icon as any}
                  size={18}
                  color={isSelected ? Colors.onPrimaryContainer : Colors.onSurfaceVariant}
                />
                <Text
                  style={[
                    styles.categoryText,
                    isSelected && styles.categoryTextSelected,
                  ]}
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Save Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.saveButton}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>确认记账</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.margin,
    paddingVertical: 12,
  },
  closeButton: {
    padding: 4,
  },
  headerTitle: {
    ...Typography.headlineSm,
    color: Colors.onSurface,
  },
  content: {
    padding: Spacing.margin,
    gap: 20,
  },
  typeSwitcher: {
    flexDirection: 'row',
    backgroundColor: Colors.surfaceContainer,
    borderRadius: Radii.lg,
    padding: 4,
  },
  typeButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: Radii.default,
  },
  typeButtonActive: {
    backgroundColor: Colors.primaryContainer,
  },
  typeText: {
    ...Typography.labelMonoSm,
    fontFamily: 'Manrope_600SemiBold',
    color: Colors.onSurfaceVariant,
  },
  typeTextActive: {
    color: Colors.onPrimaryContainer,
    fontWeight: '700',
  },
  amountBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainer,
    borderRadius: Radii.lg,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  currencySymbol: {
    ...Typography.headlineMd,
    fontFamily: 'JetBrainsMono_700Bold',
    color: Colors.primaryContainer,
    marginRight: 10,
  },
  amountInput: {
    flex: 1,
    ...Typography.displayHeroMobile,
    color: Colors.onSurface,
    padding: 0,
  },
  sectionTitle: {
    ...Typography.labelMonoSm,
    color: Colors.onSurfaceVariant,
    textTransform: 'uppercase',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: Radii.lg,
    backgroundColor: Colors.surfaceContainer,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  categoryChipSelected: {
    backgroundColor: Colors.primaryContainer,
    borderColor: Colors.primaryContainer,
  },
  categoryText: {
    ...Typography.bodySm,
    fontFamily: 'Manrope_600SemiBold',
    color: Colors.onSurface,
  },
  categoryTextSelected: {
    color: Colors.onPrimaryContainer,
  },
  saveButton: {
    backgroundColor: Colors.primaryContainer,
    borderRadius: Radii.lg,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: Colors.primaryContainer,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
  },
  saveButtonText: {
    ...Typography.bodyMd,
    fontFamily: 'Manrope_700Bold',
    color: Colors.onPrimaryContainer,
  },
});
