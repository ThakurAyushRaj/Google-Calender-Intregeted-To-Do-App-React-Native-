import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '@/context/ThemeContext';
import { Colors, Spacing, Typography, Fonts, Shadows, BorderRadius } from '@/constants/theme';
import { ThemedText } from '@/components/common/themed-text';
import { ThemedView } from '@/components/common/themed-view';
import { RevealUp } from '@/components/common/reveal-up';
import * as Notifications from 'expo-notifications';
import { useState, useEffect } from 'react';

export default function NotificationsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { isDark } = useAppTheme();
  const theme = Colors[isDark ? 'dark' : 'light'];
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const scheduled = await Notifications.getAllScheduledNotificationsAsync();
      const formatted = scheduled.map(n => {
        let displayTime = 'Scheduled';
        if (n.content.data?.scheduledTime) {
          try {
            const scheduledDate = new Date(n.content.data.scheduledTime);
            displayTime = scheduledDate.toLocaleString([], {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            });
          } catch (e) {
            console.error('Error formatting notification time:', e);
          }
        } else if (n.trigger && 'seconds' in n.trigger) {
          const fireDate = new Date(Date.now() + (n.trigger.seconds as number) * 1000);
          displayTime = fireDate.toLocaleString([], {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          });
        }

        return {
          id: n.identifier,
          title: n.content.title || 'Task Reminder',
          message: n.content.body || '',
          time: displayTime,
          type: 'reminder',
          unread: true
        };
      });
      setNotifications(formatted);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const cancelAllNotifications = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
    fetchNotifications();
  };

  const cancelNotification = async (id: string) => {
    await Notifications.cancelScheduledNotificationAsync(id);
    fetchNotifications();
  };

  return (
    <ThemedView style={styles.container}>
      {/* Fixed Header */}
      <View style={[styles.headerContainer, { paddingTop: Math.max(insets.top, 16), backgroundColor: theme.background, borderBottomColor: theme.border }]}>
        <View style={styles.headerContent}>
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={[styles.backButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
          >
            <Ionicons name="arrow-back" size={22} color={theme.text} />
          </TouchableOpacity>
          <View style={styles.titleWrapper}>
            <ThemedText style={[styles.headerTitleText, { color: theme.primary }]}>Activity Reminders</ThemedText>
          </View>
          {notifications.length > 0 && (
            <TouchableOpacity 
              onPress={cancelAllNotifications}
              style={[styles.backButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
            >
              <Ionicons name="trash-outline" size={22} color={theme.error} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView 
        style={styles.scroll} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {notifications.map((notif, index) => (
          <RevealUp key={notif.id} delay={index * 50}>
            <View 
              style={[
                styles.notifCard, 
                { backgroundColor: theme.surface, borderColor: theme.border },
              ]}
            >
              <View style={[styles.iconContainer, { backgroundColor: isDark ? 'rgba(6, 182, 212, 0.15)' : 'rgba(6, 182, 212, 0.08)' }]}>
                <Ionicons 
                  name="alarm" 
                  size={22} 
                  color={theme.accent} 
                />
              </View>
              <View style={styles.notifText}>
                <View style={styles.notifHeader}>
                  <ThemedText style={[styles.notifTitle, { color: theme.primary }]} numberOfLines={1}>{notif.title.replace('Task Reminder: ', '')}</ThemedText>
                  <TouchableOpacity 
                    onPress={() => cancelNotification(notif.id)}
                    style={styles.cancelBtn}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  >
                    <Ionicons name="close-circle-outline" size={20} color={theme.textSecondary} />
                  </TouchableOpacity>
                </View>
                <ThemedText style={[styles.notifMessage, { color: theme.textSecondary }]} numberOfLines={2}>{notif.message}</ThemedText>
                
                <View style={styles.timeRow}>
                  <Ionicons name="time-outline" size={14} color={theme.accent} />
                  <ThemedText style={[styles.notifTime, { color: theme.accent }]}>{notif.time}</ThemedText>
                </View>
              </View>
            </View>
          </RevealUp>
        ))}

        {!loading && notifications.length === 0 ? (
          <RevealUp delay={100}>
            <View style={styles.emptyContainer}>
              <View style={[styles.emptyIconRing, { backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)', borderColor: theme.border }]}>
                <Ionicons name="notifications-off-outline" size={44} color={theme.textSecondary} />
              </View>
              <ThemedText style={[styles.emptyText, { color: theme.primary }]}>No Scheduled Reminders</ThemedText>
              <ThemedText style={[styles.emptySub, { color: theme.textSecondary }]}>When you schedule activities with reminders, they will appear here.</ThemedText>
            </View>
          </RevealUp>
        ) : null}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: { zIndex: 100, borderBottomWidth: 1 },
  headerContent: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, height: 64 },
  titleWrapper: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  headerTitleText: { fontSize: 18, fontFamily: Fonts.black, textAlign: 'center' },
  backButton: { width: 44, height: 44, borderRadius: 22, borderWidth: 1, justifyContent: 'center', alignItems: 'center', ...Shadows.soft },
  scroll: { flex: 1 },
  scrollContent: { padding: Spacing.md, paddingBottom: 100 },
  notifCard: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: BorderRadius.xl,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    ...Shadows.soft,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: BorderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  notifText: { flex: 1 },
  notifHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  notifTitle: { fontSize: 16, fontFamily: Fonts.bold, flex: 1, marginRight: 8 },
  cancelBtn: { padding: 2 },
  notifTime: { fontSize: 12, fontFamily: Fonts.bold, marginLeft: 6 },
  timeRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  notifMessage: { fontSize: 14, fontFamily: Fonts.regular, lineHeight: 20 },
  emptyContainer: { alignItems: 'center', marginTop: 100, gap: 16, paddingHorizontal: 32 },
  emptyIconRing: { width: 96, height: 96, borderRadius: 48, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  emptyText: { fontSize: 20, fontFamily: Fonts.black },
  emptySub: { fontSize: 14, fontFamily: Fonts.regular, textAlign: 'center', lineHeight: 22, opacity: 0.7 },
});
