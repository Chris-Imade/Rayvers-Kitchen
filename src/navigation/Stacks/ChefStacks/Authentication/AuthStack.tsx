import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ChefLogin,
  Onboard,
  RouteSelection,
} from "../../../../screens";

const StackAuth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <StackAuth.Navigator
      initialRouteName="Login"
      screenOptions={() => ({ headerShown: false })}
    >
      <StackAuth.Screen name="Onboard" component={Onboard} />
      <StackAuth.Screen name="Login" component={ChefLogin} />
      <StackAuth.Screen name="RouteSelection" component={RouteSelection} />
    </StackAuth.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
