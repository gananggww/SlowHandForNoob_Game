<template lang="html">
  <div>
    <p>{{nama[0]['.value']}}</p>
  </div>

</template>

<script>
export default {
  firebase () {
    return {
      // nama: this.$db.ref('/users/player1')
    }
  },
  methods: {
    validasi () {
      console.log('=========>', this.nama[0]['.value'])
      var waw = this.nama[0]['.value']
      if (localStorage.getItem('token') === waw) {
        console.log('masuk')
        this.$router.push('/')
        // this.$db.ref('/users/player1/running').set(false)
      }
    }
  },
  mounted () {
    // this.validasi()
  }
}
</script>

<style lang="css">
</style>
