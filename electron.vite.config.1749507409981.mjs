// electron.vite.config.ts
import path, { resolve } from "node:path";
import tsconfigPathsPlugin from "vite-tsconfig-paths";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
var __electron_vite_injected_dirname = "/Users/juan.carlos/Documents/Estudos/electron-app/rotion";
var tsconfigPaths = tsconfigPathsPlugin({
  projects: [path.resolve("tsconfig.json")]
});
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],
    publicDir: path.resolve(__electron_vite_injected_dirname, "resources")
  },
  preload: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()]
  },
  renderer: {
    define: {
      "process.platform": JSON.stringify(process.platform)
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: "./src/renderer/tailwind.config.js"
          })
        ]
      }
    },
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src")
      }
    },
    plugins: [tsconfigPaths, react()]
  }
});
export {
  electron_vite_config_default as default
};
