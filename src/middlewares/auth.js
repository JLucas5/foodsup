const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (res, req, next) => {

    const authHeader = req.headers.token

    if(!authHeader)
        return res.status(401).send({ error: 'Token not provided' })


    const parts = authHeader.split(' ')

    if(!parts === 2)
        return res.status(401).send({ error: 'Token error' })
    

    const [ scheme, token ] = parts

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ error: 'Token malformated' })

    jwt.verify( token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token invalid' })

        req.userId = decoded.id

        return next()
    } )

}