import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { products } from '@/src/data/products';
import { colors } from '@/src/theme';

const cartItems = [
  { product: products[0], quantity: 1 },
  { product: products[3], quantity: 2 },
];

const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
const delivery = 4.99;

export function CartScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.kicker}>Cart</Text>
          <Text style={styles.title}>Your bag</Text>
          <Text style={styles.copy}>Review your selected items before checkout.</Text>
        </View>

        <View style={styles.itemList}>
          {cartItems.map(({ product, quantity }) => (
            <View key={product.id} style={styles.cartItem}>
              <View style={styles.imageWrap}>
                <Image source={product.image} style={styles.image} contentFit="contain" />
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.itemName} numberOfLines={2}>
                  {product.name}
                </Text>
                <Text style={styles.itemMeta}>Qty: {quantity}</Text>
                <Text style={styles.itemPrice}>${(product.price * quantity).toFixed(2)}</Text>
              </View>
              <Ionicons name="close-outline" size={22} color={colors.muted} />
            </View>
          ))}
        </View>

        <View style={styles.summary}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery</Text>
            <Text style={styles.summaryValue}>${delivery.toFixed(2)}</Text>
          </View>
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${(subtotal + delivery).toFixed(2)}</Text>
          </View>
        </View>

        <Pressable accessibilityRole="button" style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
          <Ionicons name="arrow-forward" size={18} color={colors.card} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 36,
  },
  header: {
    paddingTop: 14,
    paddingBottom: 18,
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
    fontSize: 28,
    fontWeight: '500',
    letterSpacing: 0,
  },
  copy: {
    marginTop: 8,
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  itemList: {
    gap: 14,
  },
  cartItem: {
    minHeight: 96,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 8,
    backgroundColor: colors.card,
    padding: 12,
  },
  imageWrap: {
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  image: {
    width: '86%',
    height: '86%',
  },
  itemInfo: {
    flex: 1,
    gap: 4,
  },
  itemName: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
    lineHeight: 20,
  },
  itemMeta: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '600',
  },
  itemPrice: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  summary: {
    marginTop: 22,
    borderRadius: 8,
    backgroundColor: colors.card,
    padding: 16,
    gap: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: '600',
  },
  summaryValue: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '800',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: colors.line,
    paddingTop: 12,
  },
  totalLabel: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  totalValue: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  checkoutButton: {
    height: 54,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  checkoutText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: '800',
  },
});
