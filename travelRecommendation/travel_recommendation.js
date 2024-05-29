//define ajax target
var xhr = new XMLHttpRequest();
var url = './travel_reccomendation_api.json';
xhr.open('GET', url, true);
// set content to json
xhr.responseType = 'json';
// = start html handoff
var countryDiv = document.createElement('div');
//change below to match json source
countries.forEach(function(country) {
    var countryDiv = document.createElement('div');
    countryDiv.classList.add('country');
    var title = document.createElement('h2');
    title.textContent = country.name;
    var description = document.createElement('p');
    description.textContent = country.description;
    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:'; //bring image instead of Ways to acheive
    var waysList = document.createElement('ul');
    country.ways_to_achieve.forEach(function(way) {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });
    var benefitsHeader = document.createElement('h3'); //try image here first for potential formatting
    benefitsHeader.textContent = 'Benefits:';
    var benefitsList = document.createElement('ul');
    article.benefits.forEach(function(benefit) {
      var listItem = document.createElement('li');
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);
    articlesDiv.appendChild(articleDiv);
  });
