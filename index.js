var fs = require('fs');
var path = require('path');
var jade = require('jade');

module.exports = function(content, file, conf){
	var fn;

	fn = jade.compileClient(content, conf);

	if(file.isMod){
		fn = 'define(\'' + file.getId() + '\', function(require, exports, module){ module.exports = ' + fn + ' \r\n});';
	}

	return fn;
}







































