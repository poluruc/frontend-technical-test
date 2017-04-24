export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('test01', {
      url: '/test01',
      component: 'test01'
    })
    .state('test02', {
      url: '/test02',
      component: 'test02'
    });

    // translation hardcoded (can use a static file loader or url loader etc)
    var translationsEN = {
      ACTION_1: 'Open a chequing account',
      ACTION_2: 'Open a savings account',
      ACTION_3: 'Open a U.S. Dollar account',
      ACTION_4: 'Review my everyday banking needs ......... .......... .......... ..........',
      ACTION_5: 'Switch to TD',
      ACTION_6: 'Apply for Overdraft Protection'
    };
    
    var translationsFR= {
      ACTION_1: 'lorem ipsum 1',
      ACTION_2: 'lorem ipsum 2',
      ACTION_3: 'lorem ipsum 3',
      ACTION_4: 'lorem ipsum 4',
      ACTION_5: 'lorem ipsum 5',
      ACTION_6: 'lorem ipsum 6'
    };

    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('fr', translationsFR);
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('sanitize');

  }
