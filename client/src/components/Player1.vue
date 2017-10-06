<template lang="html">
  <div>
    <p>Player: {{nama[0]['.value']}}</p>
    <h3>Your task : {{taskWasit[2]['.value']}}</h3>
    <h1>{{log}}</h1>
    <input v-model="taskPlayer" type="text" name="" value="">
    <button @click="goSubmit(taskPlayer)" type="button" name="button">Submit</button>
  </div>

</template>

<script>
export default {
  data () {
    return {
      taskPlayer: '',
      token: localStorage.getItem('token'),
      log: ''
    }
  },
  firebase () {
    return {
      nama: this.$db.ref('/users/player1'),
      nama2: this.$db.ref('/users/player2'),
      taskWasit: this.$db.ref('/users/wasit')
    }
  },
  methods: {
    goSubmit () {
      if (this.taskWasit[0]['.value'] < 30 || this.taskWasit[2]['.value'] === this.taskPlayer) {
        console.log(this.taskWasit[1]['.value'])
        this.$db.ref('/users/player1/task').set(this.taskPlayer)
        this.log = 'anda Benar'
        this.$db.ref('/users/player1/status').set(this.taskWasit[0]['.value'])
      } else {
        this.log = 'masih salah'
        this.$db.ref('/users/player1/status').set('Slow hand')
      }
    }
  }
}
</script>

<style lang="css">
</style>
