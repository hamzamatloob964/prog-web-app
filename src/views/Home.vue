<template>
  <div class="container">
    <div class="sub-container">
      <div class="menu">
        <span>Volt Land</span>
      </div>
      <v-btn class="start-btn" @click="openRestaurants">start</v-btn>
    </div>
  </div>
</template>

<script>
import '../assets/main.css'
export default {
  methods:{
    openRestaurants () {
      this.$router.push('/restaurants')
    }
  }

}
</script>

<style scoped>
/* .container{
  height: 120vh;
  width: 100vw;
  background-color: blue;
} */
.sub-container{
  height: 530px;
  width: 100%;
  background-color: gray;
  position: relative;
  align-content: center;
  justify-content: center;
  display: flex;
}
.start-btn{
  height: 90px;
  width: 90px;
  bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: pink;
  border-radius: 50px;
}
.menu{
  height: 50px;
  width: 100%;
  top: 40px;
  background-color: green;
  display: flex;
  align-items: center;
  position: absolute;
}
</style>