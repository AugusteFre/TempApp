<template>
  <q-page padding>
    <h3>Liste des salles</h3>
    <q-list
      v-if="salles.length"
      class="rounded-borders"
      bordered
      separator
    >
      <salle v-for="salle in salles"
              :key="salle.id"
              :salles="salle">
      </salle>
    </q-list>
    <p v-else>Aucune salle trouvée ...</p>

  </q-page>
</template>

<script>

import Salle from 'components/Temp/Salle'
// import { mapActions } from 'vuex'

export default {
  name: 'SallesPage',
  components: { Salle },

  computed: {
    // récupère les clients par défaut
    salles () {
      return this.$store.getters['capteurs/getSalles']
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
