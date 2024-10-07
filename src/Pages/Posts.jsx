

import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert,ScrollView } from "react-native";
import { db } from "../../firebaseConfig";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import * as ImagePicker from "expo-image-picker";
import { Feather } from '@expo/vector-icons';

export default function Posts({ route, navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUri, setImageUri] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (route.params?.id) {
      fetchPost(route.params.id);
    }
  }, [route.params?.id]);

  const fetchPost = async (id) => {
    try {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitle(data.title || "");
        setDescription(data.description || "");
        setImageUri(data.imageUri || null);
      } else {
        Alert.alert("Erro", "Post não encontrado");
        navigation.goBack();
      }
    } catch (error) {
      console.error("Erro ao buscar o post:", error);
      Alert.alert("Erro", "Não foi possível carregar o post");
    }
  };

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (!title.trim() || !imageUri) {
      Alert.alert("Erro", "Por favor, preencha o título e escolha uma imagem.");
      return;
    }

    setIsLoading(true);

    try {
      let postData = { title, description, imageUri, updatedAt: new Date() };

      if (route.params?.id) {
        // Atualizar post existente
        const postRef = doc(db, "posts", route.params.id);
        await updateDoc(postRef, postData);
      } else {
        // Criar novo post
        postData.createdAt = new Date();
        await addDoc(collection(db, "posts"), postData);
      }

      setIsLoading(false);
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao salvar o post:", error);
      setIsLoading(false);
      Alert.alert("Erro", "Ocorreu um erro ao salvar o post. Tente novamente.");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleImagePicker} style={styles.imageContainer}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Feather name="camera" size={40} color="#A0AEC0" />
              <Text style={styles.placeholderText}>Adicionar Imagem</Text>
            </View>
          )}
        </TouchableOpacity>
  
        <View style={styles.inputContainer}>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Título"
            style={styles.input}
          />
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Descrição"
            style={[styles.input, styles.descriptionInput]}
            multiline
          />
        </View>
  
        <TouchableOpacity 
          style={[styles.submitButton, isLoading && styles.disabledButton]} 
          onPress={handleSubmit}
          disabled={isLoading}
        >
          <Text style={styles.submitButtonText}>
            {isLoading ? "Salvando..." : (route.params?.id ? "Atualizar" : "Criar Post")}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    marginTop: 8,
    color: '#718096',
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    fontWeight:"bold"
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#A0AEC0',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});