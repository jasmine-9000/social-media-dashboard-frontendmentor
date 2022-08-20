const express = require('express')
const fs = require('fs');

const app = express();
const port = 3000;
app.use(express.static('./'));

app.get('/', (req, res) => {

	fs.readFile("index.html", function(err, data) {
		if(err) {
			throw err;
		} else {
		res.write(data);
		
		res.send();
		}
	});
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))