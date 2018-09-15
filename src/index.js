module.exports = function check(str, bracketsConfig) {
  var result = false;
  var newStr;
  while (str.length != 0) {
    newStr = str;
    for (var i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][0] == '[' && bracketsConfig[i][1] == ']') {
        bracketsConfig[i][0] = '\\[';
        bracketsConfig[i][1] = '\\]';
      }
      var key = new RegExp('['+bracketsConfig[i][0]+']'+'['+bracketsConfig[i][1]+']', 'g');
      str = str.replace(key, '');
    }
    if (newStr == str) {
      return result = false;
      break;
    }
  }
  return result = true;
}
