const srcPath = "src";
const destPath = "build";

const config = {
  watch: {
    root: srcPath,
    kit: `${srcPath}/views`,
    kitBEM: `${srcPath}/bem`,
    sass: `${srcPath}/styles`,
    sassBEM: `${srcPath}/bem`,
    js: `${srcPath}/js`,
    jsBEM: `${srcPath}/bem`,
    fonts: `${srcPath}/assets/fonts/**/*`,
    images: `${srcPath}/assets/images/**/*`,
    webp: `${srcPath}/assets/images/**/*`,
    favicon: `${srcPath}/assets/icons/favicon/**/*`,
    icons: `${srcPath}/assets/icons/svg/**/*`,
    video: `${srcPath}/assets/video/**/*`,
    audio: `${srcPath}/assets/audio/**/*`,
  },

  src: {
    root: srcPath,
    kit: `${srcPath}/views`,
    sass: `${srcPath}/styles`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/assets/fonts`,
    images: `${srcPath}/assets/images`,
    favicon: `${srcPath}/assets/favicon`,
    icons: `${srcPath}/assets/icons/svg`,
    video: `${srcPath}/assets/video`,
    audio: `${srcPath}/assets/audio`,
  },

  dest: {
    root: destPath,
    html: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    fonts: `${destPath}/assets/fonts`,
    images: `${destPath}/assets/images`,
    icons: `${destPath}/assets/icons`,
    video: `${destPath}/assets/video`,
    audio: `${destPath}/assets/audio`,
    gzip: `zip`,
  },

  setEnv() {
    this.isProd = process.argv.includes("--prod");
    this.isDev = !this.isProd;
  },
};

export default config;
