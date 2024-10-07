# Clube Poliglota App

Esse é um aplicativo em etapa de desenvolvimento,  para avaliação do módulo de mobile do Curso Técnico de Informatica para Web no Senac Portão, Curitiba.

## Guia de Instalação e Uso  

1. Comece com a instalação do expo 

   ```bash
    npx create-expo-app@latest
   ```
1.1. Navegue  para a pasta do projeto
   ```bash
    cd/PoliglotaApp
   ```
   
## Resete o projeto

execute:

```bash
npm run reset-project
```
Esse comando moverá o código inicial para o diretório **app-example** e criará um diretório **app** em branco no qual você poderá começar a desenvolver.

## Instale as dependências
   ```bash
    npm install   @react-navigation/native  @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/native-stack react-native-screens react-native-safe-area-context

   ```
   e então instale o  react-native-gesture-handler
   ```bash
    npx expo install react-native-gesture-handler react-native-reanimated
   ```
## Após essas instalações Iniciais deve-se apagar algumas pastas a seguir:
Scripts/
Hooks/
Constants/
Componentes/
app-example/

## E então instalar as demais dependências de acordo com as orientações abaixo:

deve se  instalar o NativeWind  seguindo as orientações do site:
https://www.nativewind.dev/v4/getting-started/expo-router

deve se instalar o Expo ImagePicker seguindo as orientações do site:
https://docs.expo.dev/versions/latest/sdk/imagepicker/

deve se instalar o Cloudinary seguindo as orientações do site:
https://cloudinary.com/documentation/react_native_integration

2. Rodar o app

   ```bash
    npx expo start
   ```


## OBS

Voce pode visualizar esse projeto no seu navegador instalando:

   ```bash
    npx expo install react-native-web react-dom @expo/metro-runtime
   ```
e então execute o comando 
   ```bash
    npm run web
   ```   
ou ainda no seu aparelho celular usando o app auxiliar Expo Go e escaneando o QR Code exibido no seu terminal.

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
