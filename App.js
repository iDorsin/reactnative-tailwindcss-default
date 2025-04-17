import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';
import { View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}
