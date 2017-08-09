jQuery(document).ready(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshowSpeed: 5000,
        smoothHeight:true
    });

    var gallery = $('.danceStyle a').simpleLightbox({
        close: true,
        closeText: "x",
        disableScroll: true,
        showCounter: false
    });

    var gallery = $('.fit a').simpleLightbox({
        close: true,
        closeText: "x",
        disableScroll: true,
        showCounter: false
    });

    // FOR SCROLL ANIMATIONS
    window.scrollReveal = new scrollReveal();

    $(document).load(function () {
        $(".preloader").fadeOut("slow");
        $(".preloader").remove();
    });

    //this code is for smooth scroll and nav selector
    $(document).ready(function () {
		if($(".homePage").length > 0)
        	$(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 500, 'swing', function () {
                //window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
			return false;
        });
    });

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.navbar-default .navbar-nav>li>a.menu').each(function () {
            var currLink = $(this);
            var refElement = $($(currLink[0]).attr("href"));
            if (refElement.position().top <= scrollPos + 45 && 
				refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-default .navbar-nav>li>a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }

    var windowScrollPosTop = jQuery(window).scrollTop();
    if (windowScrollPosTop >= 150) {
        $("header").addClass("header-shrink");
    } else {
        $("header").removeClass("header-shrink");
    }
    //this code is for animation nav
    jQuery(window).scroll(function () {
        var windowScrollPosTop = jQuery(window).scrollTop();
        if (windowScrollPosTop >= 150) {
            $("header").addClass("header-shrink");
        } else {
            $("header").removeClass("header-shrink");
        }
    });
});

