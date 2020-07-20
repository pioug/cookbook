import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-css-only";
import pluginVue from "rollup-plugin-vue";
import replace from "@rollup/plugin-replace";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.js",
  output: {
    dir: "build",
    format: "es",
  },
  plugins: [
    css({ output: "build/bundle.css" }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    alias({
      vue: "vue/dist/vue.runtime.esm-bundler.js",
    }),
    pluginVue({ css: false }),
    nodeResolve(),
    commonjs(),
  ],
  preserveEntrySignatures: false,
};
