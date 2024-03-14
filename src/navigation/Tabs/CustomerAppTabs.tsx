import { Image, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons } from "../../../assets/icons";
import { CustomerFavoriteStack, CustomerHomeStack, CustomerNotificationStack, CustomerProfileStack, OrderStack } from "../Stacks";
import MessageStack from "../Stacks/CustomerStacks/MessageStack";

const Tabs = createBottomTabNavigator();

const CustomerAppTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Explore"
      screenOptions={{
        title: "",
        tabBarStyle: {
          paddingTop: 30,
          borderRadius: 30,
        },
      }}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.homeFilled}
                style={{ width: 23, height: 23 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.homeOutlined}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            ),
        }}
        name="Explore"
        component={CustomerHomeStack}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.favoriteFilled}
                style={{ width: 23, height: 23 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.favoriteOutlined}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            ),
        }}
        name="CustomerFavoriteStack"
        component={CustomerFavoriteStack}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.truckFilled}
                style={{ width: 23, height: 23 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.truckOutlined}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            ),
        }}
        name="OrderStack"
        component={OrderStack}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.messageActive}
                style={{ width: 23, height: 23 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.messageInactive}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            ),
        }}
        name="MessageStack"
        component={MessageStack}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                source={icons.accountFilled}
                style={{ width: 23, height: 23 }}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.accountOutlined}
                style={{ width: 25, height: 25 }}
                resizeMode="contain"
              />
            ),
        }}
        name="CustomerProfileStack"
        component={CustomerProfileStack}
      />
    </Tabs.Navigator>
  );
};

export default memo(CustomerAppTabs);

const styles = StyleSheet.create({});
