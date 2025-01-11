import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    define: {
      "process.env.SANDPACK_CLIENT_VERSION": JSON.stringify("1.0.0"),
    },
  },
  server: { port: 3001 },
});
