const toSave = 'Oslo';
localStorage.setItem('lastvisitcity', toSave);

const lastCity = localStorage.getItem('lastvisitcity');
console.log(lastCity);