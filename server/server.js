const express = require('express');
const connect = require('./database/conn')

const app = express();


connect().then(() => {
	const port = 8080;
	try{
		app.listen(port, () => console.log(`Server started on port ${port}`))
	}catch (err) {
		console.log(err)
	}
})

