<template>
    <q-item clickable v-ripple @click="afficherListeTemp = !afficherListeTemp">
      <q-item-section avatar>
        <q-icon name="bar_chart" />
      </q-item-section>

    <q-item-section>
      <q-item-label lines="1">
        {{ capteur.nom }}
      </q-item-label>
      <q-item-label caption lines="2">
        Salle : {{ capteur.salle.nom }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-item-label>
        {{ capteur.code }}
      </q-item-label>
    </q-item-section>

      <q-item-section side>
        <q-btn v-if="favori"
               @click.stop="etatFavori(capteur)"
               dense
               flat
               round
               color="primary"
               icon="star" />
        <q-btn v-else
               @click.stop="etatFavori(capteur)"
               dense
               flat
               round
               color="primary"
               icon="star_border" />
      </q-item-section>

      <q-item-section avatar>
        <q-icon v-if="afficherListeTemp" name="expand_more" />
        <q-icon v-else name="expand_less" />
      </q-item-section>
    </q-item>

  <div v-if="afficherListeTemp">
    <q-item v-for="mesure in capteur.mesures" :key="mesure.id" class="q-my-sm" clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="thermostat" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ mesure.temperature }} °C | {{ mesure.humidite }} g/m3</q-item-label>
        <q-item-label caption lines="1">Date : {{ mesure.date }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-item-label> Id: {{ mesure.id }} | Seq: {{ mesure.sequence }} </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>

import { mapActions } from 'vuex/dist/vuex.mjs'
import { ref } from 'vue'

export default {
  // eslint-disable-next-line
  name: 'Capteur',
  setup () {
    return {
      value: ref(false)
    }
  },
  data () {
    return {
      afficherListeTemp: false,
      favori: false
    }
  },
  methods: {
    ...mapActions('favoris', ['ajouterFavori', 'supprimerFavori']),
    etatFavori (capteur) {
      this.favori = !this.favori
      if (this.favori) {
        this.ajouterFavori(capteur)
      } else {
        this.supprimerFavori(capteur)
      }
    }
  },
  props: {
    capteur: {
      type: Object,
      required: true
    }
  }
}
</script>
