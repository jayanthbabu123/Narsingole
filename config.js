village.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
            .state('login',{
                url: '/login',
                templateUrl :'views/login.html'
            })
            .state('sign-up',{
                url:'/sign-up',
                templateUrl:'views/sign-up.html'
            })
            .state('contact-us',{
                    url:'/contact-us',
                    templateUrl:'views/contact-us.html'
            })
    });