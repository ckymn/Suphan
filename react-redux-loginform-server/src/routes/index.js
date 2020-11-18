// butun routerlarin depolandigi bolge burasi bunun gorevi router lari ayaga kaldirmak 
import AuthRouter from './auth/auth.router'

//"use 1" Router(yonlendirici) nin nereden baslayacagini soyler localhost:3300____ bosluk olan kisma use daki ilk paramerte gelecek
// AuthRouter.routePrefix = 'v1/auth' demektir Result ==> (localhost"3300/v1/auth/___) diye baslar
// "use 2" burda ise gidilecek adreste olacak route soyler get,post,put,delete,push yapar Result ==> (localhost:3300/v1/auth/login) diye post atar!

const AppRoutes = app => {
  app.use(AuthRouter.routePrefix, AuthRouter.route())
}

export default AppRoutes
