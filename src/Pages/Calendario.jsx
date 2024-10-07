
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, FlatList, Text, Image, StyleSheet } from 'react-native';
import { db } from '../../firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Feather } from '@expo/vector-icons';

export default function Calendario({ navigation, route }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const postsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (route.params?.newPost) {
      setPosts(currentPosts => [route.params.newPost, ...currentPosts]);
    }
  }, [route.params?.newPost]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    fetchPosts();
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUri }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={() => navigation.navigate('Planejamento', item)}
        >
          <Feather name="edit" size={20} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={() => handleDelete(item.id)}
        >
          <Feather name="trash-2" size={20} color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  list: {
    padding: 8,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  title: {
    paddingHorizontal: 12,
    paddingTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
});