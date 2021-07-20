const express = require('express');

const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

const app = express();


//set up cors policies
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, PATCH, DELETE"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Content-Type, Authorization"
	);
	next();
})

app.use('/user', userRoutes);

/** error handling */
app.use((err, req, res, next) => {
	const status = err.statusCode || 500;
	const message = err.message;
	const errors = err.data || [];
	res.status(status).json({
		message,
		errors
	});
});

mongoose.connect('mongodb url')
.then(() => {
	app.listen(5000);
})
.catch(e => {
	console.log(e)
});

