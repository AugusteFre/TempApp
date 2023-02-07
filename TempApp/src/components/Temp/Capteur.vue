<template>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="barchart" />
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

    </q-item>
    <q-item v-for="mesure in capteur.mesures" :key="mesure.id" class="q-my-sm" clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="thermostat" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ mesure.temperature }} °C | {{ mesure.humidite }} g/m3</q-item-label>
        <q-item-label caption lines="1">Date : {{ mesure.date }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-item-label>
          Id: {{ mesure.id }} | Seq: {{ mesure.sequence }}
        </q-item-label>
      </q-item-section>
    </q-item>
</template>

<script>

export default {
  // eslint-disable-next-line
  name: 'Capteur',
  props: {
    capteur: {
      type: Object,
      required: true
    }
  }
}
</script>
