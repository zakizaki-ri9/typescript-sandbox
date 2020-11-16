// see https://github.com/vitejs/vite#config-file
import { UserConfig } from "vite";
import path from "path";
import voie from "vite-plugin-voie";

// https://github.com/vitejs/vite/blob/master/src/node/config.ts
const config: UserConfig = {
  alias: {
    "/~/": path.resolve(__dirname, "src"),
  },
  plugins: [
    voie({
      extensions: ["vue", "js", "ts"],
    }),
  ],
};

export default config;
