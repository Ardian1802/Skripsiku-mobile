import React, { useState } from "react";
import { router } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Menggunakan Ionicons untuk ikon

const HomeScreen = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.push("/")}>
                      <Text style={styles.headerText}>Skripsiku</Text>
                    </TouchableOpacity>
            <View style={styles.headerIcons}>
              <TouchableOpacity onPress={toggleMenu}>
                <Text style={styles.icon}>☰</Text>
              </TouchableOpacity>
            </View>
          </View>

      {/* Drop-Down Menu */}
      {isMenuVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false); // Tutup menu
              router.push("/step"); // Navigasi ke halaman Step
            }}
          >
            <Text style={styles.menuText}>Step by Step</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              router.push("/tips");
            }}
          >
            <Text style={styles.menuText}>Tips</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              router.push("/topic");
            }}
          >
            <Text style={styles.menuText}>Topic</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              router.push("/about");
            }}
          >
            <Text style={styles.menuText}>About</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        <Text style={styles.categoryTitle}>Daftar Tips & Trik Menyusun Skripsi</Text>

        {/* Tip 1 */}
        <View style={styles.tipCard}>
          <Ionicons name="book" size={30} color="#6c5ce7" style={styles.tipIcon} />
          <View style={styles.tipTextContainer}>
            <Text style={styles.tipTitle}>Pilih Topik yang Tepat</Text>
            <Text style={styles.tipDescription}>
              - Sesuaikan dengan Minat dan Keahlian: Pilih topik yang sesuai dengan minat
              pribadi Anda dan bidang studi yang dikuasai. Penelitian yang Anda minati
              akan mempermudah proses pengerjaan skripsi.
              {"\n"}- Pertimbangkan Ketersediaan Sumber: Pastikan ada banyak referensi
              dan data yang tersedia untuk mendukung penelitian Anda.
            </Text>
          </View>
        </View>

        {/* Tip 2 */}
        <View style={styles.tipCard}>
          <Ionicons name="calendar" size={30} color="#6c5ce7" style={styles.tipIcon} />
          <View style={styles.tipTextContainer}>
            <Text style={styles.tipTitle}>Buat Rencana yang Jelas</Text>
            <Text style={styles.tipDescription}>
              - Jadwal Penulisan: Tentukan waktu tertentu untuk setiap bagian skripsi.
              Misalnya, set a goal to finish the introduction in 1 week.
              {"\n"}- Breakdown Tugas: Pecah tugas besar (seperti menulis bab) menjadi
              bagian yang lebih kecil dan terkelola. Fokus pada satu bab atau bagian
              dalam satu waktu.
            </Text>
          </View>
        </View>

        {/* Tip 3 */}
        <View style={styles.tipCard}>
          <Ionicons name="person" size={30} color="#6c5ce7" style={styles.tipIcon} />
          <View style={styles.tipTextContainer}>
            <Text style={styles.tipTitle}>Manfaatkan Sumber Daya Akademik</Text>
            <Text style={styles.tipDescription}>
              - Konsultasi dengan Dosen Pembimbing: Manfaatkan waktu bimbingan dengan
              dosen pembimbing untuk mendiskusikan ide dan mendapatkan feedback.
              {"\n"}- Perpustakaan dan Database Online: Gunakan jurnal, artikel, dan
              referensi lain dari perpustakaan kampus atau sumber online terpercaya.
            </Text>
          </View>
        </View>

        {/* More Tips... */}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6c5ce7",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#dfe6e9",
  },
  headerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    color: "white",
    fontSize: 20,
    marginLeft: 15,
  },
  dropdown: {
    position: "absolute",
    top: 60,
    right: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 1000,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d3436",
    marginBottom: 20,
  },
  tipCard: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: "row",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  tipIcon: {
    marginRight: 20,
  },
  tipTextContainer: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d3436",
    marginBottom: 5,
  },
  tipDescription: {
    fontSize: 14,
    color: "#636e72",
    lineHeight: 20,
  },
});

export default HomeScreen;
