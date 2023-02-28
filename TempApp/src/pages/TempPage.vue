<template>
  <q-page padding>
    <h3>Liste des capteurs</h3>
    <q-list
      v-if="capteurs.length"
      class="rounded-borders"
      bordered
      separator
    >
      <capteur v-for="capteur in capteurs"
              :key="capteur.id"
              :capteur="capteur">
      </capteur>
    </q-list>
    <p v-else>Aucun capteur trouvé ...</p>
  </q-page>
</template>

<script>

import Capteur from 'components/Temp/Capteur'
// import { mapActions } from 'vuex'

export default {
  name: 'TempPage',
  components: { Capteur },

  computed: {
    // récupère les clients par défaut
    capteurs () {
      return this.$store.getters['capteurs/getCapteurs']
    }
  },
  methods: {
    // mappe l'action de récupérer des clients par API
    // ...mapActions('capteurs', ['getCapteursApi'])
  },

  // mounted est appelé quand le composant est ajouté
  mounted () {
  // récupère les clients générés par API
    // this.getCapteursApi()
  }
}
</script>
