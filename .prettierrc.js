module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  trailingComma: 'all',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  printWidth: 148,
  overrides: [
    {
      files: ['*.less', '*.css'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: '*.json',
      options: {
        tabWidth: 2,
      },
    },
  ],
}
