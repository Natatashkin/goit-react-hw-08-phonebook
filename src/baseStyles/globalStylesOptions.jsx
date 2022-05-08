const globalStylesOptions = {
  html: {},
  '#root': {},
  body: {
    margin: 0,
    fontFamily: `${({ theme: { typography } }) => typography.fontFamily}`,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    background: `${({ theme: { palette } }) => palette.background.default}`,
    fontSize: `${({ theme: { typography } }) => typography.htmlFontSize}`,
  },
  code: {
    fontFamily: [
      'source-code-pro',
      'Menlo',
      'Monaco',
      'Consolas',
      'Courier New',
      'monospace',
    ].join(','),
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: 0,
  },
  p: {
    margin: 0,
  },
  ul: {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: 0,
    marginBottom: 0,
  },
};
export default globalStylesOptions;
