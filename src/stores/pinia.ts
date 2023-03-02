import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('THEME', {
  state:()=>{
    return {
      THEME_DARK:false,
    }
  },
  getters: {},
  actions: {
    changeTheme(type: string){
      if(type === 'dark') this.THEME_DARK = true;
      if(type === 'light') this.THEME_DARK = false;
    }
  }
})
