<template>
  <div>
    <div class="card border">
      <h2>Public Gists</h2>
    </div>
    <gist-card v-for="(gist, index) in gists" :key="index" :gist="gist"/>
    <loading v-show="loading" />
    <page-btn v-show="!loading" @click="getPublicGists"/>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import GistCard from '../parts/GistCard'
import PageButton from '../parts/PageButton'
import Loading from '../parts/Loading'

const endpoint = process.env.OAUTH_ENDPOINT

export default {
  data () {
    return {
      username: ''
    }
  },
  computed: {
    ...mapState({
      loading: state => state.gists.loading
    }),
    ...mapGetters('gists', [
      'gists'
    ])
  },
  methods: {
    ...mapActions('gists', [
      'getPublicGists',
      'initPage'
    ]),
    login () {
      location.href = `${endpoint}/auth/github`
    }
  },
  created () {
    this.initPage().then(() => {
      this.getPublicGists()
    })
  },
  watch: {
    '$route' (to, from) {
      this.initPage().then(() => {
        this.getPublicGists()
      })
    }
  },
  components: {
    'page-btn': PageButton,
    'loading': Loading,
    'gist-card': GistCard
  }
}

</script>
