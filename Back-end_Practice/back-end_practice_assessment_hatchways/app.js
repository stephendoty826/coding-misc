
const express = require("express")
const port = 3001
const data = require("./data.json")

console.log(data.recipes)

const app = express()

// adds body parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/recipes", (req, res)=> {

  let jsonObject = {recipeNames: []}

  data.recipes.forEach(recipe => {
    jsonObject.recipeNames.push(recipe.name)
  })

  res.json(jsonObject)

})
app.get("/recipes/details/:recipeName", (req, res)=> {

  let recipeName = req.params.recipeName

  let jsonObject = {}
  
  data.recipes.forEach(recipe=>{
    if(recipe.name === recipeName){

      let ingredients = []

      recipe.ingredients.forEach(ingredient=>{
        ingredients.push(ingredient)
      })

      let numSteps = recipe.instructions.length

      jsonObject.details = {"ingredients": ingredients, "numSteps": numSteps}

    }
  })

  res.json(jsonObject)

})

app.post("/recipes", (req, res)=>{

  let {name, ingredients, instructions} = req.body

  if(data.recipes.every(recipe => recipe.name !== name)){ // determines if recipe is in list already
    data.recipes.push(req.body)
    console.log(data.recipes)
  }
  else{
    res.json({error: "Recipe already exists"})
  }

})

app.put("/recipes", (req, res)=>{

  let {name, ingredients, instructions} = req.body

  let editableRecipe = false

  let index

  data.recipes.forEach((recipe, i)=>{
    if(recipe.name === name){
      editableRecipe = true
      index = i
    }
  })

  if(editableRecipe){
    data.recipes[index] = req.body
  }
  else{
    res.json({error: "Recipe does not exists"})
  }

  console.log(data.recipes)

})

app.listen(port, ()=>{
  console.log(`Running on port: ${port}`)
})

