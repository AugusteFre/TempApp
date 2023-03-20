import { api } from 'boot/axios'

// State : données du magasin
const state = {
  capteurs: [
  ],
  salles: [
  ],
  user: [
  ]
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  /**
   * Définit les nouveaux capteurs
   * @param state le tableau a modifier
   * @param newCapteurs le nouveau tableau de capteurs
   */
  SET_CAPTEURS (state, newCapteurs) {
    state.capteurs = newCapteurs
  },
  /**
   * Définit les nouvelles salles
   * @param state le tableau a modifier
   * @param newSalles le nouveau tableau de salles
   * @constructor
   */
  SET_SALLES (state, newSalles) {
    state.salles = newSalles
  }
}
/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  /**
   * Récupère la liste des capteurs par l'API
   * @param commit permet de lancer les mutations
   * @param rootState données d'authentification d'utilisateur
   */
  getCapteursApi ({ commit, rootState }) {
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }
    api.get('/capteurs', config)
      .then(function (response) {
        console.log(response)
        // l'API renvoie une réponse qui contient un tableau data
        commit('SET_CAPTEURS', response.data)
      })
      .catch(function (error) {
        commit('SET_CAPTEURS', [])
        console.log(error.response)
      })
  },

  /**
   * Vide la liste des capteurs
   * @param commit permet de lancer les mutations
   */
  viderCapteurs ({ commit }) {
    commit('SET_CAPTEURS', [])
  },

  /**
   * Récupère la liste des salles par Api
   * @param commit permet de lancer les mutations
   * @param rootState données d'authentification d'utilisateur
   */
  getSallesApi ({ commit, rootState }) {
    const config = {
      headers: { Authorization: 'Bearer ' + rootState.auth.token }
    }
    api.get('/salles', config)
      .then(function (response) {
        console.log(response)
        // l'API renvoie une réponse qui contient un tableau data
        commit('SET_SALLES', response.data)
      })
      .catch(function (error) {
        commit('SET_SALLES', [])
        console.log(error.response)
      })
  },
  /**
   * Vide la liste des salles
   * @param commit permet de lancer les mutations
   */
  viderSalles ({ commit }) {
    commit('SET_SALLES', [])
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  /**
   * Retourne les capteurs
   * @param state Les capteurs
   * @returns {[]|*} un tableau contenant les capteurs
   */
  getCapteurs (state) {
    return state.capteurs
  },
  /**
   * Retourne les salles
   * @param state Les salles
   * @returns {[]|*} un tableau contenant les salles
   */
  getSalles (state) {
    return state.salles
  }
}

/*
Exporte les constantes, variables du fichier
On pourra ainsi les récupérer, les importer dans un autre fichier JS.

namespace: true, ajoute un namespace l'objet retourné.
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
