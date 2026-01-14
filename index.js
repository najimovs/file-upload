import express from "express"

const app = express()

app.set( "view engine", "ejs" )
app.set( "views", "./src/views" )

app.get( "/", ( req, res ) => res.render( "home" ) )

app.listen( 3_000, () => console.log( 3_000 ) )
