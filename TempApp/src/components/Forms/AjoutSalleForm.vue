<template>
  <q-form @submit.prevent="submitForm">
    <q-input
      outlined
      v-model="form.nom"
      label="Nom de la salle"
      class="q-my-md"
      :rules="[ val => val.length >= 1 || 'Minimum 1 caractère']"
    />

    <q-btn
      type="submit"
      color="primary"
      label="Ajouter la salle"
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
        nom: ''
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
