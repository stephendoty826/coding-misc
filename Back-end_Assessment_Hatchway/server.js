
const express = require("express")
const axios = require("axios")
const port = 3000

const app = express()

app.get("", async (req, res)=>{

  res.send("<h1>Hello World</h1>")

})
app.get("/api/ping", async (req, res)=>{

  res.status(200).json({"success":"true"})

})

let serverSideCache = {}

app.get("/api/posts", async (req, res)=>{

  let tag = req.query.tag
  let sortBy = req.query.sortBy || "id"
  let direction = req.query.direction || "asc"

  let validSortBy = ["id", "reads", "likes", "popularity"]
  let validDirection = ["asc", "desc"]

  if(tag === undefined || tag === null){
    res.status(400).json({"error": "Tags parameter is required"})
  }
  else if(!validSortBy.includes(sortBy)){
    res.status(400).json({"error":"sortBy parameter is invalid"})
  }
  else if(!validDirection.includes(direction)){
    res.status(400).json({"error":"direction parameter is invalid"})
  }
  else{

    if(tag.includes(",")){ // Multiple tags in url. Make separate api calls. 

      tagsArr = tag.split(",")

      let postCache = {}

      let count = 1

      tagsArr.forEach(async tag => {
        
        if(!serverSideCache[tag]){
          dataObj = await axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}&sortBy=${sortBy}&direction=${direction}`)
          serverSideCache[tag] = dataObj
        }
        else{
          dataObj = serverSideCache[tag]
        }

        dataObj.data.posts.forEach(post=>{

          if(!postCache[post.id]){
            postCache[post.id] = post
          }

        })

        let posts = Object.values(postCache)

        if(count === tagsArr.length){ //sends status and json only after the last tag has been pulled and added to postCache
          res.status(200).json({"posts": posts})
        }

        count++
      })


    }else{ // single tag in url

      let dataObj
      
      if(!serverSideCache[tag]){
        dataObj = await axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}&sortBy=${sortBy}&direction=${direction}`)
        serverSideCache[tag] = dataObj
      }
      else{
        dataObj = serverSideCache[tag]
      }

      res.status(200).json(dataObj.data)

    }
    
  }

})

app.listen(port, ()=>{
  console.log(`Running on port ${port}`)
})

