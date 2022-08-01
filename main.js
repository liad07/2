    var $$log=console.log.bind(document);
    var $$id=document.getElementById.bind(document);
    var $$class=document.getElementsByClassName.bind(document);
    var $$=document.querySelectorAll.bind(document);
    var $$write=document.write.bind(document)
    var $$alert=window.alert.bind(document)
    var $$wether=["city","country","description","temp","imgsrc"]
    var $$ip=""

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            $$log("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        var x = "";
        let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
        $.ajax({
            url: "https://geolocation-db.com/jsonp",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function( location ) {
                $$ip=(location.IPv4);
            }
        });
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=4fbee6f796d9742c10ccc097c5c76006&units=metric",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function (location) {
                var cel = Math.floor(location.main.temp);
                $$wether[3]=(cel + "°");
                $$wether[0]=((location.name));
                $$wether[4]= "https://github.com/yuvraaaj/openweathermap-api-icons/raw/master/icons/" + location.weather[0].icon + ".png"
                $$wether[2]=((location.weather[0].description));
                $$wether[1]=(regionNames.of(location.sys.country));
            }
        })
        $$log($$wether)
        $$log($$ip)

    }


