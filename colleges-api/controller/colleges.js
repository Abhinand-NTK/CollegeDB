const readColleges=require('../colleges/college')


const totalColleges=async(req,res)=>{

	console.log("The functihon call frim the frontend")
   const colleges=await readColleges()
    var str = { 
		total : colleges.length
	};

	res.send(JSON.stringify(str));
	
}

const collegesSearch=async(req,res)=>{
    const colleges=await readColleges()
    var keyword = req.query.search.toLowerCase();
	var result = [];

	for(var i = 0 ; i < colleges.length ; i++){

		if(colleges[i][2].toLowerCase().indexOf(keyword)>=0){	

			colleges[i][2] = colleges[i][2].replace(/\:[^>]*\)/ig,"");
			colleges[i][2] = colleges[i][2].replace(/(\(Id)/ig,"");

			colleges[i][1] = colleges[i][1].replace(/\:[^>]*\)/ig,"");
			colleges[i][1] = colleges[i][1].replace(/(\(Id)/ig,"");

			result.push(colleges[i]);
		}
	}

	res.send(JSON.stringify(result));
}


const collegeStates=async(req,res)=>{

	console.log("The request is reaching the end point")
	
    const colleges=await readColleges()
    const {states,offsets}=req.query
	var state = states.toLowerCase();
	var offset = offsets;
	var result = [];	
	

	for(var i = 0 ; i < colleges.length; i++){

		if(colleges[i][4].toLowerCase().indexOf(state)>=0){		

			colleges[i][2] = colleges[i][2].replace(/\:[^>]*\)/ig,"");
			colleges[i][2] = colleges[i][2].replace(/(\(Id)/ig,"");

			colleges[i][1] = colleges[i][1].replace(/\:[^>]*\)/ig,"");
			colleges[i][1] = colleges[i][1].replace(/(\(Id)/ig,"");		

			result.push(colleges[i]);				
		}
	}

	// var limitResult = [];
	// var count = 0;

	// console.log("This is the result",result)
	// console.log("wORKING")
	// var limit = Number(offset) + 10;

	// for(i = offset ; i < limit ; i++){

	// 	limitResult.push(result[i]);

	// }

	// console.log(result)

	res.send(JSON.stringify(result));
}




const collegesDistrict=async(req,res)=>{
    const colleges=await readColleges()
    const {districts,offsets}=req.query
	var district = districts.toLowerCase();
	var offset = offsets;
	var result = [];	
	

	for(var i = 0 ; i < colleges.length; i++){

		if(colleges[i][5].toLowerCase().indexOf(district)>=0){	

			colleges[i][2] = colleges[i][2].replace(/\:[^>]*\)/ig,"");
			colleges[i][2] = colleges[i][2].replace(/(\(Id)/ig,"");

			colleges[i][1] = colleges[i][1].replace(/\:[^>]*\)/ig,"");
			colleges[i][1] = colleges[i][1].replace(/(\(Id)/ig,"");
						
			result.push(colleges[i]);				
		}
	}

	var limitResult = [];
	var count = 0;

	if(offset == -1){

		res.send(JSON.stringify(result));

	}else{
		var limit = Number(offset) + 10;

		for(i = offset ; i < limit ; i++){

			limitResult.push(result[i]);
			
		}

		res.send(JSON.stringify(limitResult));
	}

	
}


const allStates=async(req,res)=>{
    var result = [];		
    const colleges=await readColleges()
	for(var i = 1 ; i < colleges.length; i++){
		if(result.indexOf(colleges[i][4]) < 0 ){

				result.push(colleges[i][4]);

		}else{
			
		}
		
	}	

	res.send(JSON.stringify(result));
}


const allDistricts=async(req,res)=>{
    const colleges=await readColleges()
    var state = req.query.district.toLowerCase();
	var result = [];

	for(var i = 0 ; i < colleges.length ; i++){

		if(colleges[i][4].toLowerCase().indexOf(state)>=0){		

			if(result.indexOf(colleges[i][5])< 0){

				result.push(colleges[i][5]);

			}		
		}
	}

	res.send(JSON.stringify(result));

}

module.exports={
    allDistricts,
    allStates,
    collegeStates,
    collegesDistrict,
    collegesSearch,
    totalColleges
}