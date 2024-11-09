import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Redirect, Stack, router } from "expo-router";
import { Link } from "expo-router";
import { colors } from "../constants/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function index() {
  const queryClient = new QueryClient();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Redirect href="./auth/signin/Email" />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
