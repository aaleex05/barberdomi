var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  ssgName: "custom",
  nodeVersion: "18",
  devCommand: "node_modules/.bin/astro dev --port {PORT} --hostname 127.0.0.1",
  experimental: {
    ssg: {
      name: "Astro",
      logPatterns: {
        up: ["is ready", "astro"]
      },
      directRoutes: {
        "socket.io": "socket.io"
      },
      passthrough: ["/vite-hmr/**"]
    }
  },
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "C:\\Users\\alexa\\Desktop\\dev\\barberdomi",
      contentDirs: ["src/content/blog"],
      models: [{
        name: "post",
        type: "page",
        urlPath: "/blog/{slug}",
        filePath: "src/content/blog/{slug}.md",
        fields: [
          { name: "title", type: "string", required: true, default: "Post Title" },
          { name: "pubDate", type: "date", required: true },
          { name: "updatedDate", type: "date" },
          { name: "description", type: "string" },
          { name: "heroImage", type: "string" }
        ]
      }],
      assetsConfig: {
        referenceType: "static",
        staticDir: "src/content",
        uploadDir: "_images",
        publicPath: "/src/content/"
      }
    })
  ]
});
//# sourceMappingURL=stackbit.config.GMACAVMG.cjs.map
