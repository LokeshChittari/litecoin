const shell = require('shell.js');
const express = require('express');
const app = express();
const routes = express.Router();
const Request = require('request');
const bodyParser = require('body-parser');
const http = require('http');
cosnt server = http.createServer(app);
app.use(bodyParser.json());
const scripts = require('../scriptfiles');

routes.post('/app/createAccount', (req, res) => {
	shell.exec(`./createaddress.sh`, function(address){
		shell.exec(`./createaccount.sh ${address} ${name}`);
		  shell.exec(`./getaddressesbyaccount.sh ${name}`, function(account){
		shell.exec(`./dumpprivatekey.sh ${address}`, function(privatekey){
             res.json({
             	"address": address,
             	"account": account,
             	"privatekey": privatekey
             })

		})
	})
 })
})
routes.post('/app/GetBalance', (req))

app.use(routes);
server.listen(6000, function(){
	console.log("server runnin at http://localhost:6000");
})