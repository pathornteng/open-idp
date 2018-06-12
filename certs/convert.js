var fs = require('fs')
var pem2jwk = require('pem-jwk').pem2jwk
var jwk2pem = require('pem-jwk').jwk2pem
 
var str = fs.readFileSync('server.pem', 'ascii')
var jwk = pem2jwk(str)
var pem = jwk2pem(jwk)
