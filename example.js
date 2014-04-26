
var characterID = '1009410';

var requestObject = function() {
						return(
							{'ts': '1398541614409',
					 	 	 'privateKey': '0673db901ec0e86725fa1132310f6f8e6ee75c1c',
					 	 	 'apikey': '8f45a9ca60fd35092b39873cabac3328',
					 	 	 'hash': 'a2ee237124cc4dc508e4511382fcd964'})
					}




var getCharacterByCharacterID = function(characterID) {
	var url = 'http://gateway.marvel.com/v1/public/characters/' + characterID
	var requestData = new requestObject()
	return($.getJSON(url, requestData));
}