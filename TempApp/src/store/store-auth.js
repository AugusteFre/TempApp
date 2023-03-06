import { api } from 'boot/axios'
import { afficherMessageErreur } from 'src/functions/message-erreur'
import { Loading, LocalStorage } from 'quasar'

// State : données du magasin
const state = {
  user: null,
  token: null
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  enregistrerUtilisateur ({ commit, dispatch }, payload) {
    Loading.show()
    api.post('/newuser', payload)
      .catch(function (error) {
        Loading.hide()
        console.log(error.response)
        afficherMessageErreur(
          'Création du compte impossible !'
        )
        throw error
      })
  },
  connecterUtilisateur ({ commit, dispatch }, payload) {
    Loading.show()
    api.post('/login', payload)
      .then(function (response) {
        dispatch('setUser', response.data)
      })
      .catch(function (error) {
        Loading.hide()
        console.log(error)
        afficherMessageErreur(
          'Forms impossible !',
          Object.values(error.response.data)
        )
        throw error
      })
  },
  setUser ({ commit, dispatch, state }, data) {
    // Sauvegarde, commite, les données dans le magasin
    commit('SET_USER', data.user)
    commit('SET_TOKEN', data.access_token)
    // Sauvegarde les données de l'utilisateur dans le localStorage
    LocalStorage.set('user', state.user)
    LocalStorage.set('token', state.token)
    // Récupération des capteurs de l'utilisateur
    dispatch('capteurs/getCapteursApi', null, { root: true })
    dispatch('capteurs/getSallesApi', null, { root: true })
    // Redirige l'utilisateur vers la page des tâches
    this.$router.push('/')
    // Cache la fenêtre de chargement
    Loading.hide()
  },
  deconnecterUtilisateur ({ commit, state, dispatch }) {
    Loading.show()
    const that = this
    // Configuration du header avec token
    const config = {
      headers: { Authorization: 'Bearer ' + state.token }
    }
    // Déconnexion de l'API
    api.post('/logout', {}, config)
      .catch(function (error) {
        afficherMessageErreur(
          'Erreur lors de la déconnexion'
        )
        throw error
      })
      .finally(function () {
        // Réinitialise user et token
        commit('SET_USER', null)
        commit('SET_TOKEN', null)
        // Vide le locaStorage
        LocalStorage.clear()
        // Vide la liste des capteurs
        dispatch('capteurs/viderCapteurs', null, { root: true })
        dispatch('capteurs/viderSalles', null, { root: true })
        // Redirige l'utilisateur vers la page de connexion
        that.$router.push('/connexion')
        // location.reload() // recharge la page du navigateur
        Loading.hide()
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {

}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace à notre objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
