import express from "express"
import multer from "multer"

const PORT = process.env.PORT
const app = express()

const upload = multer( { dest: "./uploads" } )

app.use( express.static( "./uploads" ) )

app.set( "view engine", "ejs" )
app.set( "views", "./src/views" )

app.get( "/", ( req, res ) => {

	const success = req.query.success === "1"
	const photo = req.query.photo

	res.render( "home", { success, photo } )
} )

app.get( "/signup", ( req, res ) => res.render( "signup" ) )

app.post( "/signup", upload.single( "profile_picture" ), ( req, res ) => {

	res.redirect( `/?success=1&photo=${ req.file.filename }` )
} )

app.listen( PORT, () => console.log( PORT ) )
