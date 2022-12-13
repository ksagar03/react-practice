Learning Express.js

Thunder clint: it is a VS code extension which is used to test API server it is similar to "postman".

nodemon: it is a node package(too) which is used to restart node whenever there is a change in file
-- npm install nodemon

get: 
        1.get function is used to send Http request
        2. It is used to send less amount of data and it is not sequre because the data is visible in URL bar 

res.send : It is used to to send data to the server

res.sendFile : It is used to send whole file to the server 
            (eg: we can send Html file to server:
            res.sendFile(path.join(__dirname, "index.html")
            )

listen(app.listen): used to listen the connections specified on the host and port.


app.use() : it acts as a middleware which will be having request and response objects by default
    syntax: app.use(express.static(path.join(__dirname, "public"))); 
    (here "public" is static folder name)
    *** what ever files inside that folder will be rendered in base root("/")

Sending Parameters within the URL:
        
        in URL we can define the parameters
        "/send/:name"
