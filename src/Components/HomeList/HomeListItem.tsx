import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

type HomeListItemProps={
  post:any;
} 

export default function HomeListItem({post}:HomeListItemProps) {
  return (
    <View className="bg-white">
      {/* Header Post */}
      <View className="p-3 flex-row items-center gap-2">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      <View>
        <Image
          source={{ uri: post.image_url }}
          className="w-full aspect-[4/3]"
        />
      </View>
      <Text className="p-1 m-1 text-justify">{post.caption}</Text>
      {/* Footer Post - Icons */}
      <View className="flex-row gap-3 p-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />
        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>
    </View>
  );
}