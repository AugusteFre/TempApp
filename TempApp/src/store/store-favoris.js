// State : données du magasin
import { LocalStorage } from 'quasar'

const state = {
  favoris: []
}

/*
Mutations : méthode qui manipulent les données
Les mutations ne peuvent pas être asynchrones !!!
 */
const mutations = {
  ADD_FAVORIS (state, favori) {
    state.favoris.push(favori)
  },
  REMOVE_FAVORIS (state, favori) {
    state = state.filter(el => el.id !== favori.id)
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  ajouterFavori ({ commit }, payload) {
    console.log(payload)
    commit('ADD_FAVORIS', payload)
    LocalStorage.set('favoris', state)
  },
  supprimerFavori ({ commit }, payload) {
    console.log(payload)
    commit('REMOVE_FAVORIS', payload)
    LocalStorage.set('favoris', state)
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
