'use strict';

angular.module('video')
  .component('videoComponent', {
    templateUrl : 'video/video.template.html',
    controller: ['$http', function videoController($http){
      var self = this;
      self.videoUrl = 'https://yts.mx/api/v2/list_movies.json';
      self.user = 'yechan';
      console.log('Movie component Test');

      $http.get(self.videoUrl)
        .then(function(response) {
          console.log('Movie details fetched:', response.data);  // 데이터 로그 출력
          self.movieDetails = response.data;
        })
        .catch(function(error) {
          console.error('Error get movie details:', error);
        })
    }]
  })