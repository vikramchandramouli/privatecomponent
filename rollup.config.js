import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
// import postcss from "rollup-plugin-postcss";
import scss from "rollup-plugin-scss";
export default {
  input: "src/index.js",
  output:{
    dir: 'dist',
    sourcemap: true,
    file: pkg.module,
    format: 'es'
},
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    scss(),
    resolve(),
    commonjs(),
    terser(),
  ],
  external: Object.keys(pkg.peerDependencies),
};
