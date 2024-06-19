import { ThemeConfig } from 'antd'

export const antdTheme: ThemeConfig = {
  token: {
    screenXSMax: 320,
    screenXS: 260,
    screenXSMin: 240
  },
  components: {
    Layout: {
      headerHeight: 48,
    },
  },
}