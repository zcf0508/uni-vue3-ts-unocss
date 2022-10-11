import { defineConfig, presetIcons } from "unocss";
import {
  presetApplet,
  presetRemToRpx,
  transformerApplet,
} from 'unocss-applet'

export default defineConfig({
  presets: [
    presetApplet(),
    presetRemToRpx(),
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
