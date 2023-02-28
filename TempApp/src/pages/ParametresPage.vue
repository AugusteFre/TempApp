<template>
  <q-card
    class="card">
    <q-img
      :src="user.photo ? user.photo : 'images/image-placeholder.png'"
      basic
    >
      <div class="absolute-bottom text-h6">
        {{ user.nom }} {{ user.prenom }}
      </div>
    </q-img>

    <q-card-section>
      <span> Email : {{ user.email }} </span>
    </q-card-section>

    <q-card-section>
      <span> Créé le : {{ user.created_at }} </span>
    </q-card-section>

    <q-card-actions
      class="absolute-bottom"
      align="center">
      <q-btn
        flat
        dense
        icon="lock"
        label="Modifier le mot de passe"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'ParametrePage',

  computed: {
    ...mapState('auth', ['user'])
  }
})
</script>
