import { View, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Tabs } from "expo-router";
import { Foundation, AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function TabNavigation() {
  const [isSplashDone, setSplashDone] = useState(false);

  // Timer untuk menghilangkan splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashDone(true); // Setelah 3 detik, splash screen selesai
    }, 3000); // Set splash screen selama 3 detik
    return () => clearTimeout(timer); // Membersihkan timer saat komponen dibersihkan
  }, []);

  // Menampilkan tab navigasi hanya setelah splash selesai
  if (!isSplashDone) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require('../assets/images/SkripsiKuwhite.png')} // Ganti dengan path gambar Anda
          style={styles.splashImage}
        />
      </View>
    );
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index" // Nama route yang sebenarnya
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} />,
          tabBarActiveTintColor: "#6c5ce7"
        }}
      />
      <Tabs.Screen name="topic" options={{ headerShown: false, href: null }} />
      <Tabs.Screen name="tips" options={{ headerShown: false, href: null }} />
      <Tabs.Screen name="step" options={{ headerShown: false, href: null }} />
      <Tabs.Screen
        name="progresku"
        options={{
          headerShown: false,
          title: "Progresku",
          tabBarIcon: ({ color }) => <FontAwesome5 name="book-reader" size={24} color={color} />,
          tabBarActiveTintColor: "#6c5ce7"
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerShown: false,
          title: "About",
          tabBarIcon: ({ color }) => <AntDesign name="infocirlce" size={24} color={color} />,
          tabBarActiveTintColor: "#6c5ce7"
        }}
      />
    </Tabs>
  );
}

// Styles for Splash Screen
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6c5ce7",
  },
  splashImage: {
    width: 300,  // Sesuaikan ukuran gambar sesuai kebutuhan
    height: 300, // Sesuaikan ukuran gambar sesuai kebutuhan
    resizeMode: "contain",  // Menyesuaikan gambar dengan area tampilan
  },
});
