<template lang="html">
  <div class="">
    <button type="button" @click="getRandomWord">Get Random Word</button>
    <p>{{ randomWord }}</p>
    <button type="button">Mulai</button>
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
    }
  }
}
</script>

<style lang="css">
</style>
