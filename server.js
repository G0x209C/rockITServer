const express = require('express');
const app = express();

// importing routers
const routePlayer = require('./core/routes/api/player');

// integrating routers.
app.use('/api/player', routePlayer);

app.listen(3000, ()=>
	{
		console.log('listening on port 3000');
	}
);
