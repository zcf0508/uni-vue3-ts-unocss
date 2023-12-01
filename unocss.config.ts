import { defineConfig, presetIcons } from 'unocss';
import { presetUni } from '@uni-helper/unocss-preset-uni';

export default defineConfig({
  presets: [
    presetUni(),
    presetIcons({
      // 其他选项
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
});
