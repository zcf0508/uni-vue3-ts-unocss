import * as path from 'path';
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import Unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { UniUseAutoImports } from '@uni-helper/uni-use';
import Components from 'unplugin-vue-components/vite';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const plugins = [
    viteCommonjs(),
    AutoImport({
      /* options */
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
      imports: [
        'vue',
        '@vueuse/core',
        UniUseAutoImports,
        // 小程序特有的生命周期等从这里引入
        { '@dcloudio/uni-app': ['onLaunch', 'onShow', 'onHide'] },
      ],
      dirs: ['src/hooks', 'src/store', 'src/utils', 'src/api'],
      dts: 'src/auto-import.d.ts',
    }),
    Components({
      /* options */
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      dts: 'src/components.d.ts',
      resolvers: [],
    }),
    uni(),
    Unocss(),
  ];

  return {
    plugins,
    build: {
      target: 'es6',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      include: ['tests/unit/*.spec.ts'],
      globals: true,
    },
  };
});
