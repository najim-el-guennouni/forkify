import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////



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
// controllerRecipes();

const init = function(){
  recipeView.addHandlerRender(controllerRecipes);
}
init();