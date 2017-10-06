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
      count: 0,
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

    }
  }
}
</script>

<style lang="css">
</style>
