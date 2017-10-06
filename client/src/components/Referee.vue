<template lang="html">
  <div class="">
    <button type="button" @click="getRandomWord()">Get Random Word</button>
    <p>{{ randomWord }}</p>
    <h1>The Winner is {{ win[3]['.value']}}</h1>
    <button @click="getStart()" type="button">Mulai</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      randomWord: '',
      words: [
        'zainal jkbghgjhgjk',
        'anak',
        'sholeh',
        'teja',
        'ganteng',
        'banget'
      ],
      winner: ''
    }
  },
  firebase () {
    return {
      statusP1: this.$db.ref('/users/player1/'),
      statusP2: this.$db.ref('/users/player2/'),
      win: this.$db.ref('/users/wasit')
    }
  },
  methods: {
    getRandomWord: function () {
      var randomIndex = Math.floor(Math.random() * this.words.length)
      this.randomWord = this.words[randomIndex]
    },
    getStart () {
      setInterval(() => {
        this.insertTask()
      }, 1000)
    },
    insertTask () {
      if (this.count <= 29) {
        this.$db.ref('/users/wasit/count').set(this.count += 1)
      }
      this.$db.ref('/users/wasit/task').set(this.randomWord)
    },
    counting () {
      if (this.statusP1[2]['.value'] < this.statusP2[2]['.value']) {
        this.winner = 'P1'
        this.$db.ref('/users/wasit/winner').set(this.winner)
      } else {
        this.winner = 'P2'
        this.$db.ref('/users/wasit/winner').set(this.winner)
      }
    }
  },
  computed: {
    thewinner () {
      this.counting()
    }
  }
}
</script>

<style lang="css">
</style>
