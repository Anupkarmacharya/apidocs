var currentUser={
	name:'Mary'
};

/**
*@api{get}/user Request User information
*@apiName GetUser
*@apiGroup User
*@apiVersion 0.3.0
*
*@apiSuccess {String} name The users name.
*@apiSuccess {Number} age Calculated age from Birthday
*@apiSuccess {Class} Batch Your Current Batch
*
*@apiSuccessExample Example data on success:
*{
* name:'Paul',
* age:27,
* batch:3rd Year
*}
*/
function getUser(){
	return {code:200, data:currentUser};
}

function setName(name){
	if(name.length ===0){

		return {code:404, message:'NameEmptyError'};}

	currentUser.name = name;
	return {code:204};
}
