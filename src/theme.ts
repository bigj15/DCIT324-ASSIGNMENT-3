import { DefaultTheme } from '@react-navigation/native';

export const colors = {
  background: '#F7F8FA',
  card: '#FFFFFF',
  primary: '#2F7D63',
  primarySoft: '#E7F3EE',
  accent: '#F6B44B',
  text: '#18211F',
  muted: '#7B8580',
  line: '#E6E9E7',
  danger: '#D95F59',
};

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    card: colors.card,
    primary: colors.primary,
    text: colors.text,
    border: colors.line,
  },
};
