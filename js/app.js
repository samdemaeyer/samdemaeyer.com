angular
    .module('app', [
        'ngAnimate', 
        'ngTouch',
        'ui.router',
        'duScroll',
        'ngSanitize',
        'ngDialog'
    ])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: function($scope){
                    $scope.title = "Home";
                    $scope.items = ['item1', 'item2', 'item3'];
                }
            })
            .state('funStuff', {
                url: '/funStuff',
                templateUrl: 'templates/funStuff.html'
            })
    }])
    .value('duScrollGreedy', true)
    .value('duScrollDuration', 1000)
    .value('duScrollOffset', 130)
    .controller('ScrollCtrl', function ($scope, $document) {
        // $document.scrollTopAnimated(400).then(function() {
        //     console && console.log('You just scrolled to the top!');
        // });
        // var someElement = angular.element(document.getElementById('some-id'));
        // $document.scrollToElementAnimated(someElement);
    })
    .controller('SliderCtrl', function ($scope) {
        $scope.slides = [
            {myHTML:'<div class="counter"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span></div>' +  
                    '&lt<span class="element">body</span>><br>' + 
                    '   &lt;<span class="element">div</span> <span class="green">class</span>=<span class="yellow">"container"</span> <span class="green">ng-app</span>=<span class="yellow">"app"</span>><br>' + 
                    '      &lt;<span class="element">header</span> <span class="green">ng-include</span>=<span class="yellow">"&#39;templates/nav.html&#39;"</span>>&lt;/<span class="element">header</span>><br>' + 
                    '      &lt;<span class="element">div</span> <span class="green">ui-view</span>>&lt;/<span class="element">div</span>><br>' + 
                    '      &lt;<span class="element">footer</span> <span class="green">ng-include</span>=<span class="yellow">"&#39;templates/footer.html&#39;"</span>>&lt;/<span class="element">footer</span>><br>' + 
                    '   &lt;/<span class="element">div</span>><br>' + 
                    '   &lt;<span class="element">script</span> <span class="green">src</span>=<span class="yellow">"//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"</span>>&lt;/<span class="element">script</span>><br>' + 
                    '   &lt;<span class="element">script</span> <span class="green">src</span>=<span class="yellow">"https://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.min.js"</span>>&lt;/<span class="element">script</span>><br>' + 
                    '   &lt;<span class="element">script</span> <span class="green">src</span>=<span class="yellow">"https://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular-animate.min.js"</span>>&lt;/<span class="element">script</span>><br>' + 
                    '   &lt;<span class="element">script</span> <span class="green">src</span>=<span class="yellow">"https://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular-touch.min.js"</span>>&lt;/<span class="element">script</span>><br>' + 
                    '   &lt;<span class="element">script</span> <span class="green">src</span>=<span class="yellow">"http://angular-ui.github.io/ui-router/release/angular-ui-router.js"</span>>&lt;/<span class="element">script</span>><br>' + 
                    '   &lt;<span class="element">script</span> <span class="green">src</span>=<span class="yellow">"http://cdnjs.cloudflare.com/ajax/libs/gsap/1.10.3/TweenMax.min.js"</span>>&lt;/<span class="element">script</span>><br>' + 
                    '   &lt;<span class="element">script</span> <span class="green">type</span>=<span class="yellow">"text/javascript"</span> <span class="green">src</span>=<span class="yellow">"js/sanitize.js"</span></span>>&lt;/<span class="element">script</span>><br>' + 
                    '   &lt;<span class="element">script</span> <span class="green">type</span>=<span class="yellow">"text/javascript"</span> <span class="green">src</span>=<span class="yellow">"js/scroll.js"</span></span>>&lt;/<span class="element">script</span>><br>' + 
                    '   &lt;<span class="element">script</span> <span class="green">type</span>=<span class="yellow">"text/javascript"</span> <span class="green">src</span>=<span class="yellow">"js/app.js"</span></span>>&lt;/<span class="element">script</span>><br>' +
                    '&lt/<span class="element">body</span>>'
                    , description: 'HTML'},
            {myHTML:'<div class="counter"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span></div>' +  
                    '<span class="comment">// part of angularjs-code for this website</span><br>' +
                    'angular.module(<span class="yellow">&#39;app</span><span class="yellow">&#39;</span>,[<span class="yellow">&#39;ngAnimate</span><span class="yellow">&#39;</span>,<span class="yellow">&#39;ngTouch</span><span class="yellow">&#39;</span>,<span class="yellow">&#39;ui.router</span><span class="yellow">&#39;</span>,<span class="yellow">&#39;duScroll</span><span class="yellow">&#39;</span>,<span class="yellow">&#39;ngSanitize</span><span class="yellow">&#39;</span>])<br>' +
                    '.controller(<span class="yellow">&#39;SliderCtrl&#39;</span>, <span class="blue">function</span> (<span class="orange">$scope</span>) {<br>' +
                    '   <span class="blue">$scope.</span><span class="green">setCurrentSlideIndex</span> = <span class="blue">function</span> (<span class="orange">index</span>) {<br>' +
                    '       <span class="element">$</span>scope.direction <span class="element">=</span> (index <span class="element">> $</span>scope.currentIndex) ? <span class="yellow">&#39;left&#39;</span> : <span class="yellow">&#39;right&#39;</span>;<br>' +
                    '       <span class="element">$</span>scope.currentIndex <span class="element">=</span> index;<br>' +
                    '   };<br>' +
                    '   <span class="blue">$scope.</span><span class="green">isCurrentSlideIndex</span> <span class="element">=</span> <span class="blue">function</span> (<span class="orange">index</span>) {<br>' +
                    '       <span class="element">return $</span>scope.currentIndex <span class="element">===</span> index;<br>' +
                    '   };<br>' +
                    '   <span class="blue">$scope</span>.<span class="green">prevSlide</span> = <span class="blue">function</span> () {<br>' +
                    '       <span class="element">$</span>scope.direction <span class="element">=</span> <span class="yellow">&#39;left&#39;</span>;<br>' +
                    '       <span class="element">$</span>scope.currentIndex <span class="element">=</span> (<span class="element">$</span>scope.currentIndex <span class="element">< $</span>scope.slides.<span class="blue">length</span> <span class="element">-</span> <span class="number">1</span>) ? <span class="element">++$</span>scope.currentIndex : <span class="number">0</span>;<br>' +
                    '   };<br>' + 
                    '});'
                    , description: 'Javascript (Angularjs)'},
            {myHTML:'<div class="counter"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span></div>' +  
                    '<span class="element">pre</span>{<br>' + 
                    '   <span class="property">margin</span>: <span class="number">8</span><span class="element">px</span> <span class="number">0</span><span class="element">px</span>;<br>' + 
                    '   <span class="property">background</span>: <span class="number">#272822</span>;<br>' + 
                    '   <span class="property">font-size</span>: <span class="number">0.85</span><span class="element">em</span>;<br>' + 
                    '   <span class="property">line-height</span>: <span class="number">1.6</span>;<br>' + 
                    '   <span class="property">tab-size</span>: <span class="number">2</span>;<br>' + 
                    '   <span class="property">-webkit-font-smoothing</span>: <span class="property">auto</span>;<br>' + 
                    '   <span class="property">font-family</span>: <span class="quotes">"Consolas"</span>,<span class="quotes">"Courier New"</span>,<span class="property">Courier</span>,<span class="property">monospace</span>;<br>' + 
                    '   <span class="property">color</span>:$MonokaiWhite;<span class="comment"> /*please write your comments here*/</span><br>' + 
                    '   <span class="element">span</span>{<br>' + 
                    '       <span class="element">&amp;</span><span class="class">.element</span>{<span class="property">color</span>:$MonokaiPink;}<br>' + 
                    '       <span class="element">&amp;</span><span class="class">.noStyle</span>{<span class="property">color</span>:$MonokaiWhite;}<br>' + 
                    '       <span class="element">&amp;</span><span class="class">.property</span>{<span class="property">color</span>:$MonokaiBlue;}<br>' + 
                    '       <span class="element">&amp;</span><span class="class">.number</span>{<span class="property">color</span>:$MonokaiPurple;}<br>   }<br>}'
                    , description: 'sass (SCSS)'},
            {myHTML:'<div class="counter"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span></div>' +  
                    '<span class="element">$</span>(<span class="yellow">"#Country"</span>).live(<span class="yellow">"change"</span>, <span class="blue">function</span>() {<br>' +
                    '    <span class="blue">var</span> selected <span class="element">= $</span>(<span class="yellow">"option:selected"</span>, this).<span class="blue">text</span>();<br>' +
                    '    <span class="element">$</span>(<span class="yellow">"input.callmePhone"</span>).attr(<span class="yellow">"value"</span>, getCountryCode(selected));<br>' +
                    '});<br>' +
                    '<span class="element">$</span>(<span class="yellow">"#form_menu_02</span>").validate({<br>' +
                    '   rules: {<br>' +
                    '        FirstName: <span class="yellow">"required"</span>,<br>' +
                    '        RegEmail: {<br>' +
                    '            required: <span class="number">true</span>,<br>' +
                    '            email: <span class="number">true</span>,<br>' +
                    '        }<br>' +
                    '    <span class="green">submitHandler</span>: <span class="blue">function</span> (<span class="orange">form</span>) {<br>' +
                    '    <span class="element">if</span> (FldHP_02.<span class="blue">length</span> <span class="element">===</span> <span class="number">0</span>) {<br>' +
                    '        form.<span class="blue">submit</span>();<br>' +
                    '    };<br>' +
                    '}'
                    , description: 'Javascript (jQuery)'}
        ];
        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    })
    .controller('FormController',function($scope, $http, ngDialog) {
        $scope.formData = {};
        $scope.submission = false;
        var param = function(data) {
            var returnString = '';
            for (d in data){
                if (data.hasOwnProperty(d))
                   returnString += d + '=' + data[d] + '&';
            }
            // Remove last ampersand and return
            return returnString.slice( 0, returnString.length - 1 );
        };
        $scope.submitForm = function () {
            $http({
                method : 'POST',
                url : 'process.php',
                data : param($scope.formData), // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data){
                if (!data.success) {
                    $scope.errorName = data.errors.name;
                    $scope.errorEmail = data.errors.email;
                    $scope.errorSubject = data.errors.subject;
                    $scope.errorMessage = data.errors.message;
                    $scope.submissionMessage = data.messageError;
                    $scope.submission = true; //shows the error message
               } else {
                    ngDialog.open({ template: 'templateId'})
                    $scope.formData = {}; // form fields are emptied with this line
                    $scope.submission = false; //shows the success message
               }
            })
        }
    })
    .animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    });
