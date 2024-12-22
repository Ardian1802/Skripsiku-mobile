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
        <Text style={styles.categoryTitle}>Daftar Topik Skripsi</Text>

        {/* Topik: GIS */}
        <View style={styles.topicCard}>
          <Text style={styles.topicTitle}>Topik: Geographic Information System (GIS)</Text>
          <View style={styles.topicContainer}>
            <Text style={styles.topicItem}>1. Pengembangan Sistem Informasi Geografis untuk Pemetaan Risiko Bencana Alam di Wilayah X</Text>
            <Text style={styles.topicItem}>2. Penerapan Sistem Informasi Geografis untuk Analisis Perubahan Penggunaan Lahan di Kota Y</Text>
            <Text style={styles.topicItem}>3. Optimalisasi Pemanfaatan Sistem Informasi Geografis untuk Perencanaan Transportasi Berkelanjutan di Kota Z</Text>
          </View>
        </View>

        {/* Topik: Sistem Informasi Manajemen */}
        <View style={styles.topicCard}>
          <Text style={styles.topicTitle}>Topik: Sistem Informasi Manajemen (SIM)</Text>
          <View style={styles.topicContainer}>
            <Text style={styles.topicItem}>1. Perancangan Sistem Informasi Manajemen Rumah Sakit Berbasis Web untuk Meningkatkan Efisiensi Pelayanan</Text>
            <Text style={styles.topicItem}>2. Analisis Pengaruh Implementasi Sistem Informasi Manajemen Terhadap Pengambilan Keputusan di Perusahaan X</Text>
            <Text style={styles.topicItem}>3. Penerapan Sistem Informasi Manajemen Kepegawaian untuk Meningkatkan Kinerja Pegawai di Instansi Pemerintah</Text>
          </View>
        </View>

        {/* Topik: E-Commerce */}
        <View style={styles.topicCard}>
          <Text style={styles.topicTitle}>Topik: E-Commerce</Text>
          <View style={styles.topicContainer}>
            <Text style={styles.topicItem}>1. Analisis Pengaruh Pengalaman Pengguna terhadap Kepuasan Pelanggan dalam Platform E-Commerce di Indonesia</Text>
            <Text style={styles.topicItem}>2. Strategi Pemasaran Digital untuk Meningkatkan Penjualan pada Platform E-Commerce Berbasis Marketplace</Text>
            <Text style={styles.topicItem}>3. Evaluasi Pengaruh Keamanan Transaksi Online Terhadap Kepercayaan Konsumen di E-Commerce</Text>
          </View>
        </View>

        {/* Topik: Big Data */}
        <View style={styles.topicCard}>
          <Text style={styles.topicTitle}>Topik: Big Data</Text>
          <View style={styles.topicContainer}>
            <Text style={styles.topicItem}>1. Penerapan Big Data untuk Meningkatkan Kualitas Layanan Pelanggan di Perusahaan Telekomunikasi</Text>
            <Text style={styles.topicItem}>2. Optimasi Proses Pengolahan Big Data untuk Analisis Pasar dan Tren Konsumen</Text>
            <Text style={styles.topicItem}>3. Studi Kasus Penerapan Big Data dalam Meningkatkan Pengelolaan Rantai Pasokan di Perusahaan Retail</Text>
          </View>
        </View>

        {/* Topik: Keamanan Siber */}
        <View style={styles.topicCard}>
          <Text style={styles.topicTitle}>Topik: Keamanan Siber</Text>
          <View style={styles.topicContainer}>
            <Text style={styles.topicItem}>1. Analisis Keamanan Sistem Informasi pada Aplikasi E-Commerce Menggunakan Metode Penetration Testing</Text>
            <Text style={styles.topicItem}>2. Penerapan Sistem Keamanan Berbasis Blockchain untuk Melindungi Data Pengguna pada Platform Digital</Text>
            <Text style={styles.topicItem}>3. Pengaruh Keamanan Jaringan terhadap Kinerja Sistem Informasi Perusahaan di Era Digital</Text>
          </View>
        </View>

        {/* Topik: Kecerdasan Buatan */}
        <View style={styles.topicCard}>
          <Text style={styles.topicTitle}>Topik: Kecerdasan Buatan (AI)</Text>
          <View style={styles.topicContainer}>
            <Text style={styles.topicItem}>1. Pengembangan Sistem Rekomendasi Berbasis Kecerdasan Buatan untuk Meningkatkan Pengalaman Belanja Online</Text>
            <Text style={styles.topicItem}>2. Penerapan Kecerdasan Buatan dalam Deteksi Dini Penyakit Menggunakan Gambar Medis</Text>
            <Text style={styles.topicItem}>3. Implementasi Kecerdasan Buatan dalam Pengembangan Chatbot untuk Layanan Pelanggan di Perusahaan Teknologi</Text>
          </View>
        </View>
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
    padding: 15,
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
    fontSize: 24,
    marginLeft: 20,
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
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2d3436",
    marginBottom: 20,
  },
  topicCard: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 15,
    padding: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  topicTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2d3436",
    marginBottom: 10,
  },
  topicContainer: {
    marginBottom: 15,
  },
  topicItem: {
    fontSize: 16,
    color: "#636e72",
    marginBottom: 8,
    lineHeight: 22,
  },
});

export default HomeScreen; // HomeScreen sebagai komponen utama untuk aplikasi
