export const equalHeightDir = function($window, $timeout, $log) {
  var spec = {
      restrict: 'A',
      containerName: {},
      link: function (scope, element, attrs) {
    
          // get the groupName name, i.e. the value of the directive attribute
          var groupName = attrs.equalHeightContainer; 

          // get the className of elements that needs to be set to equal heights
          var elemClassName =  attrs.equalHeightElemClass;

          $timeout(setHeight); 
          angular.element($window).bind('resize', setHeight);

          function setHeight() {
              // if not exists then create the group object
              if (!spec.containerName[groupName]) { 
                  spec.containerName[groupName] = {
                      height: 0,
                      elems:[]
                  };
              }

              var groupObj = spec.containerName[groupName];
              var htmlElem = element[0].getElementsByClassName(elemClassName)[0];

              // use the container itself if no elements with class name
              if(!htmlElem)
                htmlElem = element[0];

              groupObj.elems.push(htmlElem);
              element.css('height', ''); 

              // check max height
              if (groupObj.height < htmlElem.offsetHeight) {
                  groupObj.height = htmlElem.offsetHeight;
              }
            
              if(scope.$last){ 
                  // set height of all elements to the max height
                  angular.forEach(groupObj.elems, htmlElem => {
                      htmlElem.style.height = groupObj.height+'px';
                  });
                  groupObj.height = 0;
              }
          }
      }
  };
  return spec;
}