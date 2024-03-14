import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../../../assets/icons";
import Messages from "../../components/Messages";
import { SCREEN_WIDTH } from "../../components/DEFAULTS";

const DriverMessages = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ width: SCREEN_WIDTH, alignItems: 'center' }}>
      <View style={{
        width: SCREEN_WIDTH - 48
      }}>
        <Pressable
          onPress={() => navigation.canGoBack() && navigation.goBack()}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={icons.backArrDark}
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
        <Messages />
      </View>
    </SafeAreaView>
  );
};

export default DriverMessages;

const styles = StyleSheet.create({});
