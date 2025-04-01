import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="webview" options={{ title: "Health Peace" }} />
    </Stack>
  );
}
