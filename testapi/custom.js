const endpoint = 'https://www.gov.uk/bank-holidays.json';
fetch(endpoint)
     .then((response) => response.json())
     .then((data) => console.log(data));
