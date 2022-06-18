function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

	$scope.services = [
		{
			name: 'Web Development',
			price: 300,
			active:true
		},{
			name: 'Design',
			price: 400,
			active:false
		},{
			name: 'Integration',
			price: 250,
			active:false
		},{
			name: 'Training',
			price: 220,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}



//////////////
var app = angular.module("", []);


app.filter('searchFor', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			url: 'http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/',
			title: '50 Must-have plugins for extending Twitter Bootstrap',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg'
		},
		{
			url: 'http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/',
			title: 'Making a Super Simple Registration System With PHP and MySQL',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg'
		},
		{
			url: 'http://tutorialzine.com/2013/08/slideout-footer-css/',
			title: 'Create a slide-out footer with this neat z-index trick',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg'
		},
		{
			url: 'http://tutorialzine.com/2013/06/digital-clock/',
			title: 'How to Make a Digital Clock with jQuery and CSS3',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg'
		},
		{
			url: 'http://tutorialzine.com/2013/05/diagonal-fade-gallery/',
			title: 'Smooth Diagonal Fade Gallery with CSS3 Transitions',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg'
		},
		{
			url: 'http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/',
			title: 'Mini AJAX File Upload Form',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg'
		},
		{
			url: 'http://tutorialzine.com/2013/04/services-chooser-backbone-js/',
			title: 'Your First Backbone.js App – Service Chooser',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg'
		}
	];


}


