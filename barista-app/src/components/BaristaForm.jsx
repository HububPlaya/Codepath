import React, {Component, useState} from "react";
import RecipeChoices from "./RecipeChoices.jsx";
import drinksJson from "../drinks.json"

const BaristaForm = () => {
    const [currentDrink, setCurrentDrink] = useState('');

    const [trueRecipe, setTrueRecipe] = useState({});

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
      });
    
    const ingredients = {
        'temperature' : ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

  const onNewDrink = () => {
    return (
        <div></div>
    )
  }

  const onCheckAnswer = () => {
    return (
        <div></div>
    )
  }

  const getNextDrink = () => {
    let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
  }
  return (
    <div>
        <h2>Hi, I'd like to order a:</h2>
        <form>

        </form>
        

        <h3>Temperature</h3>
        <div className="answer-space" >
        {inputs["temperature"]} 
        </div>
        
        <RecipeChoices
        handleChange={(e) => setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))}
        label="temperature"
        choices={ingredients["temperature"]}
        checked={inputs["temperature"]}
        />

        <h3>Milk</h3>
        <div className="answer-space" >
            {inputs["milk"]} 
        </div>

        <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
                }))}
            label="milk"
            choices={ingredients["milk"]}
            checked={inputs["milk"]}
        />

        <h3>Temperature</h3>
        <div className="answer-space" >
        {inputs["syrup"]} 
        </div>
        
        <RecipeChoices
        handleChange={(e) => setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))}
        label="syrup"
        choices={ingredients["syrup"]}
        checked={inputs["syrup"]}
        />

        <h3>Blended</h3>
        <div className="answer-space" >
        {inputs["blended"]} 
        </div>
        <RecipeChoices
            handleChange={(e) => setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }))}
            label="blended"
            choices={ingredients["blended"]}
            checked={inputs["blended"]}
        />

        <button className="button" type="submit" onClick={onCheckAnswer}>
            Check Answer
        </button>

        <button className="button" type="new-drink-button" onClick={onNewDrink}>
            New Drink
        </button>

        </div>
  );
  
};

export default BaristaForm;