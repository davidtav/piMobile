import { StyleSheet } from "react-native";

export const HomeStyle= StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width:"100%"
      },
      header: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8, // Note que gap não é suportado no React Native, você pode usar margin ou padding para espaçamento.
      },
      avatar: {
        width: 48,
        height: 48,
        borderRadius: 24, // Para o arredondamento
      },
      title: {
        fontWeight: 'bold',
      },
      imageContainer: {
        marginTop: 8        
      },
      postImage: {
        width: '100%',
        aspectRatio: 4 / 3,
        
      },
      description: {
        padding: 4,
        margin: 4,
        textAlign: 'justify',
        fontWeight:'400'
      },
      footer: {
        flexDirection: 'row',
        gap: 12, // Como mencionado, use margens ou padding para o espaçamento.
        padding: 12,
      },
});