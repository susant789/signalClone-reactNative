import React, { useState, useLayoutEffect } from "react";
import { KeyboardAvoidingView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input } from "react-native-elements";
import { auth, db } from "../firebase";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login",
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authuser) => {
        authuser.user.updateProfile({
          displayName: name,
          photoURL:
            pic ||
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png",
        });
      })
      .catch((err) => alert(err.message));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.Container}>
      <h3 style={{ fontSize: 20, textTransform: "uppercase" }}>
        Create a new account
      </h3>
      <View style={styles.InputContainer}>
        <Input
          placeholder="Fullname"
          value={name}
          onChangeText={(text) => setName(text)}
          autoFocus
        />
        <Input
          placeholder="Email"
          value={email}
          type="email"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          value={password}
          type="password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Input
          placeholder="Enter your Image"
          value={pic}
          type="text"
          onChangeText={(text) => setPic(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        title="Register"
        onPress={register}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  InputContainer: {
    width: 300,
    margin: 10,
  },
  button: {
    width: 200,
    margin: 10,
  },
});

export default Register;
