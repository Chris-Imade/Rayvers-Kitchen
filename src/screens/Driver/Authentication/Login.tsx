import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TextInput,
    Pressable,
    Linking,
  } from "react-native";
  import React, { useState } from "react";
  import { images } from "../../../../assets/images";
  import {
    BASE_URL,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    colors,
  } from "../../../components/DEFAULTS";
  import { icons } from "../../../../assets/icons";
  import { useNavigation } from "@react-navigation/native";
  import { useDispatch, useSelector } from "react-redux";
  import { setAccessToken } from "../../../Redux/Splice/AppSplice";
  import { Button, TextInputs } from "../../../components";
  import { Spinner } from "native-base";
  import { RootState } from "../../../Redux/store";
  
  const Login = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any | null>(null);
    const [driverId, setDriverId] = useState<string>("");
  
    // Redux's State
    const password = useSelector((state: RootState) => state.data.password);
  
    console.log("Password: ", password, "DriverId: ", driverId);
  
    const dispatch = useDispatch();
  
    const navigation = useNavigation();
  
    const handleLogin = async () => {
      dispatch(setAccessToken("2d152388c1442aafc349ba6e25d41da2d517905d"));
      // setLoading(true);
      // try {
      //   const response = await fetch(`${BASE_URL}auth/restaurants/token/`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       kitchenId,
      //       password,
      //     }),
      //   });
  
      //   if (response.ok) {
      //     setLoading(false);
      //     setError(null);
      //     try {
      //       const result = await response.json();
      //       if (result.status === 200 && result.token) {
      //         const { token } = result;
      //         console.log("result: ", result);
      //         dispatch(setAccessToken(token));
      //       }
      //     } catch (error: any) {
      //       console.log(`Error: ${error.message}`);
      //     }
      //   } else {
      //     setLoading(false);
      //     const result = response.json();
      //     console.log(`Error: ${result}`);
      //     setError(`Error: Something went wrong ☹️`);
      //   }
      // } catch (error: any) {
      //   setLoading(false);
      //   console.log(`Error: ${error.message}`);
      //   setError(`Error: ${error.message}`)
      // }
    };
  
    return (
      <SafeAreaView
        style={{
          flex: 1,
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT,
          backgroundColor: colors.white,
        }}
      >
        <ScrollView>
          {/* Chef Login Header  */}
          <ImageBackground
            source={images.topArea}
            style={{
              width: SCREEN_WIDTH,
              height: 247.53,
              paddingHorizontal: 24,
              paddingTop: 24,
            }}
            resizeMode="cover"
          >
            <Pressable
              onPress={() => navigation.canGoBack() && navigation.goBack()}
              style={{ width: "100%", alignItems: "flex-start" }}
            >
              <Image source={icons.back} style={{ width: 45, height: 45 }} />
            </Pressable>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: "SemiBold-Sen",
                  color: colors.white,
                  textAlign: "center",
                  marginTop: 23,
                }}
              >
                Login as Driver
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Regular-Sen",
                  color: "#FFF2E0",
                  textAlign: "center",
                  marginTop: 14,
                }}
              >
                Please sign in to your approved account
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Regular-Sen",
                  color: "#412623",
                  textAlign: "center",
                  marginTop: 5,
                  width: "70%",
                }}
              >
                Make sure to keep login details save and secure.
              </Text>
            </View>
          </ImageBackground>
  
          {/* Main Content */}
          <View
            style={{
              backgroundColor: colors.white,
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT - 500,
              borderTopEndRadius: 24,
              borderTopStartRadius: 24,
              marginTop: -20,
              padding: 24,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: "Regular-Sen",
                  color: "#32343E",
                  textTransform: "uppercase",
                }}
              >
                Driver ID
              </Text>
  
              <TextInput
                style={{
                  backgroundColor: "#F0F5FA",
                  height: 62,
                  width: "100%",
                  borderRadius: 10,
                  marginTop: 8,
                  paddingLeft: 19,
                }}
                placeholder="24Gfyj578£5&@"
                placeholderTextColor={colors.primaryTxt}
                onChangeText={(text) => setDriverId(text)}
              />
            </View>
            <View style={{ marginTop: 20.5 }}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInputs type="password" />
            </View>
  
            {/* Login Buttton */}
            <View style={{ marginTop: 53 }}>
              <Button loading={loading} onPress={handleLogin} type="login" />
              {error && (
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Regular-Sen",
                    color: "red",
                    marginTop: 5,
                    textAlign: "center",
                  }}
                >
                  {error}
                </Text>
              )}
            </View>
  
            <View style={{ marginTop: 12 }}>
              <Text
                style={{
                  fontFamily: "Regular-Sen",
                  fontSize: 14,
                  color: colors.abstractTxt,
                }}
              >
                Don't have an approved account?{" "}
                <Text
                  onPress={async () =>
                    (await Linking.canOpenURL("https:www.googl.com")) &&
                    (await Linking.openURL("https:wwww.google.com"))
                  }
                  style={{ color: "#3BB726" }}
                >
                  Get One.
                </Text>
              </Text>
            </View>
          </View>
          {loading && (
            <View
              style={{
                position: "absolute",
                top: "35%",
                bottom: "65%",
                left: "40%",
                right: "70%",
                width: 100,
                height: 100,
                backgroundColor: "#121223",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 12,
              }}
            >
              <Spinner color={colors.white} size="lg" />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    inputLabel: {
      color: colors.primaryTxt,
      fontSize: 13,
      fontFamily: "Regular-Sen",
      fontWeight: "400",
      fontStyle: "normal",
      textTransform: "uppercase",
      marginBottom: 11.5,
    },
  });
  