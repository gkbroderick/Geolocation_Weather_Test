<?php
// from http://stackoverflow.com/a/7134433
header('Access-Control-Allow-Origin: *');

$var = $_POST['lattitude'];
// $url = "http://graphical.weather.gov/xml/SOAP_server/ndfdXMLclient.php?whichClient=NDFDgenMultiZipCode&zipCodeList=98122&product=time-series&maxt=maxt&mint=mint&Submit=Submit";

// $url = "http://graphical.weather.gov/xml/SOAP_server/ndfdXMLclient.php?whichClient=NDFDgenMultiZipCode&zipCodeList=98122&product=time-series&maxt=maxt&mint=mint&Submit=Submit";
$url = "http://graphical.weather.gov/xml/SOAP_server/ndfdXMLclient.php?whichClient=NDFDgen&lat=38.99&lon=-77.01&listLatLon=&lat1=&lon1=&lat2=&lon2=&resolutionSub=&listLat1=&listLon1=&listLat2=&listLon2=&resolutionList=&endPoint1Lat=&endPoint1Lon=&endPoint2Lat=&endPoint2Lon=&listEndPoint1Lat=&listEndPoint1Lon=&listEndPoint2Lat=&listEndPoint2Lon=&zipCodeList=&listZipCodeList=&centerPointLat=&centerPointLon=&distanceLat=&distanceLon=&resolutionSquare=&listCenterPointLat=&listCenterPointLon=&listDistanceLat=&listDistanceLon=&listResolutionSquare=&citiesLevel=&listCitiesLevel=&sector=&gmlListLatLon=&featureType=&requestedTime=&startTime=&endTime=&compType=&propertyName=&product=time-series&begin=&end=2019-07-30T00%3A00%3A00&Unit=e&maxt=maxt&mint=mint&wx=wx&Submit=Submit";


$str = file_get_contents($url);
echo($str);
?>