/*
    1-burda es2015 kullanmak icin babel-cli babel-preset-es2015 kurduk 
    2-babel dosyasini olusturduk
    3-nodemon kurduk anlik calismalari goruntulemek icin 
    4- ama nodemon es2105 anlamadigindan dolayi "satar" : nodemon src/index.js --exec babel-node ile cagirdiginda hersey calisir! 
    5- body-parser down. edildi cunku bizim postman deki body`de json yaziyoruz ama body text olarak algiliyor bunun icin indirdik 
    5.1- aslinda body-parser bir middleware dir . Post edilen datayi yakalar ve json`a cevirir.
    6-//router dosyalarini farkli bir dosyada tuttuk ve ./ islemini kaldiripp default olarak bulmasini sagladik "script"te NODE_PATH=src dedik!
*/
import express from 'express'
import bodyParser from 'body-parser'
import AuthRouter from './routes/index'
import config from './config'
import mongoose from 'mongoose'
import cors from 'cors' //bu api 3300 portundan web 3000 portuna veri gondermesine izin vericek!

mongoose.connect(config.mongoData, { useNewUrlParser: true })
mongoose.Promise = global.Promise

const app = express()

app.use(cors())
//json formatina cevirmek
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//route larin toplandigi yer
AuthRouter(app)

// req = istek // res = tepki
app.get('/', (req, res) => {
  res.send('React Redux LoginForm')
})

app.post('/', (req, res) => {
  var newDonkey = new Donkey()
  newDonkey.name = 'Essek'
  newDonkey.save().then(data => res.send(data))
})

app.listen(3300, () => {
  console.log('Calisti...')
})
