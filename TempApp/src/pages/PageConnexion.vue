<template>
  <q-page padding>
    <q-card class="connexion"
        v-model="tab"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >

      <q-tab-panel name="connexion">
        <cnx-form/>
      </q-tab-panel>

    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageConnexion',
  data () {
    return {
      tab: 'connexion'
    }
  },
  components: {
    'cnx-form': require('components/Forms/ConnexionForm').default
  }
}
</script>

<style scoped>
.connexion {
  max-width: 500px;
  width: auto;
  margin: 0 auto;
}
</style>
