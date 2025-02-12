import { Style } from '../../components/Style';
import { ColorScheme, GreyscaleColors, PaletteColors, ThemeColors } from '../ColorScheme';
import { lightColorScheme } from '../light/LightColorScheme';
import { ClassNames } from './ClassNames';

function createClasses<T extends number | string>(
  createClassName: (v: T, i: number) => string,
  createStyle: (v: T, i: number) => Style,
  values: T[],
): ClassNames {
  let cn: ClassNames = {};
  for (let i = 0; i < values.length; i++) {
    const v = values[i];
    const key = createClassName(v, i);
    const style = createStyle(v, i);
    cn = { ...cn, [key]: style };
  }
  return cn;
}

export const createDefaultClassNames = (scale: number, emSize: number, colorScheme: ColorScheme): ClassNames => {
  const spacer = emSize * scale;
  const fontSizeBase = emSize * scale;
  const sizingPercentageValues = [25, 50, 75, 100];
  const spacingMultiplierValues = [0, 0.25, 0.5, 1, 1.5, 3];
  const headingSizeMultiplierValues = [2.5, 2, 1.75, 1.5, 1.25, 1];
  const positionValues = [0, 50, 100];

  return {
    // === Bg Colors ===
    ...createClasses(
      (v) => `bg-${v}`,
      (v) => ({ backgroundColor: colorScheme.colors[v] }),
      Object.keys(colorScheme.colors) as (keyof PaletteColors)[],
    ),
    ...createClasses(
      (v) => `bg-${v}`,
      (v) => ({ backgroundColor: colorScheme.theme[v] }),
      Object.keys(colorScheme.theme) as (keyof ThemeColors)[],
    ),
    ...createClasses(
      (v) => `bg-${v}`,
      (v) => ({ backgroundColor: colorScheme.greyscale[v] }),
      Object.keys(colorScheme.greyscale) as (keyof GreyscaleColors)[],
    ),
    'bg-transparent': { backgroundColor: '#00000000' },

    // === Display ===
    ...createClasses(
      (v) => `d-${v}`,
      (v) => ({ display: v }),
      ['flex', 'none'],
    ),

    // === Flex ===
    ...createClasses(
      (v) => `flex-${v}`,
      (v) => ({ flexDirection: v }),
      ['column', 'row', 'column-reverse', 'row-reverse'],
    ),
    ...createClasses(
      (v) => `justify-content-${v.replace('flex-', '').replace('space-', '')}`,
      (v) => ({ justifyContent: v }),
      ['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'space-evenly'],
    ),
    ...createClasses(
      (v) => `align-items-${v.replace('flex-', '')}`,
      (v) => ({ alignItems: v }),
      ['baseline', 'center', 'flex-end', 'flex-start', 'stretch'],
    ),
    ...createClasses(
      (v) => `align-self-${v.replace('flex-', '')}`,
      (v) => ({ alignSelf: v }),
      ['baseline', 'center', 'flex-end', 'flex-start', 'stretch', 'auto'],
    ),
    ...createClasses(
      (v) => `flex-grow-${v}`,
      (v) => ({ flexGrow: v }),
      [0, 1],
    ),
    ...createClasses(
      (v) => `flex-shrink-${v}`,
      (v) => ({ flexShrink: v }),
      [0, 1],
    ),
    ...createClasses(
      (v) => `flex-${v}`,
      (v) => ({ flexWrap: v }),
      ['nowrap', 'wrap', 'wrap-reverse'],
    ),
    ...createClasses(
      (v) => `align-content-${v.replace('flex-', '').replace('space-', '')}`,
      (v) => ({ alignContent: v }),
      ['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'space-evenly', 'stretch'],
    ),

    // === Object fit ===
    ...createClasses(
      (v) => `object-fit-${v.replace('-down', '')}`,
      (v) => ({ objectFit: v }),
      ['contain', 'cover', 'fill', 'scale-down', 'none'],
    ),

    // === Opacity ===
    ...createClasses(
      (v) => `opacity-${v}`,
      (v) => ({ opacity: v / 100 }),
      [0, 25, 50, 75, 100],
    ),

    // === Overflow ===
    'overflow-hidden': { overflow: 'hidden' },

    // === Position ===
    ...createClasses(
      (v) => `position-${v}`,
      (v) => ({ position: v }),
      ['absolute', 'relative', 'static'],
    ),
    ...createClasses(
      (v) => `top-${v}`,
      (v) => ({ top: `${v}%` }),
      positionValues,
    ),
    ...createClasses(
      (v) => `end-${v}`,
      (v) => ({ right: `${v}%` }),
      positionValues,
    ),
    ...createClasses(
      (v) => `bottom-${v}`,
      (v) => ({ bottom: `${v}%` }),
      positionValues,
    ),
    ...createClasses(
      (v) => `start-${v}`,
      (v) => ({ left: `${v}%` }),
      positionValues,
    ),

    // === Sizing ===
    ...createClasses(
      (v) => `w-${v}`,
      (v) => ({ width: `${v}%` }),
      sizingPercentageValues,
    ),
    'w-auto': { width: 'auto' },
    'mw-100': { maxWidth: '100%' },
    ...createClasses(
      (v) => `h-${v}`,
      (v) => ({ height: `${v}%` }),
      sizingPercentageValues,
    ),
    'h-auto': { height: 'auto' },
    'mh-100': { maxHeight: '100%' },
    'vw-100': { width: '100vw' },
    'min-vw-100': { minWidth: '100vw' },
    'vh-100': { height: '100vh' },
    'min-vh-100': { minHeight: '100vh' },

    // === Spacing ===
    ...createClasses(
      (v, i) => `m-${i}`,
      (v) => ({ margin: spacer * v }),
      spacingMultiplierValues,
    ),
    'm-auto': { margin: 'auto' },
    ...createClasses(
      (v, i) => `mt-${i}`,
      (v) => ({ marginTop: spacer * v }),
      spacingMultiplierValues,
    ),
    'mt-auto': { marginTop: 'auto' },
    ...createClasses(
      (v, i) => `me-${i}`,
      (v) => ({ marginRight: spacer * v }),
      spacingMultiplierValues,
    ),
    'me-auto': { marginRight: 'auto' },
    ...createClasses(
      (v, i) => `mb-${i}`,
      (v) => ({ marginBottom: spacer * v }),
      spacingMultiplierValues,
    ),
    'mb-auto': { marginBottom: 'auto' },
    ...createClasses(
      (v, i) => `ms-${i}`,
      (v) => ({ marginLeft: spacer * v }),
      spacingMultiplierValues,
    ),
    'ms-auto': { marginLeft: 'auto' },
    ...createClasses(
      (v, i) => `mx-${i}`,
      (v) => ({ marginLeft: spacer * v, marginRight: spacer * v }),
      spacingMultiplierValues,
    ),
    'mx-auto': { marginLeft: 'auto', marginRight: 'auto' },
    ...createClasses(
      (v, i) => `my-${i}`,
      (v) => ({ marginTop: spacer * v, marginBottom: spacer * v }),
      spacingMultiplierValues,
    ),
    'my-auto': { marginTop: 'auto', marginBottom: 'auto' },
    ...createClasses(
      (v, i) => `p-${i}`,
      (v) => ({ padding: spacer * v }),
      spacingMultiplierValues,
    ),
    ...createClasses(
      (v, i) => `pt-${i}`,
      (v) => ({ paddingTop: spacer * v }),
      spacingMultiplierValues,
    ),
    ...createClasses(
      (v, i) => `pe-${i}`,
      (v) => ({ paddingRight: spacer * v }),
      spacingMultiplierValues,
    ),
    ...createClasses(
      (v, i) => `pb-${i}`,
      (v) => ({ paddingBottom: spacer * v }),
      spacingMultiplierValues,
    ),
    ...createClasses(
      (v, i) => `ps-${i}`,
      (v) => ({ paddingLeft: spacer * v }),
      spacingMultiplierValues,
    ),
    ...createClasses(
      (v, i) => `px-${i}`,
      (v) => ({ paddingLeft: spacer * v, paddingRight: spacer * v }),
      spacingMultiplierValues,
    ),
    ...createClasses(
      (v, i) => `py-${i}`,
      (v) => ({ paddingTop: spacer * v, paddingBottom: spacer * v }),
      spacingMultiplierValues,
    ),
    ...createClasses(
      (v, i) => `gap-${i}`,
      (v) => ({ gap: spacer * v }),
      spacingMultiplierValues,
    ),
    ...createClasses(
      (v, i) => `row-gap-${i}`,
      (v) => ({ rowGap: spacer * v }),
      spacingMultiplierValues,
    ),
    ...createClasses(
      (v, i) => `column-gap-${i}`,
      (v) => ({ columnGap: spacer * v }),
      spacingMultiplierValues,
    ),

    // === Text ===
    ...createClasses(
      (v, i) => `h${i + 1}`,
      (v) => ({
        fontSize: fontSizeBase * v,
        lineHeight: 1.2,
        fontWeight: 500,
        marginBottom: fontSizeBase * 0.5,
      }),
      headingSizeMultiplierValues,
    ),
    ...createClasses(
      (v, i) => `h${i + 1}-rule`,
      (v) => ({ borderBottomWidth: v * scale }),
      [4, 3.5, 3, 2.5, 2, 1.75],
    ),
    ...createClasses(
      (v, i) => `fs-${i + 1}`,
      (v) => ({ fontSize: fontSizeBase * v }),
      headingSizeMultiplierValues,
    ),
    ...createClasses(
      (v) => `lh-${v}`,
      (v, i) => ({ lineHeight: [1, 1.25, 1.5, 2][i] }),
      [1, 'sm', 'base', 'lg'],
    ),
    ...createClasses(
      (v, i) => `display-${i + 1}`,
      (v) => ({ fontSize: fontSizeBase * v, fontWeight: 300, lineHeight: 1.2 }),
      [5, 4.5, 4, 3.5, 3, 2.5],
    ),
    ...createClasses(
      (v) => `text-${v}`,
      (v) => ({ textAlign: v }),
      ['center', 'justify', 'left', 'right'],
    ),
    ...createClasses(
      (v) => `align-${v}`,
      (v) => ({ verticalAlign: v }),
      ['sub', 'super'],
    ),
    ...createClasses(
      (v) => `text-${v}`,
      (v) => ({ textTransform: v }),
      ['capitalize', 'lowercase', 'uppercase'],
    ),
    small: { fontSize: fontSizeBase * 0.875 },
    ...createClasses(
      (v) => `fw-${v}`,
      (v, i) => ({ fontWeight: (i + 1) * 100 }),
      ['lightest', 'lighter', 'light', 'normal', 'medium', 'semibold', 'bold', 'bolder', 'boldest'],
    ),
    ...createClasses(
      (v) => `fst-${v}`,
      (v) => ({ fontStyle: v }),
      ['italic', 'normal'],
    ),
    ...createClasses(
      (v) => `text-decoration-${v.split(' ').join('-')}`,
      (v) => ({ textDecoration: v }),
      ['line-through', 'none', 'underline', 'underline line-through'],
    ),
    'text-overflow-ellipsis': { textOverflow: 'ellipsis' },

    // === Text Colors ===
    ...createClasses(
      (v) => `text-${v}`,
      (v) => ({ color: colorScheme.colors[v] }),
      Object.keys(colorScheme.colors) as (keyof PaletteColors)[],
    ),
    ...createClasses(
      (v) => `text-${v}`,
      (v) => ({ color: colorScheme.theme[v] }),
      Object.keys(colorScheme.theme) as (keyof ThemeColors)[],
    ),
    ...createClasses(
      (v) => `text-${v}`,
      (v) => ({ color: colorScheme.greyscale[v] }),
      Object.keys(colorScheme.greyscale) as (keyof GreyscaleColors)[],
    ),
    'text-reset': { color: 'inherit' },

    // === Z-Index ===
    ...createClasses(
      (v) => `z-${`${v}`.replace('-', 'n')}`,
      (v) => ({ zIndex: v }),
      [-1, 0, 1, 2, 3],
    ),
  };
};
