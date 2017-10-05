<template lang="html">
  <div class="">
    <button type="button" @click="getRandomWord()">Get Random Word</button>
    <p>{{ randomWord }}</p>
    <button @click="getStart()" type="button">Mulai</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      randomWord: '',
      words: [
        'zainal jkbghgjhgjk',
        'anak',
        'sholeh',
        'teja',
        'ganteng',
        'banget'
      ]
    }
  },
  methods: {
    getRandomWord: function () {
      var randomIndex = Math.floor(Math.random() * this.words.length)
      this.randomWord = this.words[randomIndex]
    },
    getStart () {
      this.$db.ref('/users/player1/task').set(this.randomWord)
      this.$db.ref('/users/player2/task').set(this.randomWord)
    }
  }
}
</script>

<style lang="css">
</style>
