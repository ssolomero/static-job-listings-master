'use strict';

angular.module('jobListing').component('jobListing', {
    templateUrl: 'job-listing/job-listing.template.html',
    controller: ['$http', function JobListController($http) {
        var self = this;

        $http.get('data.json').then(function(response) {
            self.jobs = response.data;
        });

        // // initial items
        // self.items = [];

        // // add an item
        // self.add = function() {
    	//     self.items.push($scope.input);
        // };

        // // remove an item
        // self.remove = function(index) {
    	//     self.items.splice(index, 1);
        // };
    }]
});