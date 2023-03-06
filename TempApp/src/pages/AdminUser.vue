<template>

  <q-page padding>
    <q-card class="register"
            v-model="tab"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
    >

      <q-tab-panel name="register">
        <reg-form/>
      </q-tab-panel>

    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'AdminUser',
  data () {
    return {
      tab: 'register'
    }
  },
  components: {
    'reg-form': require('components/Forms/EnregistrementForm').default
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
