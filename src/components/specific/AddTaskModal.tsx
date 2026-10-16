import React, { useState } from 'react';
import { StyleSheet, View, Modal, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useAppTheme } from '@/context/ThemeContext';
import { Typography, Fonts, Shadows } from '@/constants/theme';
import { useTasks } from '@/context/TaskContext';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '@/components/common/themed-text';

interface AddTaskModalProps {
  visible: boolean;
  onClose: () => void;
}

export function AddTaskModal({ visible, onClose }: AddTaskModalProps) {
  const { colors: theme } = useAppTheme();
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      addTask(
        title, 
        new Date().toISOString().split('T')[0], 
        time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        'Medium',
        'General'
      );
      setTitle('');
      setTime('');
      onClose();
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.centeredView}
      >
        <TouchableOpacity style={styles.overlay} activeOpacity={1} onPress={onClose} />
        <View style={[styles.modalView, { backgroundColor: theme.background }]}>
          <View style={styles.headerRow}>
            <ThemedText style={[styles.modalHeading, { color: theme.primary }]}>New Activity</ThemedText>
            <TouchableOpacity onPress={onClose} style={[styles.closeCircle, { backgroundColor: theme.surface }]}>
              <Ionicons name="close" size={24} color={theme.primary} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.inputWrapper}>
            <ThemedText style={[styles.inputLabelText, { color: theme.textSecondary }]}>ACTIVITY TITLE</ThemedText>
            <TextInput
              style={[styles.textInput, { backgroundColor: theme.surface, color: theme.primary, borderColor: theme.border }]}
              placeholder="What needs to be done?"
              placeholderTextColor={theme.textSecondary}
              value={title}
              onChangeText={setTitle}
              autoFocus
            />
          </View>

          <View style={styles.inputWrapper}>
            <ThemedText style={[styles.inputLabelText, { color: theme.textSecondary }]}>TIME (OPTIONAL)</ThemedText>
            <TextInput
              style={[styles.textInput, { backgroundColor: theme.surface, color: theme.primary, borderColor: theme.border }]}
              placeholder="e.g. 10:00 AM"
              placeholderTextColor={theme.textSecondary}
              value={time}
              onChangeText={setTime}
            />
          </View>

          <TouchableOpacity style={[styles.primaryBtn, { backgroundColor: theme.accent }]} onPress={handleAdd} activeOpacity={0.9}>
            <ThemedText style={[styles.primaryBtnText, { color: theme.accentText }]}>Save Activity</ThemedText>
            <Ionicons name="checkmark" size={24} color={theme.accentText} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  modalView: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 32,
    paddingBottom: Platform.OS === 'ios' ? 48 : 32,
    ...Shadows.soft,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  modalHeading: {
    fontSize: 24,
    fontFamily: Fonts.black,
  },
  closeCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    ...Shadows.soft,
  },
  inputWrapper: {
    marginBottom: 24,
  },
  inputLabelText: {
    ...Typography.label,
    marginBottom: 8,
  },
  textInput: {
    height: 64,
    borderRadius: 24, // Nested per spec
    paddingHorizontal: 20,
    fontSize: 18,
    fontFamily: Fonts.bold,
    borderWidth: 1,
  },
  primaryBtn: {
    height: 64,
    borderRadius: 32, // Pill shape
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
    ...Shadows.glow,
  },
  primaryBtnText: {
    fontSize: 18,
    fontFamily: 'Nunito_900Black',
  },
});
