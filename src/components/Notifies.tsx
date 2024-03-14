import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { notifications } from "../DATA";
import { images } from "../../assets/images";
import { colors } from "./DEFAULTS";

const Notifies = () => {
  return (
    <View style={{}}>
      {notifications.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => alert("Something may happen")}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderColor: "#F0F4F9",
            borderBottomWidth: 1,
            paddingVertical: 16,
            paddingHorizontal: 24,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 54,
                height: 54,
                borderRadius: 54 / 2,
                marginRight: 10,
              }}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: "Regular-Sen",
                    color: colors.primaryTxt,
                    width: 200,
                  }}
                >
                  {item.name} <Text>{item.info}</Text>
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Regular-Sen",
                    marginTop: 10,
                    color: "#9C9BA6",
                  }}
                >
                  {item.time}
                </Text>
              </View>
            </View>
          </View>
          {/* Image preview here */}
          <Image
            source={item.preview}
            style={{ width: 53, height: 54, borderRadius: 10 }}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default memo(Notifies);

const styles = StyleSheet.create({});
