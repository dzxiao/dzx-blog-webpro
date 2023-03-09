/**
   * @type import('naive-ui').GlobalThemeOverrides
   */
export const lightThemeOverrides = {
  LoadingBar: {
    // colorLoading: "#57c3c2FF",
    peers: {
      height: "10px"
    }
  },
  common: {
    bodyColor: '#fffefaFF'
  },
  Layout: {
    "headerColor": "#fffefaFF",
    "headerColorInverted": "rgb(0, 20, 40)",
    "headerBorderColor": "#F4F4F2FF",
    "siderBorderColor": "rgb(239, 239, 245)",
    "siderColor": "#fffefaFF",
    "siderToggleButtonColor": "#fffefaFF",
    "siderToggleBarColor": "rgba(191, 191, 191, 1)"
  },
}

export const darkThemeOverrides = {
  common: {
    bodyColor: '#131124FF'
  },
  "Layout": {
    "headerColor": "#131124FF",
    "siderColor": "#131124FF"
  },
  "LoadingBar": {
    "colorLoading": "#eef7f2FF",
    "height": "3px"
  }
}