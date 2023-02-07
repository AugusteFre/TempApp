import { api } from 'boot/axios'

// State : données du magasin
const state = {
  capteurs: [
    {
      id: 1,
      nom: 'capteur-5574',
      logo: null,
      code: 'nd_6430',
      salle: {
        id: 1,
        nom: 'C595-119'
      },
      mesures: [
        {
          id: 177,
          date: '2021-02-23',
          sequence: 7606,
          temperature: 29.66,
          humidite: 95.67,
          capteur_id: 1
        }
      ]
    }
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
  setCapteurs (state, newCapteurs) {
    state.capteurs = newCapteurs
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
   */
  getCapteursApi ({ commit }) {
    api.get('/capteurs')
      .then(function (response) {
        console.log(response)
        // l'API renvoie une réponse qui contient un tableau data, dans ce tableau data, les clients sont dans le tableau results
        commit('setCapteurs', response.data.results)
      })
      .catch(function (error) {
        commit('setCapteurs', [])
        console.log(error.response)
      })
  }
}

/*
Getters : retourne les données du magasin
Fonctionne comme les propriétés calculées
Sert à calculer, trier, filtrer ou formater les donneés
 */
const getters = {
  getCapteurs (state) {
    /**
     * renvoie un tableau de capteurs
     */
    return state.capteurs
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
