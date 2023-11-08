import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';


if (module.hot) {
  module.hot.accept()
}


const controllerRecipes = async function () {
  try {
    // resultsView.renderSpinner();
    
    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recip
    await model.loadRecipe(id);

    // 2)  Rendering recipe
    recipeView.render(model.state.recipe);
    
  } catch (err) {
    console.log(err);
    recipeView.renderError();
  }
};


const controlSearchResults = async function(){
  try{
    //1) Get Search query 
    resultsView.renderSpinner();
    
    const query =searchView.getQuery();
    if (!query) return;
    
    // 2) Load search results
    await model.loadSearchResults(query)
    
    // 3) render results
    resultsView.render(model.getSearchResultsPage(1));
    
    //4) Render inital paginqtion buttons
    paginationView.render(model.state.search)
    
  }catch(err){
    console.log(err);
  }
}

const controlPagpnation = function(goToPage){
    // Render new result
    resultsView.render(model.getSearchResultsPage(goToPage));
    
    //2) Render new pagination button
    paginationView.render(model.state.search)}



const init = function(){
  recipeView.addHandlerRender(controllerRecipes);
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagpnation)
}
init();