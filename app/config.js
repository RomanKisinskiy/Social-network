app.config(function($routeProvider){
  $routeProvider
      .when("/",{
      templateUrl:"app/templates/login.html",
      controller:"loginCtrl",
      controllerAs:"login",
  }) 
    .when("/registration",{
      templateUrl:"app/templates/registration.html",
      controller:"registrationCtrl",
      controllerAs:"registration",
  })
      .when("/mainpage",{
      templateUrl:"app/templates/mainpage.html",
      controller:"mainpageCtrl",
      controllerAs:"mainpage",
  })
      .when("/info",{
      templateUrl:"app/templates/info.html",
      controller:"infoCtrl",
      controllerAs:"info",
  }).otherwise({
      //template: "<h1>error 404</h1>"
      redirectTo:"/"
  })
})