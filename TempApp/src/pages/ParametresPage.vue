<template>
  <q-page class="flex flex-center">
    <q-card class="login-form" v-bind:style="$q.platform.is.mobile?{'width': '80%'}:{'width':'20%'}">
      <q-card-section>
        <q-avatar size="74px" class="absolute-center shadow-10">
          <q-img :src="user.photo ? user.photo : 'images/image-placeholder.png'" basic ></q-img>
        </q-avatar>
      </q-card-section>
      <q-card-section class="q-mt-md">
        <div class="text-h6 text-center">
          {{ user.nom }} {{ user.prenom }}
        </div>
        <div>
          Email : {{ user.email }}
        </div>
        <div>
          Créé le : {{ user.created_at }}
        </div>

      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          flat
          dense
          icon="lock"
          label="Modifier le mot de passe"
        />
      </q-card-actions>
    </q-card>
  </q-page>
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
