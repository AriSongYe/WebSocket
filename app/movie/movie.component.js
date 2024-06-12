'use strict';

angular.module('movie')
  .component('movieComponent', {
    templateUrl : 'movie/movie.template.html',
    controller: ['$http', function movieController($http){
      var self = this;
      self.movieUrl = 'https://yts.mx/api/v2/list_movies.json';

      $http.get(self.movieUrl)
        .then(function(response) {
          console.log('Movie details fetched:', response.data);  // 데이터 로그 출력
          self.movieList = response.data;
        })
        .catch(function(error) {
          console.error('Error get movie details:', error);
        })
    }]
  }) 