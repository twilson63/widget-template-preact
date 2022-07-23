import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default {
  input: 'src/main.tsx',
  output: {
    format: 'esm', 
    file: 'dist/widget.js'
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true, tsconfig: './tsconfig.json' })
  ]
}