// const config = require("../config");
import config from "./config.js";

// Rest of your configuration code
const nextConfig = {
  DB_URI: config.DB_URI,
};

// Export the configuration object
export default nextConfig;
