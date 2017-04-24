export const test01 = {
  template: require('./app.html'),
  controller($scope, $http, $translate) {
    // your code here
    var vm = $scope;

    // default locale
    vm.locale = 'en';

    vm.refreshActions = function (){
      $http.get('/test01/data.json').then(function(data){
        //debugger;
        vm.origActions = data.data;

        vm.actions = vm.origActions;
        vm.numActions = vm.actions.length;
      });
    }

    // init buttons
    //vm.actions = vm.getActions();

    vm.changeLocale = function (locale) {
      vm.locale = locale;
      $translate.use(locale);
    };

    vm.changeActionLength = function(length){
      vm.actions = vm.origActions.slice(0, length);
      vm.numActions = length;
    }
  }
};


