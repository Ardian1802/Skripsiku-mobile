import React, { useState } from "react";
import { router } from "expo-router";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

// HomeScreen Component
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
        <Text style={styles.categoryTitle}>Langkah-langkah Menyusun Skripsi</Text>
        
        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>1. Pemilihan Topik</Text>
          <Text style={styles.stepDescription}>
            Pilih topik yang relevan dengan minat atau bidang studi Anda. Konsultasikan dengan dosen pembimbing.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>2. Penyusunan Proposal</Text>
          <Text style={styles.stepDescription}>
            Tentukan judul, latar belakang, rumusan masalah, tujuan penelitian, tinjauan pustaka, dan metode penelitian.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>3. Persetujuan Proposal</Text>
          <Text style={styles.stepDescription}>
            Ajukan proposal kepada dosen pembimbing dan dapatkan persetujuan untuk melanjutkan penelitian.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>4. Pengumpulan Data</Text>
          <Text style={styles.stepDescription}>
            Kumpulkan data sesuai dengan metode penelitian yang telah dipilih (kuantitatif atau kualitatif).
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>5. Analisis Data</Text>
          <Text style={styles.stepDescription}>
            Gunakan teknik analisis sesuai jenis data, seperti statistik untuk data kuantitatif atau analisis tematik untuk data kualitatif.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>6. Penyusunan Bab-bab Skripsi</Text>
          <Text style={styles.stepDescription}>
            Tulis bab-bab skripsi: pendahuluan, tinjauan pustaka, metodologi, hasil dan pembahasan, kesimpulan.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>7. Penulisan Daftar Pustaka</Text>
          <Text style={styles.stepDescription}>
            Buat daftar pustaka dengan format sesuai pedoman universitas (misalnya APA, MLA).
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>8. Revisi dan Penyuntingan</Text>
          <Text style={styles.stepDescription}>
            Revisi skripsi berdasarkan masukan dosen pembimbing dan pastikan format serta tata bahasa sesuai.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>9. Ujian Skripsi</Text>
          <Text style={styles.stepDescription}>
            Persiapkan presentasi dan jawab pertanyaan penguji dengan baik pada ujian skripsi.
          </Text>
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.stepTitle}>10. Penyelesaian Administratif</Text>
          <Text style={styles.stepDescription}>
            Setelah lulus ujian, serahkan skripsi final dan selesaikan administrasi akademik.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6c5ce7",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "white",
    fontSize: 20,
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
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#333",
  },
  stepContainer: {
    marginBottom: 20,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d3436",
  },
  stepDescription: {
    fontSize: 16,
    color: "#636e72",
    marginTop: 5,
    lineHeight: 22,
  },
});

export default HomeScreen;
