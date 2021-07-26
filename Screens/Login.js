import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";
import { useEffect } from "react";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        navigation.replace("Home");
      }
      console.log(authuser);
    });
  }, []);
  const signin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.Container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Signal-Logo.svg",
        }}
        style={{ width: 150, height: 150, borderRadius: 10, margin: 10 }}
      />
      <View style={styles.InputConatiner}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          type="email"
          autoFocus
        />
        <Input
          onSubmitEditing={signin}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          type="password"
          secureTextEntry
        />
      </View>
      <Button onPress={signin} containerStyle={styles.Button} title="Login" />
      <Button
        onPress={() => {
          navigation.navigate("Register");
        }}
        containerStyle={styles.Button}
        title="Register"
        type="outline"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  InputConatiner: {
    width: 300,
  },
  Button: {
    width: 200,
    marginTop: 10,
  },
});

export default Login;
