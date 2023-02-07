<template>
  <!-- Un élément de liste, un client -->
  <q-item clickable v-ripple>
    <!-- Photo du client -->
    <q-item-section avatar>
      <!-- <q-icon name= {{ capteur.logo }} /> -->
    </q-item-section>

    <!-- Nom, prénom et email du client -->
    <q-item-section>
      <q-item-label lines="1">
        {{ capteur.nom }}
      </q-item-label>
      <q-item-label caption lines="2">
        Salle : {{ capteur.salle.nom }}
      </q-item-label>
    </q-item-section>

    <!-- Icône email -->
    <q-item-section side>
      <q-item-label>
        {{ capteur.code }}
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
