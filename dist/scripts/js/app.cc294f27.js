var app;!function(o){var t;!function(o){var t=function(){function o(o,t){this.$state=o,this.$rootScope=t}return o.$inject=["$state","$rootScope"],o}();o.AboutController=t}(t=o.about||(o.about={}))}(app||(app={}));var app;!function(o){var t;!function(o){"use strict";angular.module("app.about",["ui.router"]).controller("AboutController",o.AboutController)}(t=o.about||(o.about={}))}(app||(app={})),function(){"use strict";angular.module("app.about").config(["$stateProvider","$urlRouterProvider",function(o,t){t.otherwise("/about"),o.state("about",{url:"/about",templateUrl:"app/about/about.html",controller:"AboutController",controllerAs:"vm",resolve:{$title:function(){return"About"}}})}])}();var app;!function(o){var t;!function(o){var t=function(){function o(o,t){this.$state=o,this.$rootScope=t}return o.$inject=["$state","$rootScope"],o}();o.HomeController=t}(t=o.home||(o.home={}))}(app||(app={}));var app;!function(o){var t;!function(o){"use strict";angular.module("app.home",["ui.router"]).controller("HomeController",o.HomeController)}(t=o.home||(o.home={}))}(app||(app={})),function(){"use strict";angular.module("app.home").config(["$stateProvider","$urlRouterProvider",function(o,t){t.otherwise("/home"),o.state("home",{url:"/",templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm",resolve:{$title:function(){return"Home"}}})}])}();var app;!function(o){"use strict";angular.module("app",["app.home","app.about","ui.router"])}(app||(app={}));