jQuery(document).ready(function ($) {
		if($("#home").length > 0){
            //var _SlideshowTransitions = [
            //Fade
            //{ $Duration: 1200, $Opacity: 2 }
			//{$Duration:600,$Delay:100,$Rows:7,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Opacity:2}
			//{$Duration:800,$Delay:150,$Cols:10,$Clip:1,$Move:true,$Formation:$JssorSlideshowFormations$.$FormationCircle,$Assembly:264,$Easing:$JssorEasing$.$EaseInBounce}
            //];
var _SlideshowTransitionC = {};
        var _SlideshowTransitionCodes = {};
        var _SlideshowTransitions = [];

        //----------- Float Effects --------------
        {

            _SlideshowTransitionC["Float Right Random"] = { $Duration: 600, x: -1, $Delay: 50, $Cols: 8, $Rows: 4, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
            _SlideshowTransitionCodes["Float Right Random"] = "{$Duration:600,x:-1,$Delay:50,$Cols:8,$Rows:4,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

            _SlideshowTransitionC["Float up Random"] = { $Duration: 600, y: 1, $Delay: 50, $Cols: 8, $Rows: 4, $SlideOut: true, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
            _SlideshowTransitionCodes["Float up Random"] = "{$Duration:600,y:1,$Delay:50,$Cols:8,$Rows:4,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

            _SlideshowTransitionC["Float up Random with Chess"] = { $Duration: 600, x: 1, y: -1, $Delay: 50, $Cols: 8, $Rows: 4, $SlideOut: true, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
            _SlideshowTransitionCodes["Float up Random with Chess"] = "{$Duration:600,x:1,y:-1,$Delay:50,$Cols:8,$Rows:4,$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

            _SlideshowTransitionC["Float Right ZigZag"] = { $Duration: 600, x: -1, $Delay: 50, $Cols: 8, $Rows: 4, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 513, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
            _SlideshowTransitionCodes["Float Right ZigZag"] = "{$Duration:600,x:-1,$Delay:50,$Cols:8,$Rows:4,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:513,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

            _SlideshowTransitionC["Float up ZigZag"] = { $Duration: 600, y: 1, $Delay: 50, $Cols: 8, $Rows: 4, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 264, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
            _SlideshowTransitionCodes["Float up ZigZag"] = "{$Duration:600,y:1,$Delay:50,$Cols:8,$Rows:4,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:264,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

            _SlideshowTransitionC["Float up ZigZag with Chess"] = { $Duration: 600, x: -1, y: -1, $Delay: 50, $Cols: 8, $Rows: 4, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationZigZag, $Assembly: 1028, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
            _SlideshowTransitionCodes["Float up ZigZag with Chess"] = "{$Duration:600,x:-1,y:-1,$Delay:50,$Cols:8,$Rows:4,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:1028,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

            _SlideshowTransitionC["Float Right Swirl"] = { $Duration: 600, x: -1, $Delay: 50, $Cols: 8, $Rows: 4, $SlideOut: true, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 513, $Easing: { $Left: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
            _SlideshowTransitionCodes["Float Right Swirl"] = "{$Duration:600,x:-1,$Delay:50,$Cols:8,$Rows:4,$SlideOut:true,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:513,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

            _SlideshowTransitionC["Float up Swirl"] = { $Duration: 600, y: 1, $Delay: 50, $Cols: 8, $Rows: 4, $SlideOut: true, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 2049, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
            _SlideshowTransitionCodes["Float up Swirl"] = "{$Duration:600,y:1,$Delay:50,$Cols:8,$Rows:4,$SlideOut:true,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:2049,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";

            _SlideshowTransitionC["Float up Swirl with Chess"] = { $Duration: 600, x: 1, y: 1, $Delay: 50, $Cols: 8, $Rows: 4, $SlideOut: true, $Reverse: true, $Formation: $JssorSlideshowFormations$.$FormationSwirl, $Assembly: 513, $ChessMode: { $Column: 3, $Row: 12 }, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Opacity: $Jease$.$OutQuad }, $Opacity: 2 };
            _SlideshowTransitionCodes["Float up Swirl with Chess"] = "{$Duration:600,x:1,y:1,$Delay:50,$Cols:8,$Rows:4,$SlideOut:true,$Reverse:true,$Formation:$JssorSlideshowFormations$.$FormationSwirl,$Assembly:513,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$OutQuad},$Opacity:2}";
        }

        $Jssor$.$Each(_SlideshowTransitionC, function (slideshowTransition, name) {
            _SlideshowTransitions.push(slideshowTransition);
        });
            var options = {
                $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
                $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
                $AutoPlayInterval: 3000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
                $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1

                $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
                $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
                $MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
                //$SlideWidth: $("body").width(),                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
                //$SlideHeight: 600,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
                $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
                $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                $ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
                $UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, arrow navigator container, thumbnail navigator container etc).
                $PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, 5 horizental reverse, 6 vertical reverse, default value is 1
                $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

                $SlideshowOptions: {                                //[Optional] Options to specify and enable slideshow or not
                    $Class: $JssorSlideshowRunner$,                 //[Required] Class to create instance of slideshow
                    $Transitions: _SlideshowTransitions,            //[Required] An array of slideshow transitions to play slideshow
                    $TransitionsOrder: 1,                           //[Optional] The way to choose transition to play slide, 1 Sequence, 0 Random
                    $ShowLink: true                                    //[Optional] Whether to bring slide link on top of the slider when slideshow is running, default value is false
                },

                $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
                    $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                    $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                    $SpacingX: 10,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                    $SpacingY: 10,                                   //[Optional] Vertical space between each item in pixel, default value is 0
                    $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
                },

                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                }
            };
            var jssor_slider1 = new $JssorSlider$("home", options);
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes
            function ScaleSlider() {
				var bodyWidth = $("body").width(); //document.body.clientWidth;
				if (bodyWidth)
					jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
				else
					window.setTimeout(ScaleSlider, 30);
			}
            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);	
		}			
});

function initialize() {
    var latlng = new google.maps.LatLng(19.0761239,72.8294876);
    var settings = {
        zoom: 19,
        center: latlng,
        scrollwheel: false,
        navigationControl: false,
        scaleControl: false,
        streetViewControl: false,
        draggable: true,
        mapTypeControl: true,
        mapTypeControlOptions: { style: google.maps.MapTypeControlStyle.DROPDOWN_MENU },
        navigationControl: true,
        navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), settings);
    var pointw = new google.maps.LatLng(19.0760823,72.8299858);

    var image = new google.maps.MarkerImage(
      'img/icon_marker.png',
      new google.maps.Size(42, 62),
      new google.maps.Point(0, 0),
      new google.maps.Point(19.0760823,72.8299858)
    );

    var markerw = new google.maps.Marker({
        draggable: false,
        raiseOnDrag: false,
        icon: image,
		title:"Kala Studio",
        //shadow: shadow,
        //shape: shape,
        map: map,
        position: pointw
    });
}