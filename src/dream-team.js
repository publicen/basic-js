const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members))   return (members.filter(str => typeof str === 'string'))
    .map(member => member.trim().toUpperCase().slice(0, 1)).sort().join('');
    else return false;
}
