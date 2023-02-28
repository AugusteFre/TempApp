<template>

  <q-item>
    <q-item-section>
      <q-item-label lines="1">
        {{ user.photo }}
      </q-item-label>

      <q-item-label lines="1">
        Nom : {{ user.nom }}
      </q-item-label>

      <q-item-label lines="1">
        Prénom : {{ user.prenom }}
      </q-item-label>

      <q-item-label lines="1">
        Email : {{ user.email }}
      </q-item-label>

      <q-item-label lines="1">
        Créé le : {{ user.created_at }}
      </q-item-label>

      <q-btn
        flat
        dense
        icon="lock"
        label="Modifier le mot de passe"
      />
    </q-item-section>
  </q-item>
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
