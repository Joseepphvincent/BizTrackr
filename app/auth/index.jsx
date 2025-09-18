// app/auth/index.jsx
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function AuthScreen() {
  const router = useRouter();

  const [view, setView] = useState("options"); // "options" | "login" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleLogin() {
    if (email.trim() && password.trim()) {
      console.log("✅ Login successful:", email);
      router.replace("/goals");
    } else {
      Alert.alert("Error", "Please enter email and password");
    }
  }

  function handleSignup() {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert("Error", "Please fill out all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    console.log("✅ Account created for:", email);
    router.replace("/goals");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {view === "options" && (
          <>
            <Text style={styles.title}>Choose an Option</Text>

            <TouchableOpacity style={styles.button} onPress={() => setView("login")}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => setView("signup")}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>or continue with</Text>

            <View style={styles.socialContainer}>
              <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#1877F2" }]}>
                <FontAwesome name="facebook" size={24} color="white" />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#DB4437" }]}>
                <FontAwesome name="google" size={24} color="white" />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#E4405F" }]}>
                <FontAwesome name="instagram" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </>
        )}

        {view === "login" && (
          <>
            <Text style={styles.title}>Log In</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => setView("options")}>
              <Text style={[styles.buttonText, styles.backButtonText]}>Back</Text>
            </TouchableOpacity>
          </>
        )}

        {view === "signup" && (
          <>
            <Text style={styles.title}>Sign Up</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleSignup}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => setView("options")}>
              <Text style={[styles.buttonText, styles.backButtonText]}>Back</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6dcdcff", // ✅ Black background
  },
  card: {
    backgroundColor: "#e4dcdcff", // ✅ Dark card background
    borderRadius: 20,
    padding: 24,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000000ff", // ✅ White text
  },
  button: {
    backgroundColor: "#c0b9b9ff", // ✅ Yellow button
    borderRadius: 30,
    paddingVertical: 14,
    width: "80%",
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: {
    color: "#2b2929ff", // ✅ Black text inside yellow button
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    marginVertical: 16,
    fontSize: 14,
    color: "#000000ff", // ✅ Light gray text
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000ff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fcf7f7ff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: "100%",
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#fdf9f9ff", // ✅ Dark input field
    color: "#000000ff", // ✅ White text inside input
  },
  backButton: {
    backgroundColor: "#c0b9b9ff",
    borderWidth: 1,
    borderColor: "#d6d3d3ff",
  },
  backButtonText: {
    color: "#000000ff",
  },
});
