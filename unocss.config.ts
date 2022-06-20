import { defineConfig, presetUno, presetIcons, PreflightContext, entriesToCss } from "unocss";
import { unocssToUniProcess } from "vite-plugin-unocss-to-uni";

export default defineConfig({
  presets: [
    {
      ...presetUno(),
      preflights: [
        {
          layer: "preflights",
          getCSS(ctx: PreflightContext<any>) {
            if (ctx.theme.preflightBase)
              return `page,::before,::after{${entriesToCss(Object.entries(ctx.theme.preflightBase))}}`;
          },
        },
      ],
    },
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
