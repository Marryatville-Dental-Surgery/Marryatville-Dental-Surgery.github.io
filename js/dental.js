$(document).ready(function() {
    
    var hillcrest = true;
    var firstStr = "Hillcrest";
    var secondStr = "Marryatville";
    var firstName = "Dr. Brigitta Pannell";
    var secondName = "Dr. Mark Pannell";
    var hillcrestUa = "UA-74220824-1";
    var marryatvilleUa = "UA-74220824-2";
    
    if (window.location.hostname.toLowerCase().includes("marryatville")) {
        hillcrest = false;
        var tmp = firstStr;
        firstStr = secondStr;
        secondStr = tmp;
        
        tmp = firstName;
        firstName = secondName;
        secondName = tmp;
    }
    
    var surgeryNames = firstStr + " &amp; " + secondStr + " Dental Surgery";
    var surgeryNamesRaw = surgeryNames.replace("&amp;", "&");
    var surgeryShortNames = firstStr + " &amp; " + secondStr;
    var dentistNames = firstName + " <span class=\"italic\">BDS (Adel)</span> &amp; " + secondName + " <span class=\"italic\">BDS (Adel)</span>";
    var dentistShortNames = firstName + " &amp; " + secondName;
    
    $(document).attr("title", surgeryNamesRaw);
    $("meta[name='description']").attr("content", surgeryNamesRaw);
    $("#header").html(surgeryNames);
    $("#headernames").html(dentistNames);
    $("#surgeryshortname").html(surgeryShortNames);
    $("#dentistshortname").html(dentistShortNames);
    $("#copyright").html(surgeryShortNames);
    
    firstStrImg = firstStr.toLowerCase();
    secondStrImg = secondStr.toLowerCase();
    $("#photo-1").css("background-image", "url(images/" + firstStrImg + "-1.jpg)");
    $("#photo-2").css("background-image", "url(images/" + firstStrImg + "-2.jpg)");
    $("#photo-3").css("background-image", "url(images/" + firstStrImg + "-3.jpg)");
    $("#photo-4").css("background-image", "url(images/" + secondStrImg + "-1.jpg)");
    $("#photo-5").css("background-image", "url(images/" + secondStrImg + "-2.jpg)");
    $("#photo-6").css("background-image", "url(images/" + secondStrImg + "-3.jpg)");
    $("#photo-1").find("img").attr("src", "images/" + firstStrImg + "-1.jpg");
    $("#photo-2").find("img").attr("src", "images/" + firstStrImg + "-2.jpg");
    $("#photo-3").find("img").attr("src", "images/" + firstStrImg + "-3.jpg");
    $("#photo-4").find("img").attr("src", "images/" + secondStrImg + "-1.jpg");
    $("#photo-5").find("img").attr("src", "images/" + secondStrImg + "-2.jpg");
    $("#photo-6").find("img").attr("src", "images/" + secondStrImg + "-3.jpg");
    $("#photo-1").find("img").attr("alt", firstStrImg + " Dental Surgery Chair");
    $("#photo-2").find("img").attr("alt", firstStrImg + " Dental Surgery Reception");
    $("#photo-3").find("img").attr("alt", firstStrImg + " Dental Surgery Front");
    $("#photo-4").find("img").attr("alt", secondStrImg + " Dental Surgery Chair");
    $("#photo-5").find("img").attr("alt", secondStrImg + " Dental Surgery Reception");
    $("#photo-6").find("img").attr("alt", secondStrImg + " Dental Surgery Front");

    if (!hillcrest) {        
        $("#hillcrest-hours-li").toggleClass("active");
        $("#marryatville-hours-li").toggleClass("active");
        
        $("#hillcrest-contacttabs").toggleClass("active");
        $("#marryatville-contacttabs").toggleClass("active");
        
        $("#hillcrest-contact").toggleClass("in active");
        $("#marryatville-contact").toggleClass("in active");
        
        $("#hillcrest-hours").toggleClass("in active");
        $("#marryatville-hours").toggleClass("in active");
    }
    
    var map1latlng = new google.maps.LatLng(-34.858647, 138.653173);
    var map2latlng = new google.maps.LatLng(-34.926311, 138.650366);
	var map1 = initMap("map1", map1latlng);
    var map2 = initMap("map2", map2latlng);
    $(".main-nav a").click(function(){  
        $(".main-nav .active").removeClass("active");      
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.'+theClass).parent('li').addClass('active');
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 80
        }, 400);
        $('.navbar-collapse').collapse('hide');
        return false;
    });
    $('.scrollTop a').scrollTop();
    
    $("#promo-3-owl").owlCarousel({
        slideSpeed : 2000,
        paginationSpeed : 2000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoPlay: true,
        loop: true
    });
    
    $("#map1tab").on('shown.bs.tab', function(){
        google.maps.event.trigger(map1, 'resize');
        map1.setCenter(map1latlng);
    });
    
    $("#map2tab").on('shown.bs.tab', function(){
        google.maps.event.trigger(map2, 'resize');
        map2.setCenter(map2latlng);
    });
    
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', hillcrest ? hillcrestUa : marryatvilleUa, 'auto');
    ga('send', 'pageview');
});

function initMap(elem, latlng) {
	if($("#" + elem).length==0){
		return 0;
	};

    var mapOptions = {
        center: latlng,
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        },
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
		}
                    
    var map = new google.maps.Map(document.getElementById(elem),mapOptions);
    var marker = new google.maps.Marker({
        map: map,
        position: map.getCenter() 
    });
    
    $(window).resize(function() {
      map.setCenter(latlng);
    });
    
    return map;

}
/*
$(".headroom").headroom({
});
*/
