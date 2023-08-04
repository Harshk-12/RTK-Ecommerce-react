
//1 absolute path
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// // import path from "path";
// import ConfigPaths from "vite-jsconfig-paths";

// export default defineConfig({
//   plugins: [react(), ConfigPaths()],
// });


//2 Relative path
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
