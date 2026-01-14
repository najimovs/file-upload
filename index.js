import express from "express"

const PORT = process.env.PORT
const app = express()

app.set( "view engine", "ejs" )
app.set( "views", "./src/views" )

app.get( "/", ( req, res ) => res.render( "home" ) )

app.listen( PORT, () => console.log( PORT ) )
