import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/src/theme';

const profileLinks = [
  { icon: 'receipt-outline', label: 'My Orders', value: '3 active' },
  { icon: 'heart-outline', label: 'Saved Items', value: '12 items' },
  { icon: 'location-outline', label: 'Shipping Address', value: 'Edit' },
  { icon: 'settings-outline', label: 'Settings', value: 'Manage' },
] as const;

export function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={34} color={colors.primary} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.kicker}>Profile</Text>
            <Text style={styles.name}>ShopEase Guest</Text>
            <Text style={styles.email}>guest@shopease.app</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>2</Text>
            <Text style={styles.statLabel}>Coupons</Text>
          </View>
        </View>

        <View style={styles.linkList}>
          {profileLinks.map((item) => (
            <View key={item.label} style={styles.linkRow}>
              <View style={styles.linkIcon}>
                <Ionicons name={item.icon} size={20} color={colors.text} />
              </View>
              <Text style={styles.linkLabel}>{item.label}</Text>
              <Text style={styles.linkValue}>{item.value}</Text>
              <Ionicons name="chevron-forward" size={18} color={colors.muted} />
            </View>
          ))}
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingTop: 18,
    paddingBottom: 22,
  },
  avatar: {
    width: 76,
    height: 76,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.primarySoft,
  },
  userInfo: {
    flex: 1,
  },
  kicker: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  name: {
    marginTop: 5,
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 0,
  },
  email: {
    marginTop: 4,
    color: colors.muted,
    fontSize: 14,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.card,
    paddingVertical: 16,
  },
  statValue: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '800',
  },
  statLabel: {
    marginTop: 4,
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
  },
  linkList: {
    marginTop: 22,
    gap: 12,
  },
  linkRow: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 8,
    backgroundColor: colors.card,
    paddingHorizontal: 14,
  },
  linkIcon: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  linkLabel: {
    flex: 1,
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  linkValue: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '700',
  },
});
