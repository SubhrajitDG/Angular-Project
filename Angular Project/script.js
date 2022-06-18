// var app = angular.module('myApp', []);
var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'first.html',
      controller: 'FirstController',
    })

    .when('/second', {
      templateUrl: 'second.html',
      controller: 'SecondController',
    })

    .when('/third', {
      templateUrl: 'third.html',
      controller: 'ThirdController',
    })

    .when('/fourth', {
      templateUrl: 'fourth.html',
      controller: 'FourthController',
    })

    .otherwise({ redirectTo: '/' });
});

app.filter('searchFor', function () {
  return function (arr, searchString) {
    if (!searchString) {
      return arr;
    }

    var result = [];

    searchString = searchString.toLowerCase();

    angular.forEach(arr, function (item) {
      if (item.title.toLowerCase().indexOf(searchString) !== -1) {
        result.push(item);
      }
    });

    return result;
  };
});

function OrderFormController($scope) {
  // Define the model properties. The view will loop
  // through the services array and genreate a li
  // element for every one of its items.

  $scope.services = [
    {
      name: 'Web Development',
      price: 300,
      active: true,
    },
    {
      name: 'Design',
      price: 400,
      active: false,
    },
    {
      name: 'Integration',
      price: 250,
      active: false,
    },
    {
      name: 'Training',
      price: 220,
      active: false,
    },
  ];

  $scope.toggleActive = function (s) {
    s.active = !s.active;
  };

  // Helper method for calculating the total price

  $scope.total = function () {
    var total = 0;

    // Use the angular forEach helper method to
    // loop through the services array:

    angular.forEach($scope.services, function (s) {
      if (s.active) {
        total += s.price;
      }
    });

    return total;
  };

  $scope.items = [
    {
      url: 'http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/',
      title: '50 Must-have plugins for extending Twitter Bootstrap',
      image:
        'http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg',
    },
    {
      url: 'http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/',
      title: 'Making a Super Simple Registration System With PHP and MySQL',
      image:
        'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg',
    },
    {
      url: 'http://tutorialzine.com/2013/08/slideout-footer-css/',
      title: 'Create a slide-out footer with this neat z-index trick',
      image:
        'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg',
    },
    {
      url: 'http://tutorialzine.com/2013/06/digital-clock/',
      title: 'How to Make a Digital Clock with jQuery and CSS3',
      image:
        'http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg',
    },
    {
      url: 'http://tutorialzine.com/2013/05/diagonal-fade-gallery/',
      title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
      image:
        'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg',
    },
    {
      url: 'http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/',
      title: 'Mini AJAX File Upload Form',
      image:
        'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg',
    },
    {
      url: 'http://tutorialzine.com/2013/04/services-chooser-backbone-js/',
      title: 'Your First Backbone.js App – Service Chooser',
      image:
        'http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg',
    },
  ];
}

window.onload = function () {
  var navHome = document.getElementById('navHome');
  var navItems = document.getElementById('navItems');
  var navSearch = document.getElementById('navSearch');
  var navAbout = document.getElementById('navAbout');

  var firstSection = document.getElementById('first.html');
  var secondSection = document.getElementById('second.html');
  var thirdSection = document.getElementById('third.html');
  var fourthSection = document.getElementById('fourth.html');

  navHome.onclick = function () {
    firstSection.style.display = 'block';
    secondSection.style.display = 'none';
    thirdSection.style.display = 'none';
    fourthSection.style.display = 'none';
  };
  navItems.onclick = function () {
    firstSection.style.display = 'none';
    secondSection.style.display = 'block';
    thirdSection.style.display = 'none';
    fourthSection.style.display = 'none';
  };
  navSearch.onclick = function () {
    firstSection.style.display = 'none';
    secondSection.style.display = 'none';
    thirdSection.style.display = 'block';
    fourthSection.style.display = 'none';
  };
  navAbout.onclick = function () {
    firstSection.style.display = 'none';
    secondSection.style.display = 'none';
    thirdSection.style.display = 'none';
    fourthSection.style.display = 'block';
  };

  var items = document.querySelectorAll('#item');
  var input = document.querySelectorAll('#input');
  input.forEach((element) => {
    element.value =
      element.parentElement.previousElementSibling.firstElementChild.innerText; //get the product name of current element into input value
    element.oninput = function () {
      element.parentElement.previousElementSibling.firstElementChild.innerText =
        element.value;
    };
    element.onblur = function () {
      element.style.display = 'none';
    };
  });

  var editBtn = document.querySelectorAll('#editBtn');
  editBtn.forEach((element) => {
    element.onclick = function () {
      element.nextElementSibling.style.display === 'none'
        ? (element.nextElementSibling.style.display = 'block')
        : (element.nextElementSibling.style.display = 'none');
    };
  });
  console.log(editBtn);
};
