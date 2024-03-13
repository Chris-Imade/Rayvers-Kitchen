import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditProfile, ProfileInfo } from "../../../screens";


const RootProfileStack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <RootProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <RootProfileStack.Screen name="ProfileInfo" component={ProfileInfo} />
      <RootProfileStack.Screen name="EditProfile" component={EditProfile} />
    </RootProfileStack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({});
