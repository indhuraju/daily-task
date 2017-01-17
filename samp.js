// var app=angular.module('myapp',[]);
// app.controller('myCtrl',function($scope)
// {
//   $scope.FirstName="Hari";
//   $scope.LastName="Ram";
//   });

angular.module('myapp',[]).controller('namesCtrl',function($scope)
{
  $scope.names=[
    // {name : 'Jan',country: 'Germany'},
    // {name : 'Hellen', country: 'France'},
    // {name : 'Harry', country: 'Hong Kong'}
  'Jan',
  'Hellen',
  'Harry'
  ];
});
