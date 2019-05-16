import React from "react";

import classes from "./Burger.css"


import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// resive object from burger ingredients convert into array, 

// apply function on each array element

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => { 
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return  <BurgerIngredient key={igKey + i} type={igKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    // if there are no ingredients transformedIngredients will output a message 
    
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start edding ingredients</p>
    }
    console.log(transformedIngredients);
    return (
    <div className={classes.Burger}>
    <BurgerIngredient type="bread-top" />
       {transformedIngredients}
    <BurgerIngredient type="bread-bottom" />
    </div>
    )
}



export default burger;