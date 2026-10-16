import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors, BorderRadius, Shadows } from '@/constants/theme';
import { useAppTheme } from '@/context/ThemeContext';

import { ScalePressable } from '@/components/common/ScalePressable';

export default function TabLayout() {
  const { theme: currentTheme, isDark } = useAppTheme();
  const theme = Colors[currentTheme];
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textSecondary,
        headerShown: false,
        tabBarStyle: [
          styles.tabBar,
          { backgroundColor: theme.surface, borderColor: theme.border }
        ],
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Satoshi-Medium',
          marginBottom: 4,
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
                style={[styles.fab, { backgroundColor: isDark ? theme.surface : '#ffffff', borderColor: theme.border }]} 
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
    bottom: 24,
    left: 20,
    right: 20,
    height: 75,
    paddingBottom: 10,
    paddingTop: 8,
    borderRadius: BorderRadius.xl,
    borderWidth: 1,
    elevation: 8,
    ...Shadows.soft,
  },
  fabWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    top: -20, 
    borderWidth: 4,
    ...Shadows.cyan,
    zIndex: 1000,
  },
});
