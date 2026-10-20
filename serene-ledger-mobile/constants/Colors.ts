/**
 * Design System Colors — Kinetic Neo-Fintech
 * Based on DESIGN.md specifications
 */
export const Colors = {
  // Canvas & Surface Hierarchy
  surface: '#121316',
  surfaceDim: '#121316',
  surfaceBright: '#38393d',
  surfaceContainerLowest: '#0d0e11',
  surfaceContainerLow: '#1b1b1f',
  surfaceContainer: '#1f1f23',
  surfaceContainerHigh: '#292a2d',
  surfaceContainerHighest: '#343538',

  // Content on surface
  onSurface: '#e3e2e6',
  onSurfaceVariant: '#c4c9ac',
  inverseSurface: '#e3e2e6',
  inverseOnSurface: '#2f3034',

  // Outline
  outline: '#8e9379',
  outlineVariant: '#444933',

  // Surface tint
  surfaceTint: '#abd600',

  // Primary
  primary: '#ffffff',
  onPrimary: '#283500',
  primaryContainer: '#c3f400',
  onPrimaryContainer: '#556d00',
  inversePrimary: '#506600',

  // Primary fixed
  primaryFixed: '#c3f400',
  primaryFixedDim: '#abd600',
  onPrimaryFixed: '#161e00',
  onPrimaryFixedVariant: '#3c4d00',

  // Secondary
  secondary: '#70ffba',
  onSecondary: '#003822',
  secondaryContainer: '#01e599',
  onSecondaryContainer: '#00613e',

  // Secondary fixed
  secondaryFixed: '#4dffb2',
  secondaryFixedDim: '#00e297',
  onSecondaryFixed: '#002112',
  onSecondaryFixedVariant: '#005234',

  // Tertiary
  tertiary: '#ffffff',
  onTertiary: '#1000a9',
  tertiaryContainer: '#e1e0ff',
  onTertiaryContainer: '#4f51dd',

  // Tertiary fixed
  tertiaryFixed: '#e1e0ff',
  tertiaryFixedDim: '#c0c1ff',
  onTertiaryFixed: '#07006c',
  onTertiaryFixedVariant: '#2f2ebe',

  // Error
  error: '#ffb4ab',
  onError: '#690005',
  errorContainer: '#93000a',
  onErrorContainer: '#ffdad6',

  // Background
  background: '#121316',
  onBackground: '#e3e2e6',

  // Surface variant
  surfaceVariant: '#343538',

  // Translucent helpers (used as rgba in styles)
  hairline: 'rgba(255, 255, 255, 0.08)',
  hairlineHover: 'rgba(204, 255, 0, 0.35)',
  surfaceTranslucent03: 'rgba(255, 255, 255, 0.03)',
  surfaceTranslucent06: 'rgba(255, 255, 255, 0.06)',
  surfaceTranslucent08: 'rgba(255, 255, 255, 0.08)',
} as const;
