import { TextStyle } from 'react-native';

/**
 * Typography tokens from DESIGN.md
 * Font families reference Google Font names loaded via expo-google-fonts
 */

export const FontFamilies = {
  spaceGrotesk: 'SpaceGrotesk_700Bold',
  spaceGroteskSemiBold: 'SpaceGrotesk_600SemiBold',
  spaceGroteskMedium: 'SpaceGrotesk_500Medium',
  manrope: 'Manrope_400Regular',
  manropeMedium: 'Manrope_500Medium',
  manropeSemiBold: 'Manrope_600SemiBold',
  manropeBold: 'Manrope_700Bold',
  jetbrainsMono: 'JetBrainsMono_500Medium',
  jetbrainsMonoBold: 'JetBrainsMono_700Bold',
} as const;

export const Typography: Record<string, TextStyle> = {
  displayHero: {
    fontFamily: FontFamilies.spaceGrotesk,
    fontSize: 64,
    lineHeight: 68,
    letterSpacing: -0.04 * 64,
  },
  displayHeroMobile: {
    fontFamily: FontFamilies.spaceGrotesk,
    fontSize: 40,
    lineHeight: 44,
    letterSpacing: -0.03 * 40,
  },
  headlineLg: {
    fontFamily: FontFamilies.spaceGroteskSemiBold,
    fontSize: 36,
    lineHeight: 42,
    letterSpacing: -0.03 * 36,
  },
  headlineLgMobile: {
    fontFamily: FontFamilies.spaceGroteskSemiBold,
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: -0.02 * 28,
  },
  headlineMd: {
    fontFamily: FontFamilies.spaceGroteskSemiBold,
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -0.02 * 24,
  },
  headlineSm: {
    fontFamily: FontFamilies.spaceGroteskMedium,
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.01 * 18,
  },
  bodyLg: {
    fontFamily: FontFamilies.manrope,
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: -0.01 * 16,
  },
  bodyMd: {
    fontFamily: FontFamilies.manrope,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0,
  },
  bodySm: {
    fontFamily: FontFamilies.manrope,
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.01 * 12,
  },
  labelMonoLg: {
    fontFamily: FontFamilies.jetbrainsMono,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.02 * 14,
  },
  labelMonoSm: {
    fontFamily: FontFamilies.jetbrainsMono,
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0.04 * 11,
  },
  badgePill: {
    fontFamily: FontFamilies.manropeBold,
    fontSize: 11,
    lineHeight: 12,
    letterSpacing: 0.06 * 11,
  },
} as const;

export const Spacing = {
  gutter: 20,
  gutterLg: 32,
  margin: 24,
  marginLg: 48,
  spaceXs: 6,
  spaceSm: 12,
  spaceMd: 20,
  spaceLg: 32,
  spaceXl: 56,
} as const;

export const Radii = {
  sm: 4,
  default: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;
