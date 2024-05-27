// Declare a variable named xhr to create a new XMLHttpRequest object as follows in health_article.js file:

var xhr = new XMLHttpRequest();
// Create another variable named url to define the URL of the JSON file and fetched as follows:

var url = './health.json';
// Now, you need to prepare a GET request to the specified URL, which you have saved in a variable named url in asynchronous mode in the health_article.js file as follows:

xhr.open('GET', url, true);

// he open method configures an XHR request with the following parameters:

// 'GET': Specifies the HTTP method used for the request (in this case, a GET request).
// URL: Represents the URL from where you will fetch the data.
// True: Indicates if the request is asynchronous (true) or synchronous (false). In this case, it's set to true for asynchronous operation, allowing other scripts to run while the request is processed.

// In this step, you need to inform the XMLHttpRequest object that the expected response from the server should be in JSON format.

// For this, you need to set the expected response type to JSON format in health_article.js file as follows:

xhr.responseType = 'json';

// You need to define what should happen when the data is successfully loaded using

//.    xhr.onload = function() { ... } function.
// Inside this function, you need to include:

// var articles = xhr.response.articles;
// var articlesDiv = document.getElementById('articles');

xhr.onload =  function () { 
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
   
 };

// Now, you need to iterate health data to fetch on the front page using loops. For this, you need to use the forEach array method as follows:

 articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');
    var title = document.createElement('h2');
    title.textContent = article.title;
    var description = document.createElement('p');
    description.textContent = article.description;
    var waysHeader = document.createElement('h3');
    waysHeader.textContent = 'Ways to Achieve:';
    var waysList = document.createElement('ul');
    article.ways_to_achieve.forEach(function(way) {
      var listItem = document.createElement('li');
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });
    var benefitsHeader = document.createElement('h3');
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

  var articleDiv = document.createElement('div');
  articleDiv.classList.add('article'); 
  articleDiv.appendChild(title);
  xhr.send();