import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

type ProgressItem = {
  id: string;
  target: string;
  description: string;
  deadline: string;
  progress: string;
  status: string;
  notes: string;
};

const ProgreskuScreen = () => {
  const [target, setTarget] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [progress, setProgress] = useState('');
  const [status, setStatus] = useState('belum dimulai');
  const [notes, setNotes] = useState('');
  const [progressList, setProgressList] = useState<ProgressItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const loadProgress = async () => {
      const storedProgress = await AsyncStorage.getItem('progressList');
      if (storedProgress) {
        setProgressList(JSON.parse(storedProgress));
      }
    };
    loadProgress();
  }, []);

  useEffect(() => {
    const saveProgress = async () => {
      await AsyncStorage.setItem('progressList', JSON.stringify(progressList));
    };
    saveProgress();
  }, [progressList]);

  const handleAddOrEditProgress = () => {
    if (
      target.trim() === '' ||
      description.trim() === '' ||
      deadline.trim() === '' ||
      progress.trim() === '' ||
      status.trim() === ''
    ) {
      Alert.alert('Kesalahan', 'Silakan isi semua field wajib!');
      return;
    }

    if (isNaN(parseInt(progress, 10))) {
      Alert.alert('Kesalahan', 'Progress harus berupa angka!');
      return;
    }

    const formattedProgress = `${parseInt(progress, 10)}%`;

    if (editingId) {
      // Update item yang sedang diedit
      setProgressList((prevList) =>
        prevList.map((item) =>
          item.id === editingId
            ? {
                ...item,
                target,
                description,
                deadline,
                progress: formattedProgress,
                status,
                notes,
              }
            : item
        )
      );
      setEditingId(null);
    } else {
      // Tambah item baru
      const newProgress: ProgressItem = {
        id: Date.now().toString(),
        target,
        description,
        deadline,
        progress: formattedProgress,
        status,
        notes,
      };
      setProgressList((prevList) => [...prevList, newProgress]);
    }

    resetForm();
  };

  const resetForm = () => {
    setTarget('');
    setDescription('');
    setDeadline('');
    setProgress('');
    setStatus('');
    setNotes('');
  };

  const handleEdit = (id: string) => {
    const itemToEdit = progressList.find((item) => item.id === id);
    if (itemToEdit) {
      setTarget(itemToEdit.target);
      setDescription(itemToEdit.description);
      setDeadline(itemToEdit.deadline);
      setProgress(itemToEdit.progress.replace('%', ''));
      setStatus(itemToEdit.status);
      setNotes(itemToEdit.notes);
      setEditingId(id);
    }
  };

  const handleDelete = (id: string) => {
    console.log("Delete button clicked!");  // Debugging
  
    Alert.alert('Konfirmasi', 'Apakah Anda yakin ingin menghapus item ini?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Hapus',
        style: 'destructive',
        onPress: () => {
          console.log("Item deleted!");  // Debugging
          const newProgressList = progressList.filter((item) => item.id !== id);
          setProgressList(newProgressList);
          AsyncStorage.setItem('progressList', JSON.stringify(newProgressList));
        },
      },
    ]);
  };
  
  
  const handleDeleteAll = () => {
    console.log("Delete button clicked!");  // Debugging
    Alert.alert('Konfirmasi', 'Apakah Anda yakin ingin menghapus semua progres?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Hapus Semua',
        style: 'destructive',
        onPress: () => {
          setProgressList([]); // Kosongkan progressList
  
          // Menghapus data dari AsyncStorage
          AsyncStorage.removeItem('progressList');
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progres Skripsiku</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan Target"
        value={target}
        onChangeText={setTarget}
      />
      <TextInput
        style={styles.input}
        placeholder="Deskripsi Target"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Deadline (YYYY-MM-DD)"
        value={deadline}
        onChangeText={setDeadline}
      />
      <TextInput
        style={styles.input}
        placeholder="Progres (%)"
        value={progress}
        onChangeText={setProgress}
        keyboardType="numeric"
      />
      <Text>Status:</Text>
      <Picker selectedValue={status} style={styles.input} onValueChange={(itemValue) => setStatus(itemValue)}>
        <Picker.Item label="Belum Dimulai" value="belum dimulai" />
        <Picker.Item label="Sedang Dikerjakan" value="sedang dikerjakan" />
        <Picker.Item label="Selesai" value="selesai" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Catatan Tambahan (Opsional)"
        value={notes}
        onChangeText={setNotes}
      />
      <TouchableOpacity
        onPress={handleAddOrEditProgress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{editingId ? 'Simpan Perubahan' : 'Tambah Progres'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleDeleteAll}
        style={[styles.button, styles.deleteAllButton]}
      >
        <Text style={styles.buttonText}>Hapus Semua Progres</Text>
      </TouchableOpacity>
      <FlatList
        data={progressList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.progressItem}>
            <Text style={styles.progressText}>
              🎯 Target: {item.target} ({item.status})
            </Text>
            <Text>Deskripsi: {item.description}</Text>
            <Text>Deadline: {item.deadline}</Text>
            <Text>Progres: {item.progress}</Text>
            {item.notes ? <Text>Catatan: {item.notes}</Text> : null}
            <View style={styles.actionButtons}>
              <TouchableOpacity onPress={() => handleEdit(item.id)} style={styles.editButton}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                <Text style={styles.buttonText}>Hapus</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  deleteAllButton: {
    backgroundColor: '#ff4d4f',
  },
  progressItem: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#e6f7ff',
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    color: '#333',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#ff4d4f',
    padding: 10,
    borderRadius: 5,
  },
  list: {
    marginTop: 20,
  },
});

export default ProgreskuScreen;
