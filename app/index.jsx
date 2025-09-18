// app/index.jsx
import { View, Text, StyleSheet } from "react-native";
import { Button } from "./components/button";
import { useRouter } from "expo-router";

export default function GetStartedUI() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Title & Subtitle ABOVE the card */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to XPNSTRACKR</Text>
        <Text style={styles.subtitle}>
          Your ready-to-use payment & expense management platform.
        </Text>
      </View>

      {/* Card or decorative area */}
      <View style={styles.card}>
        <Text style={styles.cardText}>Track your balance, expenses, and goals!</Text>
      </View>

     <View style={styles.buttonWrapper}>
  <Button 
    onPress={() => router.push("/auth")}
    style={{ backgroundColor: "black" }}
    textStyle={{ color: "white" }}
  >
    Get Started
  </Button>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6dcdcff", // ✅ Changed from black to white
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  header: {
    marginBottom: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black", // ✅ Changed from white to black for better contrast
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#555", // ✅ Softer gray for readability on white
    marginTop: 8,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#e6dcdcff",
    borderRadius: 24,
    width: 360,
    padding: 32,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    alignItems: "center",
    marginBottom: 32,
  },
  cardText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center",
  },
});
