import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { ProductCard } from '@/src/components/ProductCard';
import { products } from '@/src/data/products';
import { colors } from '@/src/theme';
import type { RootStackParamList } from '@/src/types/navigation';

type HomeNavigation = NativeStackNavigationProp<RootStackParamList>;

const categories = ['All', 'Shoes', 'Fashion', 'Audio', 'Beauty'];

export function HomeScreen() {
  const navigation = useNavigation<HomeNavigation>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.topRow}>
              <View>
                <Text style={styles.kicker}>ShopEase</Text>
                <Text style={styles.title}>Find your daily style</Text>
              </View>
              <View style={styles.iconButton}>
                <Ionicons name="notifications-outline" size={20} color={colors.text} />
              </View>
            </View>

            <View style={styles.searchBar}>
              <Ionicons name="search-outline" size={18} color={colors.muted} />
              <Text style={styles.searchText}>Search products</Text>
              <Ionicons name="options-outline" size={18} color={colors.text} />
            </View>

            <View style={styles.categoryRow}>
              {categories.map((category, index) => (
                <View
                  key={category}
                  style={[styles.categoryChip, index === 0 && styles.activeCategoryChip]}>
                  <Text style={[styles.categoryText, index === 0 && styles.activeCategoryText]}>
                    {category}
                  </Text>
                </View>
              ))}
            </View>

            <View style={styles.sectionRow}>
              <Text style={styles.sectionTitle}>Popular Products</Text>
              <Text style={styles.sectionAction}>See all</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <ProductCard
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 18,
    paddingBottom: 24,
  },
  header: {
    paddingTop: 14,
    paddingBottom: 18,
    gap: 18,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 16,
  },
  kicker: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  title: {
    marginTop: 6,
    color: colors.text,
    fontSize: 27,
    fontWeight: '800',
    letterSpacing: 0,
  },
  iconButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.card,
  },
  searchBar: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 8,
    backgroundColor: colors.card,
    paddingHorizontal: 14,
  },
  searchText: {
    flex: 1,
    color: colors.muted,
    fontSize: 14,
    fontWeight: '600',
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryChip: {
    height: 34,
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
    paddingHorizontal: 14,
  },
  activeCategoryChip: {
    borderColor: colors.text,
  },
  categoryText: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '700',
  },
  activeCategoryText: {
    color: colors.text,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  sectionAction: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '700',
  },
  productRow: {
    justifyContent: 'space-between',
    marginBottom: 22,
  },
});
