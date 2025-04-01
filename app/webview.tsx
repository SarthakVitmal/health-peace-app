import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewScreen = () => {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://health-peace.vercel.app' }} 
        style={{ flex: 1 }} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
