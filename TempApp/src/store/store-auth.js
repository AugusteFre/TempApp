import { api } from 'boot/axios'
import { afficherMessageErreur } from 'src/functions/message-erreur'
import { Loading, LocalStorage } from 'quasar'

// State : données du magasin
const state = {
  /**
   * Les informations pour la connexion de l'utilisateur
   */
  user: null,
  token: null,
  /**
   * La liste des utilisateurs récupérée par Api (pas fini)
   */
  userList: [
  ]
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  /**
   * Définit l'utilisateur
   * @param state l'utilisateur a modifier
   * @param user le nouvel utilisateur
   * @constructor
   */
  SET_USER (state, user) {
    state.user = user
  },
  /**
   * définit le token
   * @param state le token a modifier
   * @param token le nouveau token
   * @constructor
   */
  SET_TOKEN (state, token) {
    state.token = token
  },
  /**
   * La liste des utilisateurs existants
   * @param state le tableau a modifier
   * @param newUsers les nouveaux utilisateurs
   * @constructor
   */
  SET_USERS (state, newUsers) {
    state.userList = newUsers
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  /**
   * Enregistre un nouvel utilisateur (pas fini)
   * @param commit validation de l'action
   * @param payload ce qui contient les données
   * @param rootState données d'authentification d'utilisateur
   */
  enregistrerUtilisateur ({ commit, rootState }, payload) {
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }
    Loading.show()
    console.log(payload)
    api.post('/newuser', payload, config)
      .then(function (response) {
        Loading.hide()
        console.log(response.data)
      })
      .catch(function (error) {
        Loading.hide()
        console.log(error.response)
        afficherMessageErreur(
          'Création du compte impossible !'
        )
        throw error
      })
  },
  /**
   * Connecte l'utilisateur avec les informations entrées dans le formulaire de connexion
   * @param dispatch permet de lancer les actions
   * @param payload les données fournies (l'utilisateur)
   */
  connecterUtilisateur ({ dispatch }, payload) {
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
  /**
   * Définit l'utilisateur en cours
   * @param commit permet de lancer les mutations
   * @param dispatch permet de lancer les actions
   * @param state le stockage local
   * @param data les données du magasin
   */
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
  /**
   * Déconnecte l'utilisateur connecté actuellement
   * @param commit permet de lancer les mutations
   * @param state le stockage local
   * @param dispatch permet de lancer les actions
   */
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
  },
  /**
   * Récupère les capteurs grâce à l'API
   * @param commit permet de lancer les mutations
   * @param rootState données d'authentification d'utilisateur
   */
  getCapteursApi ({ commit, rootState }) {
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }
    api.get('/utilisateurs', config)
      .then(function (response) {
        console.log(response)
        // l'API renvoie une réponse qui contient un tableau data
        commit('SET_USERS', response.data)
      })
      .catch(function (error) {
        commit('SET_USERS', [])
        console.log(error.response)
      })
  },
  /**
   * Vide la liste des capteurs
   * @param commit permet de lancer les mutations
   */
  viderCapteurs ({ commit }) {
    commit('SET_USERS', [])
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  /**
   * Retourne les utilisateurs
   * @param state Les utilisateurs
   * @returns {[]|*} un tableau contenant les utilisateurs
   */
  getUtilisateurs (state) {
    return state.userList
  }
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
