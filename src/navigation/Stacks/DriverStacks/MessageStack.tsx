import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DriverMessages, TrackMsg } from "../../../screens";

const DriverMessageStack = createNativeStackNavigator();

const MessageStack = () => {
  return (
    <DriverMessageStack.Navigator
      initialRouteName="DriverProfile"
      screenOptions={{ headerShown: false }}
    >
      <DriverMessageStack.Screen name="DriverMessages" component={DriverMessages} />
      {/* @ts-ignore */}
      <DriverMessageStack.Screen name="TrackMsg" component={TrackMsg} />
    </DriverMessageStack.Navigator>
  );
};

export default MessageStack;

const styles = StyleSheet.create({});
