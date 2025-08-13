import { R2Explorer } from "r2-explorer";

// Read all available configurations here: https://r2explorer.com/getting-started/configuration/
export default {
  async fetch(request, env, ctx) {
    return R2Explorer({
      readonly: false,
      cors: true,
      showHiddenFiles: true,
      basicAuth: {
        username: env.BASIC_USERNAME,
        password: env.BASIC_PASSWORD,
      },
    }).fetch(request, env, ctx);
  },
  async email(event, env, ctx) {
    await R2Explorer({
      readonly: false,
      cors: true,
      showHiddenFiles: true,
      basicAuth: {
        username: env.BASIC_USERNAME,
        password: env.BASIC_PASSWORD,
      },
    }).email(event, env, ctx);
  }
};

