import { defineConfig, presetUno, presetIcons } from "unocss";
import { unocssToUniProcess } from "vite-plugin-unocss-to-uni";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      // 其他选项
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
      },
    }),
  ],

  postprocess: (t) => {
    t.selector = unocssToUniProcess(t.selector);
    return t;
  },
});
