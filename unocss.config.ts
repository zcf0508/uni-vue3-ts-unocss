import { defineConfig, presetIcons, presetUno } from "unocss";
import {
  presetApplet,
  presetRemRpx,
  transformerApplet,
} from "unocss-applet"

export default defineConfig({
  presets: [
    presetUno(),
    presetApplet(),
    presetRemRpx(),
    presetIcons({
      // 其他选项
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
      },
    }),
  ],
  transformers: [
    transformerApplet(),
  ],
});
