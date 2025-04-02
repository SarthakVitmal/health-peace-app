import { View, Text, StyleSheet, Animated, Easing, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';

export default function HomeScreen() {
  const router = useRouter();
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animation sequence
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.elastic(1.2),
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigation timeout
    const timer = setTimeout(() => {
      router.push('./webview');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.logoContainer, { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}
      >
        <Animated.View style={[styles.logoCircle, styles.shadow]}>
          <Image
            source={require('../../assets/images/icon.png')}
            style={{ width: 45, height: 45, borderRadius: 50 }}
          />
        </Animated.View>
        <Text style={styles.logoText}>MindEase</Text>
      </Animated.View>

      <Animated.Text style={[styles.tagline, { opacity: fadeAnim }]}>
        Cultivating Mental Wellness
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoCircle: {
    height: 45,
    width: 45,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  logoText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',
    marginLeft: 16,
    fontFamily: 'Inter_700Bold', 
  },
  tagline: {
    fontSize: 18,
    color: '#000',
    letterSpacing: 1.2,
    marginTop: 8,
    fontFamily: 'sans',
  },
  shadow: {
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});