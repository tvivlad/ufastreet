import { defineStore } from 'pinia'

export const useMapStore = defineStore('map', {
  state: () => {
    return { count: 0,  map:null,  lang:'ru' }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
    changeLang(){
      this.lang=='ru'?this.lang='en':this.lang='ru'
    }

}
})