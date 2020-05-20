<template>
  <div class="container">
    <button @click="goBack">back</button>
  </div>
  
</template>

<script>
import '../assets/main.css'
export default {
  name: 'RestaurantsDesc',
  data () {
    return {
      restaurant : 
      [
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
        }
      ],

    }
  },

  methods:{

    goBack () {
      this.$router.push('/restaurants')
    }
  }

}
</script>

<style>

</style>