const config = {
  "$schema": "https://json.schemastore.org/prettierrc",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "es5",
  arrowParens: 'always',
  vueIndentScriptAndStyle: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
}

export default config;