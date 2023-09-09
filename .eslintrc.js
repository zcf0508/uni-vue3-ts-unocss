module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  overrides: [
    {
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['tsconfig.json'],
      },
      parser: '@typescript-eslint/parser',
      excludedFiles: ['**/*.md/*.*'],
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 1,
      },
    },
  ],
  rules: {
    semi: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        ignoreRegExpLiterals: true,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    'vue/multi-word-component-names': [0],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 3,
      },      
      'multiline': {
        'max': 1,
      },
    }],
    'vue/html-self-closing': [0, {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always',
      },
      'svg': 'always',
      'math': 'always',
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': [],
    }],
  },
  'ignorePatterns': [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'out',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '*.css',
    '*.png',
    '*.ico',
    '*.toml',
    '*.patch',
    '*.txt',
    '*.crt',
    '*.key',
    'Dockerfile',
    '!.github',
    '!.vitepress',
    '!.vscode',
    '.vitepress/cache',
  ],
};
