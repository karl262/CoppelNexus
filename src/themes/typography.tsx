export const typography = {
    // Familias de fuente (asegúrate de cargarlas con expo-font en tu entrypoint)
    family: {
      primary:   'CircularStd-Bold',     // para títulos grandes
      primaryMd: 'CircularStd-Medium',   // H2, H3…
      secondary: 'HelveticaNeue-Regular',// cuerpo de texto
      secondaryBd: 'HelveticaNeue-Bold', // action, links…
    },
  
    // Tallas y alturas de línea según Zeroheight (mobile / desktop)
    size: {
      display:   { fontSize: 40, lineHeight: 47 },  // 5xl mobile
      h1:        { fontSize: 32, lineHeight: 40 },  // 4xl
      h2:        { fontSize: 24, lineHeight: 32 },  // 3xl
      h3:        { fontSize: 20, lineHeight: 28 },  // 2xl / Subtitle2
      subtitle1: { fontSize: 18, lineHeight: 28 },  // lg / Subtitle1
      body:      { fontSize: 16, lineHeight: 24 },  // base / Body
      bodySm:    { fontSize: 14, lineHeight: 22 },  // body small
      caption:   { fontSize: 12, lineHeight: 16 },  // Caption
      captionSm: { fontSize: 10, lineHeight: 12 },  // Caption small
    },
  
    // Pesos
    weight: {
      bold:   '700',
      medium: '500',
      regular:'400',
    },
  };
  