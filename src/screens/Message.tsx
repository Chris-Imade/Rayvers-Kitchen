import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { memo, useEffect, useLayoutEffect, useState } from "react";
import { icons } from "../../assets/icons";
import { SCREEN_WIDTH, colors } from "../components/DEFAULTS";
import NotificationsTabs from "../components/Customer/NotificationsTabs";
import Messages from "../components/Messages";
import { useNavigation } from "@react-navigation/native";
import Notifies from "../components/Notifies";


const Message = () => {

  const navigation = useNavigation();


  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? 25 : 0,
        backgroundColor: colors.white,
        flex: 1,
      }}
    >
      <View style={{ width: SCREEN_WIDTH }}>
        {/* header */}
        <Pressable
          onPress={() => navigation.canGoBack() && navigation.goBack()}
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 24 }}
        >
          <Image
            source={icons.back}
            style={{
              width: 45,
              height: 45,
            }}
          />

          <Text
            style={{
              fontSize: 17,
              color: "#181C2E",
              fontFamily: "Regular-Sen",
              marginLeft: 16,
            }}
          >
            Messages
          </Text>
        </Pressable>

        <View
          style={{
            width: SCREEN_WIDTH - 48,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Notifications scheduled for later versions, based on unprovided information */}
          {/* <NotificationsTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          /> */}
        </View>

        <View style={{ width: SCREEN_WIDTH, alignItems: "center" }}>
          <Messages />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default memo(Message);

const styles = StyleSheet.create({});
