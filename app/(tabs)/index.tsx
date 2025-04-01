import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
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
          <Ionicons name="leaf" size={32} color="#4CAF50" />
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
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoCircle: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  logoText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',
    marginLeft: 16,
    fontFamily: 'Inter_700Bold', 
  },
  tagline: {
    fontSize: 16,
    color: '#666',
    letterSpacing: 1.2,
    marginTop: 8,
    fontFamily: 'Inter_400Regular',
  },
  shadow: {
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});