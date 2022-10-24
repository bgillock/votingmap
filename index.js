// Initialize and add the map
var geocoder;
var map;
function dumpMarker(name,address,dates) {

    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
          document.getElementById("locs").innerHTML += 
            "        addMarker(\"" + name + "\",\"" + address + "\",\"" + dates + "\"," + results[0].geometry.location.lat() + "," + results[0].geometry.location.lng() + ");<br>";
          var marker = new google.maps.Marker({
              title: name,
              map: map,
              position: results[0].geometry.location
          });
        }
      });
}
function addMarker(name,address,dates,lat,lng) {
    var marker = new google.maps.Marker({
        title: dates.replace(/,/g,"\n"),
        map: map,
        position: { lat: lat, lng: lng }
    });
}
function initMap() {
    geocoder = new google.maps.Geocoder();
    const houston = { lat: 29.820, lng: -95.467 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: houston,
      });

    // The location of Houston
    addMarker(" ABOVE AND BEYOND FELLOWSHIP(BOTH) "," 20498 RHODES ROAD SPRING TX 77388 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",30.0640296,-95.4958269);
    addMarker(" ACRES HOMES MULTI SERVICE CENTER(BOTH) "," 6719 WEST MONTGOMERY ROAD HOUSTON TX 77091 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.85748359999999,-95.4221761);
    addMarker(" ALIEF ISD ADMINISTRATION BUILDING(BOTH) "," 4250 COOK ROAD HOUSTON TX 77072 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7117125,-95.5967687);
    addMarker(" BIG STONE LODGE(BOTH) "," 709 RILEY FUZZEL ROAD SPRING TX 77373 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",30.089762,-95.4099863);
    addMarker(" ALIEF ISD CENTER FOR TALENT DEVELOPMENT(BOTH) "," 14411 WESTHEIMER ROAD HOUSTON TX 77082 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.73429579999999,-95.6407017);
    addMarker(" BAYTOWN COMMUNITY CENTER(BOTH) "," 2407 MARKET STREET BAYTOWN TX 77520 - 6204 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7271882,-94.9965526);
    addMarker(" CHINESE CIVIC CENTER(BOTH) "," 5905 SOVEREIGN DRIVE HOUSTON TX 77036 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.71353989999999,-95.5532786);
    addMarker(" ALVIN D BAGGETT COMMUNITY CENTER(BOTH) "," 1302 KEENE STREET GALENA PARK TX 77547 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7419693,-95.23690479999999);
    addMarker(" BAKERRIPLEY EAST ALDINE CAMPUS(BOTH) "," 3000 ALDINE MAIL ROUTE ROAD HOUSTON TX 77039 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.9020288,-95.34323599999999);
    addMarker(" BAYLAND PARK COMMUNITY CENTER(BOTH) "," 6400 BISSONNET STREET HOUSTON TX 77074 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.6952295,-95.4962776);
    addMarker(" C. E. KING 9TH GRADE CENTER(BOTH) "," 8530 C E KING PARKWAY HOUSTON TX 77044 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8482916,-95.2120257);    addMarker(" CHINESE CIVIC CENTER(BOTH) "," 5905 SOVEREIGN DRIVE HOUSTON TX 77036 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ");
    addMarker(" CLEVELAND RIPLEY NEIGHBORHOOD CENTER(BOTH) "," 720 FAIRMONT PARKWAY PASADENA TX 77504 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.6505311,-95.2014861);
    addMarker(" EAST HARRIS COUNTY ACTIVITY CENTER(BOTH) "," 7340 SPENCER HIGHWAY PASADENA TX 77505 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.6605181,-95.12569889999999);
    addMarker(" DAMASCUS MISSIONARY BAPTIST CHURCH(BOTH) "," 3122 CENTER STREET HOUSTON TX 77077 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7701654,-95.3920737);
    addMarker(" CITY OF SOUTH HOUSTON MUNICIPAL COURT(BOTH) "," 1019 DALLAS STREET SOUTH HOUSTON TX 77587 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.6650143,-95.23900549999999);
    addMarker(" EL FRANCO LEE COMMUNITY CENTER(BOTH) "," 9500 HALL ROAD HOUSTON TX 77089 - 1042 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.5983945,-95.2516725);
    addMarker(" EVELYN KENNEDY CIVIC CENTER(BOTH) "," 618 SAN JACINTO STREET LA PORTE TX 77571 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.65906,-95.0160113);
    addMarker(" CROSBY BRANCH LIBRARY(BOTH) "," 135 HARE ROAD CROSBY TX 77532 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.92091,-95.06698519999999);
    addMarker(" DENVER HARBOR PARK COMMUNITY CENTER(BOTH) "," 6402 MARKET STREET HOUSTON TX 77020 - 6840 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7720713,-95.3047777);
    addMarker(" CITY JERSEY VILLAGE MUNICIPAL GOVERNMENT CENTER(BOTH) "," 16327 LAKEVIEW DRIVE HOUSTON TX 77040 - 2029 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8832435,-95.5694551);
    addMarker(" DELMAR TUSA SPORTS COMPLEX(BOTH) "," 2020 MANGUM ROAD HOUSTON TX 77092 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8028486,-95.4572227);
    addMarker(" FAIRFIELD INN AND SUITES(BOTH) "," 10825 N GESSNER RD HOUSTON TX 77064 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.9317726,-95.54585569999999);    addMarker(" FALLBROOK CHURCH(BOTH) "," 12512 WALTERS ROAD HOUSTON TX 77014 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ");
    addMarker(" FIRST CONGREGATIONAL CHURCH(BOTH) "," 10840 BEINHORN RD HOUSTON TX 77024 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7782731,-95.5047187);
    addMarker(" HARRIS COUNTY SCARSDALE ANNEX(BOTH) "," 10851 SCARSDALE BOULEVARD HOUSTON TX 77089 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.5846241,-95.2142507);
    addMarker(" HAMPTON INN AND SUITES HOUSTON KATY(BOTH) "," 22055 KATY FREEWAY KATY TX 77450 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7833353,-95.7543417);
    addMarker(" GREEN HOUSE INTERNATIONAL CHURCH(BOTH) "," 200 WEST GREENS ROAD HOUSTON TX 77067 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.950093,-95.4198134);
    addMarker(" HCC NORTH FOREST CAMPUS(BOTH) "," 6010 LITTLE YORK ROAD HOUSTON TX 77016 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8705815,-95.29908499999999);
    addMarker(" FREEMAN BRANCH LIBRARY(BOTH) "," 16616 DIANA LANE HOUSTON TX 77062 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.557794,-95.1193486);
    addMarker(" HARDY STREET SENIOR CITIZENS CENTER(BOTH) "," 11901 WEST HARDY ROAD HOUSTON TX 77076 - 1220 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8748125,-95.3672497);    addMarker(" HARRIS COUNTY SCARSDALE ANNEX(BOTH) "," 10851 SCARSDALE BOULEVARD HOUSTON TX 77089 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ");
    addMarker(" HCC NORTH FOREST CAMPUS(BOTH) "," 6010 LITTLE YORK ROAD HOUSTON TX 77016 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8705815,-95.29908499999999);
    addMarker(" HCPL MAUD SMITH MARKS BRANCH LIBRARY(BOTH) "," 1815 WESTGREEN BOULEVARD KATY TX 77450 - 5370 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7576522,-95.7331908);
    addMarker(" HCC ALIEF CENTER(BOTH) "," 13803 BISSONNET HOUSTON TX 77083 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.6804373,-95.6259168);
    addMarker(" HCC SOUTHEAST COLLEGE BUILDING D(BOTH) "," 6815 RUSTIC STREET HOUSTON TX 77087 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7046824,-95.29762099999999);
    addMarker(" HCC WEST LOOP SOUTH(BOTH) "," 5601 WEST LOOP SOUTH HOUSTON TX 77081 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7214016,-95.4573046);
    addMarker(" HIRAM CLARKE MULTI SERVICE CENTER(BOTH) "," 3810 WEST FUQUA STREET HOUSTON TX 77045 - 6402 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.6141624,-95.4329674);
    addMarker(" HOLIDAY INN EXPRESS & SUITES HOUSTON MEMORIAL - CITY CENTRE(BOTH) "," 10500 KATY FREEWAY HOUSTON TX 77043 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7857267,-95.5578312);
    addMarker(" HOSANNA LUTHERAN CHURCH(BOTH) "," 16526 ELLA BLVD HOUSTON TX 77090 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",30.0093015,-95.44543159999999);
    addMarker(" HCPL BARBARA BUSH BRANCH(BOTH) "," 6817 CYPRESSWOOD DRIVE SPRING TX 77379 - 7705 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",30.0123959,-95.5096569);
    addMarker(" HOCKLEY COMMUNITY CENTER(BOTH) "," 28515 OLD WASHINGTON ROAD HOCKLEY TX 77447 - 7842 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",30.0323478,-95.8618869);
    addMarker(" HOLIDAY INN EXPRESS & SUITES ATASCOCITA(BOTH) "," 5619 FARM TO MARKET 1960 ROAD EAST HUMBLE TX 77346 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.999227,-95.18854979999999);    addMarker(" HOLIDAY INN EXPRESS &amp; SUITES HOUSTON MEMORIAL - CITY CENTRE(BOTH) "," 10500 KATY FREEWAY HOUSTON TX 77043 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ");
    addMarker(" HOSANNA LUTHERAN CHURCH(BOTH) "," 16526 ELLA BLVD HOUSTON TX 77090 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",30.0093015,-95.44543159999999);
    addMarker(" JUERGENS HALL COMMUNITY CENTER(BOTH) "," 26026 HEMPSTEAD HIGHWAY CYPRESS TX 77429 - 7321 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.9707408,-95.6991997);
    addMarker(" JOHN PAUL LANDING ENVIRONMENTAL EDUCATION CENTER(BOTH) "," 9950 KATY HOCKLEY ROAD CYPRESS TX 77433 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.9108774,-95.8073151);
    addMarker(" J D WALKER COMMUNITY CENTER(BOTH) "," 7613 WADE ROAD BAYTOWN TX 77521 - 8338 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8064867,-95.01731149999999);
    addMarker(" HUMBLE CIVIC CENTER(BOTH) "," 8233 WILL CLAYTON PARKWAY HUMBLE TX 77338 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.9801272,-95.2588945);
    addMarker(" JOHN PHELPS COURTHOUSE(BOTH) "," 101 SOUTH RICHEY STREET PASADENA TX 77506 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7117586,-95.2192457);
    addMarker(" JOHN KNOX PRESBYTERIAN CHURCH(BOTH) "," 2525 GESSNER ROAD HOUSTON TX 77080 - 3800 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8167943,-95.54628249999999);
    addMarker(" HOUSTON COMMUNITY COLLEGE NORTHLINE(BOTH) "," 8001 FULTON STREET HOUSTON TX 77022 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.833151,-95.3776788);
    addMarker(" JOHN P MCGOVERN TEXAS MEDICAL CENTER COMMONS(BOTH) "," 6550 BERTNER AVENUE HOUSTON TX 77030 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7095071,-95.3976386);
    addMarker(" KASHMERE MULTISERVICE CENTER(BOTH) "," 4802 LOCKWOOD DRIVE HOUSTON TX 77026 - 2941 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8042734,-95.3165585);
    addMarker(" KATY BRANCH HARRIS COUNTY PUBLIC LIBRARY(BOTH) "," 5414 FRANZ ROAD KATY TX 77493 - 1717 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.80218099999999,-95.817576);    addMarker(" KINGWOOD COMMUNITY CENTER(BOTH) "," 4102 RUSTIC WOODS DRIVE KINGWOOD TX 77345 - 1350 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ");
    addMarker(" KLEIN MULTIPURPOSE CENTER(BOTH) "," 7500 FM 2920 SPRING TX 77379 - 2204 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",30.0775247,-95.5372446);
    addMarker(" LONE STAR COLLEGE VICTORY CENTER(BOTH) "," 4141 VICTORY DRIVE HOUSTON TX 77088 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8679386,-95.4659065);
    addMarker(" MISSION BEND ISLAMIC CENTER(BOTH) "," 6233 TRES LAGUNAS HOUSTON TX 77083 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7098962,-95.6379903);
    addMarker(" MARTIN FLUKINGER COMMUNITY CENTER(BOTH) "," 16003 LORENZO STREET CHANNELVIEW TX 77530 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.77547229999999,-95.12061039999999);
    addMarker(" METROPOLITAN MULTISERVICE CENTER(BOTH) "," 1475 WEST GRAY STREET HOUSTON TX 77019 - 4926 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7521691,-95.3997662);
    addMarker(" LA QUINTA INN & SUITES BY WYNDHAM HOUSTON GALLERIA(BOTH) "," 1625 WEST LOOP SOUTH HOUSTON TX 77027 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7502428,-95.4546432);
    addMarker(" LONE STAR COLLEGE CREEKSIDE(BOTH) "," 8747 WEST NEW HARMONY TRAIL TOMBALL TX 77375 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",30.1413848,-95.5534426);
    addMarker(" LONE STAR COLLEGE NORTH HARRIS(BOTH) "," 2005 W W THORNE BOULEVARD HOUSTON TX 77073 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",30.0044068,-95.390675);
    addMarker(" MOODY PARK COMMUNITY CENTER(BOTH) "," 3725 FULTON STREET HOUSTON TX 77009 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7940314,-95.3651271);
    addMarker(" MILTON LUSK ACTIVITY CENTER(BOTH) "," 1022 MERCURY DRIVE HOUSTON TX 77029 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7705243,-95.24828620000001);
    addMarker(" MASJID ALSALAM(BOTH) "," 16700 OLD LOUETTA ROAD SPRING TX 77379 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",30.0086593,-95.56229119999999);    addMarker(" NEIGHBORHOOD CENTERS INC RIPLEY HOUSE CAMPUS(BOTH) "," 4410 NAVIGATION BOULEVARD HOUSTON TX 77011 - 1036 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ");
    addMarker(" PRAIRIE VIEW A&M UNIVERSITY NORTHWEST(BOTH) "," 9449 GRANT ROAD HOUSTON TX 77070 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.9658645,-95.5587025);
    addMarker(" RICHARD AND MEG WEEKLEY COMMUNITY CENTER(BOTH) "," 8440 GREENHOUSE ROAD CYPRESS TX 77433 - 5135 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.9000337,-95.7042365);
    addMarker(" RAINDROP TURKISH HOUSE(BOTH) "," 9301 WEST BELLFORT BOULEVARD HOUSTON TX 77031 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.6546327,-95.54610129999999);
    addMarker(" NORTH EAST COMMUNITY CENTER(BOTH) "," 10918 BENTLY STREET HOUSTON TX 77093 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8749546,-95.33369839999999);
    addMarker(" NORTH CHANNEL BRANCH LIBRARY(BOTH) "," 15741 WALLISVILLE ROAD HOUSTON TX 77049 - 4607 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.810893,-95.1569299);
    addMarker(" NORTHEAST MULTI SERVICE CENTER(BOTH) "," 9720 SPAULDING STREET HOUSTON TX 77016 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.851429,-95.30403489999999);
    addMarker(" SAINT JOHN LUTHERAN CHURCH(BOTH) "," 15235 SPRING CYPRESS ROAD CYPRESS TX 77429 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.9826135,-95.65709249999999);
    addMarker(" SAINT PHILIP NERI CATHOLIC CHURCH(BOTH) "," 10960 MARTIN LUTHER KING BOULEVARD HOUSTON TX 77048 - 1896 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.6413584,-95.3383156);
    addMarker(" NOTTINGHAM PARK BUILDING(BOTH) "," 926 COUNTRY PLACE DRIVE HOUSTON TX 77079 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7761637,-95.5986289);
    addMarker(" RILEY CHAMBERS COMMUNITY CENTER(BOTH) "," 808 1/2 MAGNOLIA AVENUE CROSBY TX 77532 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8665796,-95.075099);
    addMarker(" NRG ARENA(BOTH) "," 1 NRG PKWY HOUSTON TX 77054 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.6853036,-95.4104129);    addMarker(" SAMUEL MATTHEWS PARK COMMUNITY CENTER(BOTH) "," 1728 HUFSMITH ROAD TOMBALL TX 77375 - 4918 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ");
    addMarker(" TOM BASS PARK COMMUNITY CENTER SECTION THREE(BOTH) "," 15108 CULLEN BOULEVARD HOUSTON TX 77047 - 6714 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.5896324,-95.3536816);
    addMarker(" SAN JACINTO COMMUNITY CENTER(BOTH) "," 604 HIGHLAND WOODS DRIVE HIGHLANDS TX 77562 - 4546 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8197125,-95.0656025);
    addMarker(" STEVE RADACK COMMUNITY CENTER(BOTH) "," 18650 CLAY ROAD HOUSTON TX 77084 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8315304,-95.6915425);
    addMarker(" TEXAS SOUTHERN UNIVERSITY(BOTH) "," 3100 CLEBURNE STREET HOUSTON TX 77004 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7216751,-95.3598537);
    addMarker(" SHRINE OF THE BLACK MADONNA CULTURAL AND EVENT CENTER(BOTH) "," 5309 MARTIN LUTHER KING BLVD HOUSTON TX 77021 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.702732,-95.33286939999999);
    addMarker(" SUNNYSIDE MULTI SERVICE CENTER(BOTH) "," 9314 CULLEN BOULEVARD HOUSTON TX 77051 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.6564607,-95.3578508);
    addMarker(" SPJST LODGE NUM 88(BOTH) "," 1435 BEALL STREET HOUSTON TX 77008 - 3441 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7971093,-95.41966719999999);
    addMarker(" THE GRAND TUSCANY HOTEL(BOTH) "," 12801 NORTHWEST FREEWAY HOUSTON TX 77040 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8423658,-95.49591989999999);
    addMarker(" SAN JACINTO COLLEGE GENERATION PARK(BOTH) "," 13455 LOCKWOOD ROAD HOUSTON TX 77029 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.9187062,-95.2128848);
    addMarker(" THE COLLECTIVE-THE POWER CENTER(BOTH) "," 12401 SOUTH POST OAK ROAD HOUSTON TX 77045 - 2020 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.6457435,-95.4625459);
    addMarker(" SHERATON HOUSTON BROOKHOLLOW HOTEL(BOTH) "," 3000 NORTH LOOP WEST FREEWAY HOUSTON TX 77092 - 8810 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.8045947,-95.44985299999999);    addMarker(" TOMBALL PUBLIC WORKS BUILDING(BOTH) "," 501 B JAMES STREET TOMBALL TX 77375 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ");
    addMarker(" UNIVERSITY OF HOUSTON STUDENT CENTER(BOTH) "," 4455 UNIVERSITY DRIVE HOUSTON TX 77004 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7200551,-95.3409338);
    addMarker(" VERA BRUMMET MAY COMMUNITY CENTER(BOTH) "," 2100 WOLF ROAD HUFFMAN TX 77336 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",30.05831749999999,-95.062634);
    addMarker(" UNIVERSITY OF HOUSTON CLEAR LAKE(BOTH) "," 2700 BAY AREA BLVD HOUSTON TX 77058 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.5866039,-95.09697530000001);
    addMarker(" TRACY GEE COMMUNITY CENTER(BOTH) "," 3599 WESTCENTER DRIVE HOUSTON TX 77042 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.725982,-95.5534426);
    addMarker(" TRINI MENDENHALL COMMUNITY CENTER(BOTH) "," 1414 WIRT ROAD HOUSTON TX 77055 - 4917 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7957811,-95.4842532);
    addMarker(" WEBSTER CIVIC CENTER(BOTH) "," 311 PENNSYLVANIA AVENUE WEBSTER TX 77598 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.5333461,-95.11829019999999);
    addMarker(" UNIVERSITY OF HOUSTON-DOWNTOWN(BOTH) "," 201 GIRARD STREET HOUSTON TX 77002 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7664468,-95.360026);
    addMarker(" WHEELER AVENUE BAPTIST CHURCH(BOTH) "," 3826 WHEELER AVENUE BUILDING D HOUSTON TX 77004 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.7182931,-95.352058);
    addMarker(" VICTORY HOUSTON(BOTH) "," 809 WEST ROAD HOUSTON TX 77038 "," 10/24/2022-10/29/2022 07:00 AM-07:00 PM,10/30/2022-10/30/2022 12:00 PM-07:00 PM,10/31/2022-11/02/2022 07:00 AM-07:00 PM,11/03/2022-11/03/2022 07:00 AM-10:00 PM,11/04/2022-11/04/2022 07:00 AM-07:00 PM ",29.9141579,-95.433568);
}  
window.initMap = initMap;