import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

import { EvilIcons, FontAwesome, Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          height: 60,
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome focused={focused} name="home" size={30} color={color} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <EvilIcons focused={focused} name="search" size={32} color={color} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Entypo
              focused={focused}
              name="user"
              size={24}
              color={color}
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
