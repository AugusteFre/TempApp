<template>
    <q-item clickable v-ripple @click="afficherListeCapteur = !afficherListeCapteur">
      <q-item-section avatar>
        <q-icon name="room" />
    </q-item-section>

      <q-item-section side>
        <q-item-label>
          {{ salles.id }}
        </q-item-label>
      </q-item-section>

    <q-item-section>
      <q-item-label lines="1">
        {{ salles.nom }}
      </q-item-label>
    </q-item-section>

      <q-item-section avatar>
        <q-icon v-if="afficherListeCapteur" name="expand_more" />
        <q-icon v-else name="expand_less" />
      </q-item-section>
    </q-item>

  <div v-if="afficherListeCapteur">
    <q-list
      v-if="capteurs.length"
      class="rounded-borders"
      bordered
      separator
    >
      <capteur v-for="capteur in capteursInSalle"
               :key="capteur.id"
               :capteur="capteur">
      </capteur>
    </q-list>
  </div>
</template>

<script>

import Capteur from 'components/Temp/Capteur'

export default {
  // eslint-disable-next-line
  name: 'Salle',
  components: { Capteur },

  computed: {
    // récupère les capteurs
    capteurs () {
      return this.$store.getters['capteurs/getCapteurs']
    },
    capteursInSalle () {
      return this.capteurs.filter(i => i.salle.id === this.salles.id)
    }
  },

  data () {
    return {
      afficherListeCapteur: false
    }
  },
  props: {
    salles: {
      type: Object,
      required: true
    }
  }
}
</script>
