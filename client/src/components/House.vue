<template lang="html">

<div >
  <div>
    <input v-disabled= "player2[1]['.value']" v-model="player2Model" type="text" name="" value="">
    <button @click="goPlayer2(player2Model)" v-disabled= "player2[1]['.value']" type="button" name="button">Player2</button>
  </div>
  <div>
    <button @click="goWasit()" v-disabled= "wasits[0]['.value']" type="button" name="button">Wasit</button>
  </div>
  <div>
    <input v-disabled= "player1[1]['.value']" v-model="player1Model" type="text" name="" value="">
    <button @click="goPlayer1(player1Model)" v-disabled= "player1[1]['.value']" type="button" name="button">Player1</button>
  </div>
</div>

</template>

<script>

export default {
  data () {
    return {
      player1Model: '',
      player2Model: ''
    }
  },
  firebase () {
    return {
      player2: this.$db.ref('/users/player2'),
      player1: this.$db.ref('/users/player1'),
      wasits: this.$db.ref('/users/wasit')
    }
  },
  methods: {
    goPlayer2 (a) {
      this.$db.ref('/users/player2').set({
        running: true,
        name: a
      })
      localStorage.setItem('token', a)
      this.$router.push('/player2')
    },
    goPlayer1 (a) {
      this.$db.ref('/users/player1').set({
        running: true,
        name: a
      })
      localStorage.setItem('token', a)
      if (localStorage.getItem('token') !== null) {
        this.$router.push('/player1')
      }
    },
    goWasit () {
      this.$db.ref('/users/wasit').set({
        running: true
      })
      this.$router.push('/referee')
    }
  }
}
</script>

<style lang="css">
</style>
