import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../../../screens/Driver/Dashboard";

const RootDashboardStack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <RootDashboardStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <RootDashboardStack.Screen name="Dashboard" component={Dashboard} />
    </RootDashboardStack.Navigator>
  );
};

export default DashboardStack;

const styles = StyleSheet.create({});
