<template>
  <div class="container">
    <div class="sub-container">
      <div class="menu-container">
        <!-- <img src="../assets/imgaes/pic.png" style="width:50px, height:50px"/> -->
      </div>
      <div class="content-container"></div>
    </div>
    <div >
      <section class="containerr">
        <div class="fixed fixed--center" style="z-index: 3">
          <Vue2InteractDraggable
            v-if="isVisible"
            :interact-out-of-sight-x-coordinate="500"
            :interact-max-rotation="15"
            :interact-x-threshold="200"
            :interact-y-threshold="200"
            @draggedRight="right"
            @draggedLeft="left"
            class="">
            <div class="rounded-borders card">
              <div class="res-card rounded-borders card">
                <div class="res-img rounded-borders">
                  <h1>{{current && current.name}}</h1>
                  <!-- <img src="../assets/imgaes/pic.png" style="width:50px, height:50px"/> -->
                </div>
              </div>
            </div>
          </Vue2InteractDraggable>
        </div>
        <!-- <div
          v-if="next"
          class="rounded-borders card card--two fixed fixed--center"
          style="z-index: 2">
          <div class="flex flex--center" style="height: 100%">
            <h1>{{next.text}}</h1>
          </div>
        </div>
        <div
          v-if="index + 2 < cards.length"
          class="rounded-borders card card--three fixed fixed--center"
          style="z-index: 1">
          <div class="flex flex--center" style="height: 100%">
            <h1>test</h1>
          </div>
        </div> -->
      </section>
    </div>
  </div>
</template>

<script>
import { Vue2InteractDraggable } from 'vue2-interact'
import {mapState} from 'vuex';
import {mapActions} from 'vuex';

export default {
  components: { Vue2InteractDraggable },
  data() {
    return {
      isVisible: true,
      index: 0,
      cards: []
    }
  },
  mounted () {
    this.cards = [...this.currentRes]
    //console.log("mounted.....")
  },
  computed: {
    ...mapState([
      'restaurants',
      'currentRes'
    ]),
    current() {
      // return this.restaurants[this.index]
      return this.cards[this.index]
    },
    next() {
      // return this.restaurants[this.index + 1]
      return this.cards[this.index + 1]
    }
  },
  methods: {

    ...mapActions([
      'updateRestaurantList'
    ]),

    right() {
      setTimeout(() => this.isVisible = false)
      this.$router.push('/restaurantDescription')
      console.log("index of res is :",this.index)
      this.updateRestaurantList(this.index)
      },

    left () {
      console.log("index of left is :",this.index)
      this.updateRestaurantList(this.index)
      setTimeout(() => this.isVisible = false)
      setTimeout(() => {
        //this.index++
        this.isVisible = true
      },200)
    }
  },
  watch:{
    currentRes (){
      this.cards = [...this.currentRes]
    }
  }

}
</script>

<style lang="scss" scoped>
.sub-container{
  height: 100%;
  width: 100%;
  background-color: green;
  display: flex;
  flex-direction: column;
  position: relative;
}
.menu-container{
  height: 200px;
  width: 100%;
  background-color: gray;
}
.content-container{
  height: 432px;
  width: 100%;
  background-color: green;
}
// .card{
//   position: absolute;
//   top: 100px;
//   left: 55px;
//   height: 400px;
//   background-color: pink;
//   border-radius: 10px;
// }
.containerr {
  background: #eceff1;
  width: 100%;
  height: 100vh;
}

.flex {
  display: flex;
  &--center {
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
}

.fixed {
  position: fixed;
  &--center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.rounded-borders {
  border-radius: 12px;
}
.card {
  width: 300px;
  height: 400px;
  color: black;
  &--one {
    background-color: pink;
  }
  &--two {
    background-color: red;
    width: 280px;
    top: 51%;
  }
  &--three {
    background-color: orange;
    width: 260px;
    top: 51.8%;
  }
}
.res-card{
  background-color: blue;
  height: 100%;
  width: 100%;
}
.res-img{
  height: 180px;
  background-color: yellow;
}
</style>