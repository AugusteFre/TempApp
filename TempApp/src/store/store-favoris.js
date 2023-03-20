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
  /**
   * Ajoute en favori un élément
   * @param state les favoris
   * @param favori l'élément a ajouter
   * @constructor
   */
  ADD_FAVORIS (state, favori) {
    state.favoris.push(favori)
  },
  /**
   * Supprime l'élément des favoris
   * @param state les favoris
   * @param favori l'élément a supprimer
   * @constructor
   */
  REMOVE_FAVORIS (state, favori) {
    state = state.favoris.filter(el => el.id !== favori.id)
  }
}

/*
Actions : méthodes du magasin qui font appel aux mutations
Elles peuvent être asynchrones !
 */
const actions = {
  /**
   * Ajoute un élément en favori au local storage
   * @param commit validation de l'action
   * @param payload ce qui contient les données
   */
  ajouterFavori ({ commit }, payload) {
    commit('ADD_FAVORIS', payload)
    LocalStorage.set('favoris', state)
  },
  /**
   * Supprime un élément de favori du local storage
   * @param commit validation de l'action
   * @param payload ce qui contient les données
   */
  supprimerFavori ({ commit }, payload) {
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
