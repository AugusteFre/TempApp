<template>
    <q-item clickable v-ripple @click="afficherListeTemp = !afficherListeTemp">
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
        <q-icon v-if="afficherListeTemp" name="expand_more" />
        <q-icon v-else name="expand_less" />
      </q-item-section>
    </q-item>
</template>

<script>

export default {
  // eslint-disable-next-line
  name: 'Salle',
  data () {
    return {
      afficherListeTemp: false
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
