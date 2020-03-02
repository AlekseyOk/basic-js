module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) == false) return false;
  
  let team = [];

  for (let item of members) {
    if (typeof item == 'string') {

      let str = item.trim();
      team.push(str[0].toUpperCase());

    }
  };

  return team.sort().join('');
};