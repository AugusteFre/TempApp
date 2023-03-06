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
   * Remplace le tableau défaut par un nouveau tableau
   * @param state
   * @param newCapteurs le nouveau tableau de capteurs
   */
  SET_CAPTEURS (state, newCapteurs) {
    state.capteurs = newCapteurs
  },
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
   * Récupère des capteurs grâce à l'API
   * @param commit
   * @param rootState
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
  viderCapteurs ({ commit }) {
    commit('SET_CAPTEURS', [])
  },

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
   * renvoie un tableau de capteurs
   */
  getCapteurs (state) {
    return state.capteurs
  },
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
