import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    restaurants:[
      {
        name: 'bunduKhan',
        pic: '',
        location: { lat: 12, lng: 12 },
        deals: [
          {
            name: 'super',
            type: 'fastfood/desi',
            description: 'very economical deal',
            pic: '',
            price: '222',
            discount: '10%'   // discount will be in percentage
          }
        ]
      },
      {
        name: 'salt & paper',
        pic: '',
        location: { lat: 12, lng: 12 },
        deals: [
          {
            name: 'super',
            type: 'fastfood/desi',
            description: 'very economical deal',
            pic: '',
            price: '222',
            discount: '10%'   // discount will be in percentage
          }
        ]
      },
      {
        name: 'junoon',
        pic: '',
        location: { lat: 12, lng: 12 },
        deals: [
          {
            name: 'super',
            type: 'fastfood/desi',
            description: 'very economical deal',
            pic: '',
            price: '222',
            discount: '10%'   // discount will be in percentage
          }
        ]
      }
    ],
    currentRes:[
      {
        name: 'bunduKhan',
        pic: '',
        location: { lat: 12, lng: 12 },
        deals: [
          {
            name: 'super',
            type: 'fastfood/desi',
            description: 'very economical deal',
            pic: '',
            price: '222',
            discount: '10%'   // discount will be in percentage
          }
        ]
      },
      {
        name: 'salt & paper',
        pic: '',
        location: { lat: 12, lng: 12 },
        deals: [
          {
            name: 'super',
            type: 'fastfood/desi',
            description: 'very economical deal',
            pic: '',
            price: '222',
            discount: '10%'   // discount will be in percentage
          }
        ]
      },
      {
        name: 'junoon',
        pic: '',
        location: { lat: 12, lng: 12 },
        deals: [
          {
            name: 'super',
            type: 'fastfood/desi',
            description: 'very economical deal',
            pic: '',
            price: '222',
            discount: '10%'   // discount will be in percentage
          }
        ]
      }
    ],
    // currentRes:[
    //   { text: 'one' },
    //   { text: 'two' },
    //   { text: 'three' },
    // ]
  },
  mutations:{

    "UPDATE_RESTAURANT_LIST": (state,index) => {
      let obj = state.currentRes[index]
      state.currentRes.splice(index,1)
      state.currentRes.push(obj)
      Vue.set(state,'currentRes',state.currentRes)
      console.log("mutation ...",state.currentRes)
    }

  },
  actions:{

    updateRestaurantList ({commit},data) {
      commit('UPDATE_RESTAURANT_LIST',data)
    }

  }
})