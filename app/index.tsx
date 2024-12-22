import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";

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
        {/* Blue Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>PANDUAN</Text>
          <Text style={styles.bannerSubtitle}>MENULIS SKRIPSI</Text>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.bannerImage}
          />
          <Text style={styles.bannerDescription}>
            Mulai dari ide, susun strategi, dan wujudkan skripsi terbaikmu. Satu
            halaman setiap hari, dekatkanmu ke wisuda. Tidak ada skripsi yang
            sempurna, tapi adanya skripsi yang selesai.
          </Text>
        </View>

        {/* Categories */}
        <Text style={styles.categoryTitle}>Categories</Text>
        <View style={styles.categories}>
          {/* Step by Step */}
          <TouchableOpacity
            style={[styles.categoryBox, styles.orangeBox]}
            onPress={() => router.push("/step")}
          >
            <Image
              source={require("../assets/images/buku.png")}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>Step by Step</Text>
          </TouchableOpacity>

          {/* Tips */}
          <TouchableOpacity
            style={[styles.categoryBox, styles.yellowBox]}
            onPress={() => router.push("/tips")}
          >
            <Image
              source={require("../assets/images/pensil.png")}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>Tips</Text>
          </TouchableOpacity>

          {/* Topics Example */}
          <TouchableOpacity
            style={[styles.categoryBox, styles.blueBox]}
            onPress={() => router.push("/topic")}
          >
            <Image
              source={require("../assets/images/topi.png")}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>Topics Example</Text>
          </TouchableOpacity>

          {/* About */}
          <TouchableOpacity
            style={[styles.categoryBox, styles.greenBox]}
            onPress={() => router.push("/about")}
          >
            <Image
              source={require("../assets/images/tentang.png")}
              style={styles.categoryIcon}
            />
            <Text style={styles.categoryText}>About</Text>
          </TouchableOpacity>
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
    padding: 15,
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
  },
  banner: {
    backgroundColor: "#00A8F0",
    padding: 20,
    margin: 15,
    borderRadius: 10,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  bannerSubtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  bannerImage: {
    width: 135,
    height: 100,
    alignSelf: "center",
    marginVertical: 10,
  },
  bannerDescription: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 8,
    marginBottom: 15,
    color: "#333",
  },
  categories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  categoryBox: {
    width: "42%",
    height: 160,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  orangeBox: {
    backgroundColor: "#ffb703",
  },
  yellowBox: {
    backgroundColor: "#fed058",
  },
  blueBox: {
    backgroundColor: "#609FF8",
  },
  greenBox: {
    backgroundColor: "#BDED0F",
  },
  categoryIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});

export default HomeScreen;
