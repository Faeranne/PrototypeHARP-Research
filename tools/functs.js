var question = '588872943124282030399478301168915802302423130847520232836494683907672278768724884179218375754768'
parseChar = function(character){
	let rot = 0;
	if(character==0){
		return 'v';
	}
	while(character > 26){
		character = character-26;
		rot += 1;
	}
	return {char:character,rot:rot};
}	
const splitAt = index => x => [x.slice(0, index), x.slice(index)]
getLetter = function(number,rot){
	let letters = 'abcdefghijklmnopqrstuvwxyz';
	let splits = splitAt(rot)(letters)
	letters = splits[1]+splits[0];
	return letters[number-1]
}

parseAllSegRot = function(characters,rots){
	let chunks = splitChars(characters);
	let result = ""
	chunks.forEach(function(char){
		let chars = parseChar(char);
		let num = chars.char
		let rot = chars.rot
		result += getLetter(num,rot);
	});
	return result;
}

parseAllCountRot = function(characters,rots){
	let chunks = splitChars(characters);
	let result = ""
	let rot = 0;
	chunks.forEach(function(char){
		if(rot = rots.length){
			rot = 0;
		}else{
			rot +=1;
		}
		let chars = parseChar(char);
		let num = chars.char
		result += getLetter(num,rots[rot]);
	});
	return result;
}

splitChars = function(numbers){
	return numbers.match(/.{1,2}/g);
}
