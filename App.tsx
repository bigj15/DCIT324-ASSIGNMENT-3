import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet } from 'react-native';

import { ProductDetailsScreen } from '@/src/screens/ProductDetailsScreen';
import { ShopTabs } from '@/src/navigation/ShopTabs';
import { appTheme, colors } from '@/src/theme';
import type { RootStackParamList } from '@/src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer theme={appTheme}>
      <StatusBar style="dark" backgroundColor={colors.background} />
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: colors.background },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: colors.background },
          headerTitleStyle: {
            color: colors.text,
            fontSize: 18,
            fontWeight: '700',
          },
          headerTintColor: colors.text,
        }}>
        <Stack.Screen name="ShopTabs" component={ShopTabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={({ navigation }) => ({
            title: 'Product Details',
            headerBackVisible: false,
            headerLeft: () => (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Go back"
                hitSlop={12}
                onPress={navigation.goBack}
                style={styles.backButton}>
                <Ionicons name="arrow-back" size={26} color={colors.text} />
              </Pressable>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -6,
  },
});
