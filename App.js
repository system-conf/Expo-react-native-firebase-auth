import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";

const App = () => {
  return (
    <View style={{ flex: 1,  }}>
       <StatusBar translucent={false} backgroundColor="transparent" barStyle="dark-content" />
      <LoginScreen/>

    </View>
  );
};

const styles = StyleSheet.create({
  yazi: {
    fontSize: 30,
    color: "red",
  },
});

export default App;
