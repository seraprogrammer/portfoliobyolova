import { defineConfig } from "vite";
import olovaplugin from "olovaplugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [olovaplugin(), tailwindcss()],
});
