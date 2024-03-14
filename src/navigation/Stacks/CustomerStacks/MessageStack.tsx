import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TrackMsg } from "../../../screens";
import Message from "../../../screens/Message";

const StackMessage = createNativeStackNavigator();

const MessageStack = () => {
  return (
    <StackMessage.Navigator
      initialRouteName="Message"
      screenOptions={() => ({ headerShown: false })}
    >
      {/* @ts-ignore */}
      <StackMessage.Screen name="Message" component={Message} />
      {/* @ts-ignore */}
      <StackMessage.Screen name="TrackMsg" component={TrackMsg} />
    </StackMessage.Navigator>
  );
};

export default MessageStack;

const styles = StyleSheet.create({});
