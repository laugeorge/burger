//Node Connection to MySQL

var mysql = require ('mysql');
var connection;

if (process.env.JAWSDB_URL)
{
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
	connection = mysql.createConnection(
	{
		host: 'a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'j4f8rtga2ik0tyek',
		password: 'jlo5hcbkgc10ja5d',
		database: 'sexgs4todoveo3p9'
	});
};


connection.connect(function(err) 
{
  if (err) 
  {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;