import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.background}
      colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../assets/hero1.jpg")}
            style={styles.firstAvatar}
          />

          <Image
            source={require("../assets/hero3.jpg")}
            style={styles.secondAvatar}
          />

          <Image
            source={require("../assets/hero3.jpg")}
            style={styles.thirdAvatar}
          />

          <Image
            source={require("../assets/hero2.jpg")}
            style={styles.fourthAvatar}
          />
        </View>

        {/* content  */}

        <View style={styles.contentWraper}>
          <Text style={styles.contentTitle}>Let's Get</Text>
          <Text style={styles.contentSubtitle}>Started</Text>

          <View style={styles.textBox}>
            <Text style={styles.firstText}>
              Connect with each other with chatting
            </Text>
            <Text style={styles.secondText}>
              Calling, Enjoy Safe and private texting
            </Text>
          </View>

          <Button
            title="Join Now"
            onPress={() => navigation.navigate("Signup")}
            style={styles.btn}
          />

          <View style={styles.login}>
            <Text style={styles.login__txt}>Already have an account ?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.login__link}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  firstAvatar: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    transform: [{ translateX: 20 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  secondAvatar: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: -30,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-5deg" }],
  },
  thirdAvatar: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: "absolute",
    top: 130,
    left: -50,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "15deg" }],
  },
  fourthAvatar: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    top: 110,
    left: 100,
    transform: [{ translateX: 50 }, { translateY: 50 }, { rotate: "-15deg" }],
  },
  contentWraper: {
    paddingHorizontal: 22,
    position: "absolute",
    top: 400,
    width: "100%",
  },
  contentTitle: {
    fontSize: 50,
    fontWeight: 800,
    color: COLORS.white,
  },
  contentSubtitle: {
    fontSize: 46,
    fontWeight: 800,
    color: COLORS.white,
  },
  textBox: {
    marginVertical: 22,
  },
  firstText: {
    fontSize: 16,
    color: COLORS.white,
    marginVertical: 4,
  },
  secondText: {
    fontSize: 16,
    color: COLORS.white,
  },
  btn: {
    marginTop: 22,
    width: "100%",
  },
  login: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
  login__txt: {
    fontSize: 16,
    color: COLORS.white,
  },
  login__link: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "bold",
    marginLeft: 4,
  },
});

export default Welcome;
