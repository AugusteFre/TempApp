<template>
  <q-form @submit.prevent="submitForm">
    <q-input
      type="number"
      outlined
      v-model="form.date"
      label="Date"
      class="q-my-md"
      :rules="[ val => val.length >= 1 || 'Minimum 1 caractère']"
    />

    <q-input
      type="number"
      outlined
      v-model="form.sequence"
      label="Sequence"
      class="q-my-md"
      :rules="[ val => val.length >= 1 || 'Minimum 1 caractère']"
    />


    <q-input
      type="number"
      outlined
      v-model="form.temperature"
      label="Temperature"
      class="q-my-md"
      :rules="[ val => val.length >= 1 || 'Minimum 1 caractère']"
    />

    <q-input
      type="number"
      outlined
      v-model="form.humidite"
      label="Humidité"
      class="q-my-md"
      :rules="[ val => val.length >= 1 || 'Minimum 1 caractère']"
    />

      <!-- TODO liste énumérée des capteurs dispo -->

      <q-input
        type="password"
        outlined
        v-model="form.password"
        label="Mot de passe"
        class="q-my-md"
        :rules="[ val => val.length >= 4 || 'Minimum 4 caractère']"
        lazy-rules
      />

    <q-btn
      type="submit"
      color="primary"
      label="Créer un compte"
    />
  </q-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EnregistrementForm',
  data () {
    return {
      form: {
        date: '',
        sequence: '',
        temperature: '',
        humidite: '',
        capteur_id: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['enregistrerUtilisateur']),
    submitForm () {
      this.enregistrerUtilisateur(this.form)
    },
    validateEmail (email) {
      // Source : https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  }
}
</script>

<style>

</style>
