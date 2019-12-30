<?php

if (isset($_GET["type"])){
	$type = $_GET["type"];
	if($type != "list"){
		header("HTTP/1.1 400 Invalid Request");
		die("HTTP/1.1 400 Invalid Request - you passed in a wrong type parameter.");
	}
	nameList();
} else {
	ranks();
}

function nameList(){
	$names_array = array();
	
	// read 'ranks.txt' file, extract all the names, and fill the '$names_array' with the extracted names  
	// 'ranks.txt' file을 한줄 한줄 읽고, 모든 이름을 추출하여, 추출한 이름들로 '$names_array'를 채우시오
    $filename = "ranks.txt";
    foreach(file($filename) as $filejson){
		array_push($names_array, );			
    }


	
	if ($names_array) {
		// produce and emit all the names extracted from the 'ranks.txt' as an output in JSON data format   
		// 'ranks.txt'에서 추출한 모든 이름들을 JSON 데이터 형식으로 만들어 내보내시오
        $filename = "ranks.txt";
        foreach(file($filename) as $filejson){
		array_push($output, );			
        }
	}
}


	} else {
		header("HTTP/1.1 410 Gone");
		die("HTTP/1.1 410 Gone - There is no data!.");
	}
}

	
function ranks(){
	
	$name = get_parameter("name");
	
	$ranks = "";
	// read 'ranks.txt' file, extract a line that contains a matching 'name' parameter value   
	// 'ranks.txt' file을 한줄 한줄 읽고, 'name' 매개변수의 값을 가진 줄(line)을 추출하시오

    $filename = "ranks.txt";
     $lines = file($filename);
    foreach ($lines as $line){
        
    }




	
	if ($ranks) {
		// emit a retured ranking data from the 'generate_xml' function as an output in XML data format
		// 'generate_xml' 함수에서 반화하는 랭킹 데이터를 XML 데이터 형식으로 만들어 내보내시오



	} else {
		header("HTTP/1.1 410 Gone");
		die("HTTP/1.1 410 Gone - There is no data for this name/gender.");
	}
}


function generate_xml($ranks) {
	/* create and return an XML DOM data for the given set of rangkins ($ranks)
	 * for example, the data, "Scott 406 412 454 442 177 36 15 17 39 75 163", would produce the following XML:
	 * <ranks>
	 *    <rank year="1900">406</rank>
	 *    <rank year="1910">412</rank>
	 *    ...
	 * </ranks>
	 * Note that the year is from 1900 to 2000 and increasing by 10 for each record
	 *
	 * 주어진 랭킹 집합 ($ranks)에 대한 XML DOM 데이터를 생성하여 반환 하시오
	 * 예를 들어, "Scott 406 412 454 442 177 36 15 17 39 75 163" 데이터는 다음과 같은 XML을 생성함 :
	 * <ranks>
	 *    <rank year="1900">406</rank>
	 *    <rank year="1910">412</rank>
	 *    ...
	 * </ranks>
	 * 참고로 년도는 1900 에서 2000 까지 각 기록마다 10년씩 증가
	 */






}

function get_parameter($name) {
	if (isset($_GET[$name])) {
		return $_GET[$name];
	} else {
		header("HTTP/1.1 400 Invalid Request");
		die("HTTP/1.1 400 Invalid Request - you forgot to pass a '$name' parameter.");
	}
}
?>