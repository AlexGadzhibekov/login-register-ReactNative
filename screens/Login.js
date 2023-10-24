import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wraper}>
        <View style={styles.header}>
          <Text style={styles.header__title}>Hi Welcome Back ! 👋</Text>

          <Text style={styles.header__subtitle}>
            Hello again you have been missed!
          </Text>
        </View>

        <View style={styles.email__container}>
          <Text style={styles.email__lable}>Email address</Text>

          <View style={styles.email__inputWraper}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={styles.email__input}
            />
          </View>
        </View>

        <View style={styles.password__container}>
          <Text style={styles.password__lable}>Password</Text>

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

        <View style={styles.remember__container}>
          <Checkbox
            style={styles.remember__checkBox}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />

          <Text>Remember Me</Text>
        </View>

        <Button title="Login" filled style={styles.btn_login} />

        <View style={styles.login__container}>
          <View style={styles.login__lineLeft} />
          <Text style={styles.login__title}>Or Login with</Text>
          <View style={styles.login__lineRight} />
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

        <View style={styles.register__container}>
          <Text style={styles.register__txt}>Don't have an account ? </Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.register__link}>Register</Text>
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
  wraper: {
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
  email__lable: {
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
  password__container: {
    marginBottom: 12,
  },
  password__lable: {
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
  remember__container: {
    flexDirection: "row",
    marginVertical: 6,
  },
  remember__checkBox: {
    marginRight: 8,
  },
  btn_login: {
    marginTop: 18,
    marginBottom: 4,
  },
  login__container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  login__lineLeft: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
  login__title: {
    fontSize: 14,
  },
  login__lineRight: {
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
  register__container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  register__txt: {
    fontSize: 16,
    color: COLORS.black,
  },
  register__link: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
});
export default Login;
