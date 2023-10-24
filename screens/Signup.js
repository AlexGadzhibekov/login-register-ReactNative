import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.header}>
          <Text style={styles.header__title}>Create Account</Text>

          <Text style={styles.header__subtitle}>
            Connect with your friend today!
          </Text>
        </View>

        <View style={styles.email__container}>
          <Text style={styles.email__laible}>Email address</Text>

          <View style={styles.email__inputWraper}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={styles.email__input}
            />
          </View>
        </View>

        <View style={styles.number__container}>
          <Text style={styles.number__laible}>Mobile Number</Text>

          <View style={styles.number__inputWraper}>
            <TextInput
              placeholder="+91"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              style={styles.number__codeInput}
            />

            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
              style={styles.number__input}
            />
          </View>
        </View>

        <View style={styles.password__container}>
          <Text style={styles.password__laible}>Password</Text>

          <View style={styles.password__inputWraper}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={isPasswordShown}
              style={styles.password__input}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={styles.password__btnVisible}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.termsCheck__container}>
          <Checkbox
            style={styles.termsCheck__checkBox}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />

          <Text>I aggree to the terms and conditions</Text>
        </View>

        <Button title="Sign Up" filled style={styles.btn_signUp} />

        <View style={styles.signUp__container}>
          <View style={styles.signUp__lineLeft} />
          <Text style={styles.signUp__title}>Or Sign up with</Text>
          <View style={styles.signUp__lineRight} />
        </View>

        <View style={styles.social__container}>
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={styles.social__facebook}
          >
            <Image
              source={require("../assets/facebook.png")}
              style={styles.social__facebookImg}
              resizeMode="contain"
            />

            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={styles.social__google}
          >
            <Image
              source={require("../assets/google.png")}
              style={styles.social__googleImg}
              resizeMode="contain"
            />

            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.login__container}>
          <Text style={styles.login__laible}>Already have an account</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.login__link}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrap: {
    flex: 1,
    marginHorizontal: 22,
  },
  header: {
    marginVertical: 22,
  },
  header__title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: COLORS.black,
  },
  header__subtitle: {
    fontSize: 16,
    color: COLORS.black,
  },
  email__container: {
    marginBottom: 12,
  },
  email__laible: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
  },
  email__inputWraper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  email__input: {
    width: "100%",
  },
  number__container: {
    marginBottom: 12,
  },
  number__laible: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
  },
  number__inputWraper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 22,
  },
  number__codeInput: {
    width: "12%",
    borderRightWidth: 1,
    borderLeftColor: COLORS.grey,
    height: "100%",
  },
  number__input: {
    width: "80%",
  },
  password__container: {
    width: "100%",
  },
  password__laible: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 8,
  },
  password__inputWraper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  password__input: {
    width: "100%",
  },
  password__btnVisible: {
    position: "absolute",
    right: 12,
  },
  termsCheck__container: {
    flexDirection: "row",
    marginVertical: 6,
  },
  termsCheck__checkBox: {
    marginRight: 8,
  },
  btn_signUp: {
    marginTop: 18,
    marginBottom: 4,
  },
  signUp__container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  signUp__lineLeft: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
  signUp__title: {
    fontSize: 14,
  },
  signUp__lineRight: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
  social__container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  social__facebook: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 4,
    borderRadius: 10,
  },
  social__facebookImg: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  social__google: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 4,
    borderRadius: 10,
  },
  social__googleImg: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  login__container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  login__laible: {
    fontSize: 16,
    color: COLORS.black,
  },
  login__link: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default Signup;
