const favCitiesArray = [];
const saveFavCityName = (event) => {
  const buttonTarget = $(event.currentTarget);

  if (buttonTarget.is("button")) {
    const cityName = buttonTarget.parent().find("input").val();

    const cityNameObject = {
      cityName,
    };

    favCitiesArray.push(cityNameObject);

    localStorage.setItem("favoriteCities", JSON.stringify(favCitiesArray));
  }
};

const renderLastFavoriteCity = (lastFavoriteCity) => {
  const favCityShown = `<div class="border my-3">
  <h2>${lastFavoriteCity.cityName} (8/15/2019) icon</h2>
  <p>Temperature: 90.9 <sup>o</sup>F</p>
  <p>Humidity: 41%</p>
  <p>Wind Speed: 4.7 MPH</p>
  <p>UV Index:<button type="button" class="btn btn-danger btn-sm">9.49</button></p>
</div>`;

  return favCityShown;
};

const renderFavoriteCities = (favoriteCities) => {
  const favCityTable = $("#favCityTable");
  const mainContainer = $("#mainContainer");

  const constructFavCityListItem = (favoriteCity) => {
    const FavCityListItem = `<tr class="table-light">
      <td class="table-light">${favoriteCity.cityName}</td>
    </tr>`;
    return FavCityListItem;
  };

  const tableItem = favoriteCities.map(constructFavCityListItem);
  favCityTable.append(tableItem);

  const lastFavoriteCity = favoriteCities[favoriteCities.length - 1];

  const favCityShown = renderLastFavoriteCity(lastFavoriteCity);
  mainContainer.prepend(favCityShown);
};

const fetchCityName = (url) => {
  const functionForJSON = (responseObject) => {
    if (responseObject.status !== 200) {
      throw new Error("Internal Server Error");
    }
    return responseObject.json();
  };

  const functionForApplication = (dataFromServer) => {
    console.log(dataFromServer.name);
  };

  const functionForError = (errorObject) => {
    // to do hello appears for a second in console 404 takes ages then cant be accessed
    // console.log("hello");
    // window.location.assign("../404.html");
  };

  fetch(url)
    .then(functionForJSON)
    .then(functionForApplication)
    .catch(functionForError);
};

const onReady = () => {
  const favoriteCities = JSON.parse(localStorage.getItem("favoriteCities"));
  console.log(favoriteCities);
  if (favoriteCities === null) {
    localStorage.setItem("favoriteCities", JSON.stringify({}));
  } else {
    renderFavoriteCities(favoriteCities);
  }

  const getFavCityName = (favoriteCity) => {
    const favCityName = favoriteCity.cityName;

    return favCityName;
  };

  const favCityName = favoriteCities.map(getFavCityName);
  console.log(favCityName);

  fetchCityName(
    `https://api.openweathermap.org/data/2.5/weather?q=${favCityName[0]}&appid=75a79666144d741cccab04915c11e69b`
  );
};

$("#searchBtn").click(saveFavCityName);
$(document).ready(onReady);
