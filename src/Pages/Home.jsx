import { View, Text,FlatList } from 'react-native';
import posts from "../data/posts"
import HomeListItem from '../Components/HomeList/HomeListItem';


const post1 = posts[0];

export default function Home() {
  return (
    <FlatList
    data={posts}
    renderItem={({ item }) => <HomeListItem post={item} />}
    contentContainerStyle={{ gap: 10, maxWidth: 600,alignSelf:"center", width: "100%" }}
    showsVerticalScrollIndicator={false}
  />
  )
}

/**
 * ///////////////////////////////////////////////////
 */

