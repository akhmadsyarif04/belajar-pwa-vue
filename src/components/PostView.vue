<template>
    <form>
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--8-col">
            <div class="card-image__picture">
              <img :src="this.catUrl"/>
            </div>
          </div>
          <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
              <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
              <label for="username" class="mdl-textfield__label">Describe me</label>
            </div>
            <div class="actions">
              <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                POST A CAT
              </a>
            </div>
          </div>
        </div>
    </form>
</template>
<script>
import parse from 'xml-parser'
export default {
  data () {
    return {
      'catUrl': 'https://24.media.tumblr.com/tumblr_mceknxs4Lo1qd477zo1_500.jpg'
    }
  },
  mounted () {
    //  cerita nyamau ngambir gambar dari API dibawah ini ketika memasukan data baru. tapi karena tidak jalan terpaksa masukan manual
    // aja dulu sementara.
    this.$http.get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1').then(response => {
      this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
    })
  },
  methods: {
    postCat () {
      this.$root.$firebaseRefs.cat.push(
        {
          'url': this.catUrl,
          'comment': this.title,
          'info': 'Posted by Charles on Tuesday',
          'created_at': -1 * new Date().getTime()
        })
        .then(this.$router.push('/'))
    }
  }
}
</script>
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>
