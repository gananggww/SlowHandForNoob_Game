<template lang="html">
  <div>
    <p>Player: {{nama[0]['.value']}}</p>
    <h3>Your task : {{taskWasit[1]['.value']}}</h3>
    <h2>{{log}}</h2>
    <input v-model="taskPlayer" type="text" name="" value="">
    <button @click="goSubmit()" type="button" name="button">Submit</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      taskPlayer: '',
      log: ''
    }
  },
  firebase () {
    return {
      nama: this.$db.ref('/users/player2'),
      taskWasit: this.$db.ref('/users/wasit')
    }
  },
  methods: {
    goSubmit () {
      if (this.taskWasit[1]['.value'] === this.taskPlayer) {
        console.log(this.taskWasit[1]['.value'])
        this.$db.ref('/users/player2/task').set(this.taskPlayer)
        this.log = 'anda Benar'
      } else {
        this.log = 'masih salah cuk'
      }
    }
  }
}
</script>

<style lang="css">
</style>
