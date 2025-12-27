import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        react(),
        dts({
            entryRoot: "src",
            tsconfigPath: resolve(__dirname, "tsconfig.json"),
        }),
    ],
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, "src/index.ts"),
                auto: resolve(__dirname, "src/auto.ts"),
            },
            name: "TriaUI",
            formats: ["es"],
            fileName: (format, entryName) => `${entryName}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === "style.css") return "styles/style.css";
                    return "assets/[name]-[hash][extname]";
                },
            },
        },
        cssCodeSplit: true,
        sourcemap: true,
    },
});
