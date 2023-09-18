// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/Utilisateur/projets/plume2.0/front/node_modules/vite/dist/node/index.js";
import sassPlugin from "file:///mnt/c/Users/Utilisateur/projets/plume2.0/front/node_modules/vite-plugin-sass/index.js";
import vitePluginReact from "file:///mnt/c/Users/Utilisateur/projets/plume2.0/front/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    sassPlugin(),
    vitePluginReact()
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvVXRpbGlzYXRldXIvcHJvamV0cy9wbHVtZTIuMC9mcm9udFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL1V0aWxpc2F0ZXVyL3Byb2pldHMvcGx1bWUyLjAvZnJvbnQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL1V0aWxpc2F0ZXVyL3Byb2pldHMvcGx1bWUyLjAvZnJvbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBzYXNzUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLXNhc3MnO1xuaW1wb3J0IHZpdGVQbHVnaW5SZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgIFxuICAgIHNhc3NQbHVnaW4oKSxcbiAgICB2aXRlUGx1Z2luUmVhY3QoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAkbm9kZTogJy4vbm9kZV9tb2R1bGVzJyxcbiAgICB9LFxuICAgIGV4dGVuc2lvbnM6IFsnLmpzJywgJy5qc3gnLCAnLnRzJywgJy50c3gnXSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogNTE3MyxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVCxTQUFTLG9CQUFvQjtBQUM1VixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLHFCQUFxQjtBQUU1QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFFUCxXQUFXO0FBQUEsSUFDWCxnQkFBZ0I7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLFlBQVksQ0FBQyxPQUFPLFFBQVEsT0FBTyxNQUFNO0FBQUEsRUFDM0M7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
