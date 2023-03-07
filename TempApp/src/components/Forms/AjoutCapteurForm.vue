<template>
  <q-form @submit.prevent="submitForm">
    <q-input
      outlined
      v-model="form.name"
      label="Nom"
      class="q-my-md"
      :rules="[ val => val.length >= 1 || 'Minimum 1 caractère']"
    />

    <q-input
      outlined
      v-model="form.code"
      label="Code"
      class="q-my-md"
      :rules="[ val => val.length >= 1 || 'Minimum 1 caractère']"
    />

    <q-input
      outlined
      v-model="form.logo"
      label="logo"
      class="q-my-md"
      :rules="[ val => val.length >= 1 || 'Minimum 1 caractère']"
      lazy-rules
    />

      <!-- TODO liste énumérée des salles dispo -->

    <q-btn
      type="submit"
      color="primary"
      label="Ajouter le capteur"
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
        nom: '',
        logo: '',
        code: '',
        salle_id: ''
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
