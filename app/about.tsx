import React, { useState } from "react";
import { router } from "expo-router";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For social media icons

const AboutScreen = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const SocialIcons = () => {
    // Fungsi untuk membuka WhatsApp
    const openWhatsApp = () => {
      Linking.openURL("whatsapp://send?phone=+6282283549484") // Ganti dengan nomor WhatsApp Anda
        .catch((err) => console.error("Failed to open WhatsApp", err));
    };

    // Fungsi untuk membuka Email
    const openEmail = () => {
      Linking.openURL("mailto:ardianpramana1802@gmail.com") // Ganti dengan email Anda
        .catch((err) => console.error("Failed to open Email", err));
    };

    // Fungsi untuk membuka Instagram
    const openInstagram = () => {
      Linking.openURL("https://www.instagram.com/ardianpramana_18") // Ganti dengan username Instagram Anda
        .catch((err) => console.error("Failed to open Instagram", err));
    };

    return (
      <View style={styles.socialIconsContainer}>
        {/* Ikon Instagram */}
        <TouchableOpacity style={styles.socialIcon} onPress={openInstagram}>
          <Ionicons name="logo-instagram" size={40} color="#6c5ce7" />
        </TouchableOpacity>

        {/* Ikon Email */}
        <TouchableOpacity style={styles.socialIcon} onPress={openEmail}>
          <Ionicons name="mail" size={40} color="#6c5ce7" />
        </TouchableOpacity>

        {/* Ikon WhatsApp */}
        <TouchableOpacity style={styles.socialIcon} onPress={openWhatsApp}>
          <Ionicons name="logo-whatsapp" size={40} color="#6c5ce7" />
        </TouchableOpacity>
      </View>
    );
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
        <View style={styles.contentContainer}>
          {/* Image */}
          <Image
            source={require('../assets/images/SkripsiKupurple.png')} // Local image path
            style={styles.image}
          />

          {/* About Text */}
          <Text style={styles.title}>Tentang Aplikasi</Text>
          <Text style={styles.description}>
            Aplikasi Skripsiku dirancang untuk membantu mahasiswa dalam menyusun dan mengelola proses penulisan skripsi mereka dengan lebih efisien. Aplikasi ini menyediakan tips, trik, dan sumber daya yang berguna selama perjalanan penulisan skripsi.
          </Text>

          {/* Features Section */}
          <Text style={styles.title}>Fitur Utama</Text>
          <View style={styles.featuresList}>
            <Text style={styles.featureItem}>• Langkah-langkah menyusun skripsi</Text>
            <Text style={styles.featureItem}>• Daftar tips dan trik menyusun skripsi</Text>
            <Text style={styles.featureItem}>• Panduan tentang topik penelitian</Text>
          </View>

          {/* Developer Section */}
          <Text style={styles.title}>Pengembang</Text>
          <Text style={styles.description}>
            Aplikasi ini dikembangkan oleh tim pengembang aplikasi mobile yang berfokus pada pembuatan alat bantu bagi mahasiswa dalam dunia akademik. Tim kami terdiri dari para pengembang perangkat lunak dan desainer yang berpengalaman.
          </Text>
        </View>
      </ScrollView>

      {/* Social Media Icons */}
      <SocialIcons />
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
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    color: "white",
    fontSize: 24,
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
    paddingTop: 30,
  },
  contentContainer: {
    alignItems: "center",
    paddingBottom: 40,
  },
  image: {
    width: 180, // Reduced the width slightly for a more balanced look
    height: 100, // Adjusted height to maintain aspect ratio
    borderRadius: 12, // Rounded corners
    marginBottom: 20, // Added space between image and text
    borderWidth: 2,
    borderColor: "#ddd", // Subtle border to make the image stand out
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2d3436",
    marginVertical: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#636e72",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  featuresList: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  featureItem: {
    fontSize: 16,
    color: "#636e72",
    lineHeight: 24,
    marginBottom: 10,
  },
  // Styles for Social Media Icons
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#f8f9fa",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  socialIcon: {
    marginHorizontal: 20,
  },
});

export default AboutScreen;
