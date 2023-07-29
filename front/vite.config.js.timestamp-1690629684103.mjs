// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/Utilisateur/projets/plume2.0/front/node_modules/vite/dist/node/index.js";
import sassPlugin from "file:///mnt/c/Users/Utilisateur/projets/plume2.0/front/node_modules/vite-plugin-sass/index.js";
import react from "file:///mnt/c/Users/Utilisateur/projets/plume2.0/front/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    sassPlugin(),
    react()
  ],
  resolve: {
    alias: {
      $node: "./node_modules"
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  server: {
    port: 5173
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvVXRpbGlzYXRldXIvcHJvamV0cy9wbHVtZTIuMC9mcm9udFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL1V0aWxpc2F0ZXVyL3Byb2pldHMvcGx1bWUyLjAvZnJvbnQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL1V0aWxpc2F0ZXVyL3Byb2pldHMvcGx1bWUyLjAvZnJvbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBzYXNzUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLXNhc3MnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgXG4gICAgc2Fzc1BsdWdpbigpLFxuICAgIHJlYWN0KCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJG5vZGU6ICcuL25vZGVfbW9kdWxlcycsXG4gICAgfSxcbiAgICBleHRlbnNpb25zOiBbJy5qcycsICcuanN4JywgJy50cycsICcudHN4J10sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDUxNzMsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1QsU0FBUyxvQkFBb0I7QUFDNVYsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxXQUFXO0FBRWxCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUVQLFdBQVc7QUFBQSxJQUNYLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsWUFBWSxDQUFDLE9BQU8sUUFBUSxPQUFPLE1BQU07QUFBQSxFQUMzQztBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
