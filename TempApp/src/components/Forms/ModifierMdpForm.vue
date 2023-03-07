<template>
  <q-card class="form-card">
    <q-form @submit.prevent="submitForm">
    <q-card-section>
      <div class="text-h6 heading">Modifier le mot de passe</div>
    </q-card-section>

    <q-card-section>

        <q-input
          type="password"
          outlined
          v-model="form.password"
          label="Nouveau mot de passe"
          class="q-my-md"
          :rules="[ val => val.length >= 2 || 'Minimum 2 caractère']"
          lazy-rules
        />

      <q-input
        type="password"
        outlined
        v-model="form.password_confirmation"
        label="Confirmer le mot de passe"
        class="q-my-md"
        :rules="[ val => val === form.password || 'Les mots de passe sont différents']"
        lazy-rules
      />

    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        label="Annuler"
        color="grey"
        v-close-popup />
      <q-btn
        type="submit"
        label="Sauver"
        color="primary" />
    </q-card-actions>
  </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'EnregistrementForm',
  data () {
    return {
      form: {
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['modifierMotDePasse']),
    submitForm () {
      // this.modifierMotDePasse(this.form)
    }
  }
}
</script>

<style>
.form-card {
  min-width: 400px;
}
.form-card .heading {
  text-transform: capitalize;
}
</style>
