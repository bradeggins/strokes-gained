const server = require("./server")

const port = process.env.PORT || 5000

server.listen(port, function(){
    console.log("Server is listening on http://localhost:" + port )
})