import React from 'react';
import { Tabs } from 'expo-router';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Radii } from '../../constants/Typography';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryContainer,
        tabBarInactiveTintColor: Colors.onSurfaceVariant,
        tabBarStyle: {
          backgroundColor: 'rgba(13, 14, 17, 0.92)',
          borderTopColor: Colors.hairline,
          borderTopWidth: 1,
          height: 70,
          paddingBottom: 10,
          paddingTop: 8,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: 750,
          width: '100%',
          alignSelf: 'center',
          elevation: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.4,
          shadowRadius: 24,
        },
        tabBarLabelStyle: {
          fontFamily: 'Manrope_500Medium',
          fontSize: 11,
          letterSpacing: -0.2,
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '明细',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="grid-view" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: '统计',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="insights" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: '',
          tabBarButton: (props) => (
            <View style={styles.fabContainer}>
              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.fabButton}
                onPress={props.onPress}
              >
                <MaterialIcons name="add" size={28} color={Colors.onPrimaryContainer} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: '资产',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-balance-wallet" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '极客',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="terminal" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    top: -18,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  fabButton: {
    width: 52,
    height: 52,
    borderRadius: Radii.full,
    backgroundColor: Colors.primaryContainer,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primaryContainer,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 16,
    elevation: 8,
  },
});
