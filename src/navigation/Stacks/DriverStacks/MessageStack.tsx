import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Messages from "../../../screens/Driver/Messages";

const RootMessageStack = createNativeStackNavigator();

const MessageStack = () => {
  return (
    <RootMessageStack.Navigator
      initialRouteName="Message"
      screenOptions={{ headerShown: false }}
    >
      <RootMessageStack.Screen name="Message" component={Messages} />
    </RootMessageStack.Navigator>
  );
};

export default MessageStack;

const styles = StyleSheet.create({});
