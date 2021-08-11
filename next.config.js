
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['s7YbPUHt7NVLQFhuifLsV4'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  