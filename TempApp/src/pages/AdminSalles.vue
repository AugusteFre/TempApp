<template>

  <q-page padding>
    <q-card class="addRoom"
            v-model="tab"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
    >

      <q-tab-panel name="addRoom">
        <room-form/>
      </q-tab-panel>

    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'AdminRoom',
  data () {
    return {
      tab: 'addRoom'
    }
  },
  components: {
    'room-form': require('components/Forms/AjoutSalleForm').default
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
