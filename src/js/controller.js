import { async } from 'regenerator-runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';



const controllerRecipes = async function () {
  try {
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
    const query =searchView.getQuery();
    if (!query) return;
    
    // 2) Load search results
    await model.loadSearchResults(query)
    
    // 3) render results
    console.log(model.state.search.results);
    
  }catch(err){
    console.log(err);
  }
}


const init = function(){
  recipeView.addHandlerRender(controllerRecipes);
  searchView.addHandlerSearch(controlSearchResults)
}
init();