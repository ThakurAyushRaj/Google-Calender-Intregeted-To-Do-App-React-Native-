import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BorderRadius, Shadows, Fonts } from '@/constants/theme';
import { useAppTheme } from '@/context/ThemeContext';

import { ScalePressable } from '@/components/common/ScalePressable';

export default function TabLayout() {
  const { colors: theme } = useAppTheme();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textSecondary,
        headerShown: false,
        tabBarStyle: [
          styles.tabBar,
          {
            backgroundColor: theme.surface,
            borderColor: theme.border,
            bottom: Math.max(insets.bottom, 16),
            left: Math.max(insets.left, 16),
            right: Math.max(insets.right, 16),
            start: Math.max(insets.left, 16),
            end: Math.max(insets.right, 16),
          }
        ],
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: Fonts.medium,
          marginBottom: 2,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "calendar" : "calendar-outline"} size={24} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="create"
        options={{
          tabBarLabel: () => null,
          tabBarButton: () => (
            <View style={styles.fabWrapper}>
               <ScalePressable 
                style={[styles.fab, { backgroundColor: theme.surface, borderColor: theme.border }]} 
                onPress={() => router.push('/task-entry')}
                hapticType="heavy"
               >
                 <Ionicons name="add" size={32} color={theme.accent} />
               </ScalePressable>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Activity",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "stats-chart" : "stats-chart-outline"} size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "settings" : "settings-outline"} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    height: 70,
    paddingBottom: 8,
    paddingTop: 8,
    paddingHorizontal: 8,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderTopWidth: 1,
    ...Shadows.soft,
  },
  fabWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    top: -16, 
    borderWidth: 3,
    ...Shadows.glow,
    zIndex: 1000,
  },
});
