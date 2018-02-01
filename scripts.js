var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);
// $('#search').click(searchCapitol);

function searchCountries() {
  var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
      url: url + countryName,
      method: 'GET',
      success: showCountriesList
    });
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
    $('<li>').text(item.name).appendTo(countriesList);
  });
}

// function searchCapitol() {
//   var countryCapitol = $('capitol-name').val();
//     if(!countryCapitol.length) countryCapitol = 'Warsaw';
//     $.ajax({
//       url: url + countryCapitol,
//       method: 'GET',
//       success: showCountriesList
//     });
//   }    