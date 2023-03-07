<template>

  <q-page padding>
    <q-card class="addSensor"
            v-model="tab"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
    >

      <q-tab-panel name="addSensor">
        <cap-form/>
      </q-tab-panel>

    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'AdminCapteur',
  data () {
    return {
      tab: 'addSensor'
    }
  },
  components: {
    'cap-form': require('components/Forms/AjoutCapteurForm').default
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
