<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Température
        </q-toolbar-title>

        <q-btn
          v-if="!user"
          to="/connexion"
          flat
          icon-right="account_circle"
          label="Se connecter"
          class="absolute-right"
        />

        <q-btn
          v-else
          @click="deconnecterUtilisateur"
          flat
          icon-right="account_circle"
          label="Se déconnecter"
          class="absolute-right"
        />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-list>
          <q-item-label
            header
            className="text-grey-8"
          >
            Menu de navigation
          </q-item-label>
          <q-item clickable to="/" exact>
            <q-item-section avatar>
              <q-icon name="home"/>
            </q-item-section>

            <q-item-section>
              <q-item-label>Accueil</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable to="/temp" exact>
            <q-item-section avatar>
              <q-icon name="thermostat"/>
            </q-item-section>

            <q-item-section>
              <q-item-label>Liste des capteurs</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['deconnecterUtilisateur']),
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
}
</script>
