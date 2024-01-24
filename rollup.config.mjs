import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
import url from '@rollup/plugin-url';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';


export default [
  {
    
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
         interop: 'compat',
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        interop: 'compat',
      },
    ],
    plugins: [
      terser(),
      PeerDepsExternalPlugin(),    
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(), 
      url({
        include: [
          '**/fonts/**/*.woff',
          '**/fonts/**/*.woff2',
          '**/fonts/**/*.ttf',
          '**/fonts/**/*.eot',
          '**/fonts/**/*.svg'
        ],
        limit: Infinity
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/,'styled-components','react', 'react-dom',]
  },
];

