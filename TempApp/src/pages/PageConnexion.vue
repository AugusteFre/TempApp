<template>
  <q-page padding>
    <q-card class="connexion">
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="connexion" label="Se connecter" />
        <q-tab name="enregistrement" label="Créer un compte" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="connexion">
          <cnx-form/>
        </q-tab-panel>

        <q-tab-panel name="enregistrement">
          <reg-form/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageConnexion',
  data () {
    return {
      tab: 'connexion'
    }
  },
  components: {
    'cnx-form': require('components/Connexion/ConnexionForm').default,
    'reg-form': require('components/Connexion/EnregistrementForm').default
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
