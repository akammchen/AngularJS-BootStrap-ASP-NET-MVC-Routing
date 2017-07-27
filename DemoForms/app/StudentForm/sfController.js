studentFormsApp.controller('sfController',
    function sfController($scope, sfService) {
        $scope.student = sfService.student;

        $scope.departments = [
               "Math",
               "Physics",
               "Chemistry",
               "English"
        ];
        $scope.submitForm = function () {
            alert("Form submitted");
            //AJAX calls, validations, will be covered later.
        }
    });