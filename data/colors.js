/*
* @preserve flag-colors {{ version }}
* http://reimertz.github.io/flag-colors
* (c) 2016 Pierre Reimertz
* may be freely distributed under the MIT license.
*/

var _colors = require('./colors.json');

var colors = _colors.map(function(flag){
  return flag.colors.map(function(color, index){
    //filter out anything less than 3%
    if(color.percent < 3) return null;

    return {
        image: flag.url,
        name: flag.name.toLowerCase().replace(/\s/g,'-')  + ((index > 0) ? ('-' + (index+1)) : ''),
        hex: color.hex
      }
  })
});

colors = [].concat.apply([], colors);
colors = colors.filter(function(n){ return n != undefined });

colors.sort(function(a,b){
  return a.order - b.order
});

function getAll() {
  return colors;
}

function find(name) {
  return colors.filter(function(brand){
    return brand.name === name;
  });
}

exports.getAll = getAll;
exports.find = find;
