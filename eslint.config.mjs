/* eslint-disable */
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import boundaries from 'eslint-plugin-boundaries'
import { dirname } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    plugins: {
      prettier,
      tseslint,
      boundaries,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'boundaries/element-types': [
        'error',
        {
          'default': 'allow',
          'rules': [
            {
              'from': 'shared',
              'disallow': [
                'app',
                'widgets',
                'features',
                'entities'
              ],
              'message': 'import in shared scope from app, widgets, features, entities is forbidden'
            },
            {
              'from': 'entities',
              'disallow': [
                'app',
                'widgets',
                'features',
              ],
              'message': 'import in entities scope from app, widgets, features is forbidden'
            },
            {
              'from': 'features',
              'disallow': [
                'app',
                'widgets',
              ],
              'message': 'import in features scope from app, widgets is forbidden'
            },
            {
              'from': 'widgets',
              'disallow': [
                'app',
              ],
              'message': 'import in widgets scope from app is forbidden'
            },
          ]
        }
      ],
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // common types
            ['^@/types'],
            // Packages. `react` related packages come first.
            ['^react', '^@?\\w'],
            // Internal packages.
            // api
            ['^@?\\/api'],
            // api
            ['^@?\\/utils'],
            // misc
            ['^@?\\/[^(ui|api|utils)]'],
            // UI
            ['^@?\\/ui\\/[^ce]', '^@?\\/ui\\/e', '^@?\\/ui\\/c'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports.
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'classMethod',
          format: ['PascalCase'],
        },
        {
          selector: 'classProperty',
          modifiers: ['public', 'protected'],
          format: ['PascalCase'],
        },
        {
          selector: 'classProperty',
          modifiers: ['private', 'static'],
          format: ['PascalCase'],
        },
        {
          selector: 'classProperty',
          modifiers: ['private'],
          format: ['camelCase'],
          prefix: ['_'],
        },
        {
          selector: 'method',
          format: ['camelCase'],
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'objectLiteralMethod',
          format: ['camelCase', 'UPPER_CASE'],
        },
        {
          selector: 'objectLiteralProperty',
          format: ['camelCase', 'UPPER_CASE'],
        },
        {
          selector: 'typeMethod',
          format: ['camelCase'],
        },
        {
          selector: 'typeParameter',
          format: ['UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'typeProperty',
          format: ['camelCase'],
        },
      ],
      'lines-between-class-members': ['error', 'always'],
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
    },
    settings: {
      'boundaries/elements': [
        {
          'type': 'app',
          'pattern': 'src/app/**'
        },
        {
          'type': 'widgets',
          'pattern': 'src/widgets/**'
        },
        {
          'type': 'features',
          'pattern': 'src/features/**'
        },
        {
          'type': 'entities',
          'pattern': 'src/entities/**'
        },
        {
          'type': 'shared',
          'pattern': 'src/shared/**'
        },
      ],
    }
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
