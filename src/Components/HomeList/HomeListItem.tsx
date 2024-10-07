import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { HomeStyle } from "../../styleSheets/HomeStyle";


import { cld } from "../../lib/cloudinary";
import { AdvancedImage } from "cloudinary-react-native";
// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

type HomeListItemProps = {
  post: any;
};
export default function HomeListItem({ post }: HomeListItemProps) {
  
  const { width } = useWindowDimensions();
  // cld.image returns a CloudinaryImage with the configuration set.
  const image = cld.image(post.image);
  // Apply the transformation.
  image.resize(thumbnail().width(width).height(width)); // Crop the image, focusing on the face.


  const avatar = cld.image(post.user.avatar_url);
  avatar.resize(thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face()))); 



  return (
    <View style={HomeStyle.container}>
      {/* Header Post */}
      <View style={HomeStyle.header}>
        <Image style={HomeStyle.avatar} source={require("../../images/logo.jpeg")} />
        <Text style={HomeStyle.title}>{post.user.username}</Text>
      </View>

      <View style={HomeStyle.imageContainer}>

         <AdvancedImage cldImg={image} style={HomeStyle.postImage} /> 

        {/* <Image style={HomeStyle.postImage} source={{ uri: post.image_url }} /> */}
      </View>

      {/* Caption */}
      <Text style={HomeStyle.description}>{post.caption}</Text>

      {/* Footer Post - Icons */}
      <View style={HomeStyle.footer}>
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />
        <Feather name="bookmark" size={20} style={{ marginLeft: "75%" }} />
      </View>
    </View>
  );
}
