import { useEffect, useState } from "react";
import { Text, TextInput, View, Image, Pressable } from "react-native";
import Button from "../Components/Button/Button";
import * as ImagePicker from "expo-image-picker";

export default function Posts() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = (useState < string) | (null > null);

  useEffect(() => {
    if (!image) {
      pickImage();
    }
  }, [image]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="p-3 items-center flex-1">
         {/* Image Picker */}
         {image ? (
        <Image
          source={{ uri: image }}
          className="w-52 aspect-[3/4] rounded-lg bg-slate-300"
        />
      ) : (
        <View className="w-52 aspect-[3/4] rounded-lg bg-slate-300" />
      )}
     <Text onPress={pickImage} className="text-blue-500 font-semibold m-5">
        Change
      </Text>

      {/* TextInput for caption */}
      <TextInput
        value={caption}
        onChangeText={(newValue) => setCaption(newValue)}
        placeholder="Whats is on your mind"
        className=" w-full p-3"
      />  
       <View className="mt-auto w-full">
        <Button nome="share"/>
      </View>
    </View>
  );
}
