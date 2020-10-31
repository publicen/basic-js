const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (!date) return "Unable to determine the time of year!";
  
  try {date.getTime()} 
  	catch (error) throw new Error('THROWN ' + error);
  let month = date.getMonth();
  if (month > 1 && month < 5) return 'spring';
  if (month > 4 && month < 8) return 'summer';
  if (month > 7 && month < 11) return 'autumn';
  if (month === 11 || (month >= 0 && month < 2)) return 'winter';
}
