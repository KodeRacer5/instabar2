import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import security from "eslint-plugin-security";

export default [
  {
    ignores: ["node_modules/**", ".next/**", ".vercel/**"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
      "react": reactPlugin,
      "react-hooks": hooksPlugin,
      "@typescript-eslint": typescriptPlugin,
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
      "security": security,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": ["warn", { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "security/detect-object-injection": "warn",
      "security/detect-unsafe-regex": "error",
      "security/detect-eval-with-expression": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
    },
  },
];
