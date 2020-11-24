import express from 'express'
import config from '../../config' // bunu boyle yazinca ana dizin src`e gider ama "script" tte bunu belirlemeliyiz NODE_PATH=src diyerekten !!
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import User from '../models/User'

// heryerde kullanilabilen Route func.
const route = () => {
  const router = express.Router() //router(yonlendirme) tanimi

  router.route('/login').post((req, res) => {
    const { email, password } = req.body //browser da kullanici tarafindan girilen email adresini getiriyor
    user.findOne({ email: email }).then(user => {
      if (!user) {
        res.send({
          status: false,
          message: 'boyle bir email adresi sitemde bulunamadi!'
        })
      } else {
        //--crypto
        const passwordHash = crypto
          .createHmac('sha256', config.passcrypto)
          .update(password)
          .digest('hex')
        if (user.password === passwordHash) {
          //--token
          const token = jwt.sign({ userId: user._id }, config.jwttoken)

          user
            .update(
              { email: email },
              {
                $set: {
                  lastLogin: new Date()
                }
              }
            )
            .then(() => {})
          res.send({
            status: true,
            token: token
          })
        } else {
          res.send({
            status: false,
            message: 'sifreniz hatali , Try Again !'
          })
        }
      }
    })
  })

  router.route('/sign-up').post((req, res) => {
    // bu client tarafinda girilen degerler
    const { email, password } = req.body

    const newUser = new User({
      email: email,
      password: crypto
        .createHmac('sha256', config.passcrypto)
        .update(password)
        .digest('hex')
    })

    //burda veri tabanina kullaniciyi kaydediyoruz
    newUser
      .save()
      .then(data => res.send({ status: true, user: data }))
      .catch(err => res.send({ status: false, error: err }))
  })
  return router
}

// routePrefix : versiyon kontrol etmek icin kullanilir "http://localhost:3300/v1/auth/login" boyle kullanilir....
export default {
  route,
  routePrefix: `/${config.version}/auth`
}
