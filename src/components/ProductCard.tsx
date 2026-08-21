import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import type { ImageSourcePropType } from 'react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/src/theme';

type ProductCardProps = {
  image: ImageSourcePropType;
  name: string;
  price: number;
  rating: number;
  onPress: () => void;
};

export function ProductCard({ image, name, price, rating, onPress }: ProductCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`View ${name}`}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <Ionicons name="heart-outline" size={18} color={colors.text} style={styles.heartIcon} />
      <Image source={image} style={styles.image} contentFit="contain" />
      <View style={styles.body}>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>
        <View style={styles.metaRow}>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
          <View style={styles.rating}>
            <Ionicons name="star" size={11} color={colors.accent} />
            <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    minHeight: 188,
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: colors.background,
    padding: 10,
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.99 }],
  },
  image: {
    width: '100%',
    height: 102,
    marginTop: 12,
  },
  body: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: 8,
  },
  name: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '800',
    lineHeight: 14,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  price: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  ratingText: {
    color: colors.text,
    fontSize: 10,
    fontWeight: '700',
  },
  heartIcon: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 1,
  },
});
