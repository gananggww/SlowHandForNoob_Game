<template lang="html">
  <div class="">
    <button type="button" @click="getRandomWord()">Get Random Word</button>
    <p>{{ randomWord }}</p>
    <h1>Timer: {{win[0]['.value']}}</h1>
    <h1>The Winner is : {{ win[3]['.value']}}</h1>
    <button @click="getStart()" type="button">Mulai</button>
    <button @click="resetGame()" type="button" name="button">RESET GAME</button>
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
      win: this.$db.ref('/users/wasit'),
      winners: this.$db.ref('/users/wasit/winner')
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
        this.$db.ref('/users/wasit/task').set(this.randomWord)
      }
    },
    counting () {
      if (this.statusP1[2]['.value'] < this.statusP2[2]['.value']) {
        this.$db.ref('/users/wasit/winner').set('Selamat Player 1 Menang')
      }  // alert('Selamat Player 1 Menang')
      if (this.statusP1[2]['.value'] > this.statusP2[2]['.value']) {
        this.$db.ref('/users/wasit/winner').set('Selamat Player 2 Menang')
      }  // alert('Selamat Player 2 Menang')
      if (this.statusP1[2]['.value'] === this.statusP2[2]['.value']) {
        this.$db.ref('/users/wasit/winner').set('Belum ada yang menang')
      }
    },
    resetGame () {
      this.$db.ref('/users/player1').set({
        running: false,
        name: '',
        task: '',
        status: 0
      })
      this.$db.ref('/users/player2').set({
        running: false,
        name: '',
        task: '',
        status: 0
      })
      this.$db.ref('/users/wasit').set({
        task: '',
        count: 0,
        running: false,
        winner: ''
      })
      this.$router.push('/')
    }
  },
  mounted () {
    this.counting()
  },
  computed: {
    mego () {
      return this.winners
    }
  },
  watch: {
    mego (newCount) {
      console.log('count berubah nih ', newCount)
    }
  }
}
</script>

<style lang="css">
</style>
