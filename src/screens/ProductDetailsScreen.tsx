import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/src/theme';
import type { RootStackParamList } from '@/src/types/navigation';

type ProductDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

export function ProductDetailsScreen({ route }: ProductDetailsScreenProps) {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.imageStage}>
          <Image source={product.image} style={styles.image} contentFit="contain" />
        </View>

        <View style={styles.summary}>
          <Text style={styles.category}>{product.category}</Text>
          <Text style={styles.name}>{product.name}</Text>
          <View style={styles.infoRow}>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <View style={styles.rating}>
              <Ionicons name="star" size={16} color={colors.accent} />
              <Text style={styles.ratingText}>{product.rating.toFixed(1)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        <View style={styles.quantityRow}>
          <Text style={styles.sectionTitle}>Quantity</Text>
          <View style={styles.stepper}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Decrease quantity"
              onPress={() => setQuantity((current) => Math.max(1, current - 1))}
              style={styles.stepButton}>
              <Ionicons name="remove" size={18} color={colors.text} />
            </Pressable>
            <Text style={styles.quantity}>{quantity}</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Increase quantity"
              onPress={() => setQuantity((current) => current + 1)}
              style={styles.stepButton}>
              <Ionicons name="add" size={18} color={colors.text} />
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable accessibilityRole="button" style={styles.cartButton}>
          <Ionicons name="bag-add" size={20} color={colors.card} />
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 124,
  },
  imageStage: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  image: {
    width: '88%',
    height: '88%',
  },
  summary: {
    paddingTop: 20,
    gap: 8,
  },
  category: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  name: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 0,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '800',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: 8,
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  ratingText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  section: {
    marginTop: 24,
    gap: 8,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '800',
  },
  description: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 23,
  },
  quantityRow: {
    marginTop: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.card,
  },
  stepButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    minWidth: 42,
    color: colors.text,
    fontSize: 17,
    fontWeight: '800',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    padding: 20,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  cartButton: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  cartButtonText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '800',
  },
});
