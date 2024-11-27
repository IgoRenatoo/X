import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"]
  },
  {
    languageOptions: {
      globals: globals.node
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Adicionando regras personalizadas
    rules: {
      "no-unused-vars": "warn", // Emite um aviso quando variáveis não utilizadas são detectadas
      "quotes": ["error", "single"], // Garante que sejam usadas aspas simples
      "semi": ["error", "always"], // Exige ponto e vírgula no final das instruções
      "no-console": "off", // Permite o uso de console.log
      "eqeqeq": ["error", "always"], // Exige o uso de `===` e `!==`
      "@typescript-eslint/no-explicit-any": "warn", // Garante que o uso de `any` seja apenas um aviso
      "@typescript-eslint/no-unused-vars": "warn", // Emite um aviso para variáveis não utilizadas no código TypeScript
      "@typescript-eslint/strict-boolean-expressions": "off" 
    }
  }
];
