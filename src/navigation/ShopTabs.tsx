import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CartScreen } from '@/src/screens/CartScreen';
import { HomeScreen } from '@/src/screens/HomeScreen';
import { ProfileScreen } from '@/src/screens/ProfileScreen';
import { colors } from '@/src/theme';
import type { TabParamList } from '@/src/types/navigation';

const Tab = createBottomTabNavigator<TabParamList>();

export function ShopTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          height: 66,
          paddingBottom: 10,
          paddingTop: 8,
          backgroundColor: colors.card,
          borderTopColor: colors.line,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
        },
        tabBarIcon: ({ color, size, focused }) => {
          const icons = {
            Home: focused ? 'home' : 'home-outline',
            Cart: focused ? 'bag' : 'bag-outline',
            Profile: focused ? 'person' : 'person-outline',
          } as const;

          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
