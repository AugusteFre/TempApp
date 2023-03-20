<template>
  <q-page padding>
    <h3>Liste des favoris</h3>
    <q-list
      v-if="capteursFavoris.favoris"
      class="rounded-borders"
      bordered
      separator
    >
      <capteur v-for="favori in capteursFavoris.favoris"
              :key="favori.id"
              :capteur="favori">
      </capteur>
    </q-list>
    <p v-else>Aucun capteur mis en favori ...</p>

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
    capteursFavoris () {
      if (this.$q.localStorage.getItem('favoris')) {
        return (this.$q.localStorage.getItem('favoris'))
      }
      return 0
    }
  },
  methods: {
    // mappe l'action de récupérer des clients par API
    // ...mapActions('capteurs', ['getCapteursApi'])
  },

  // mounted est appelé quand le composant est ajouté
  mounted () {
    // aled
  }
}
</script>
