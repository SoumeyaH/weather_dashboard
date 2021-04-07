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

const renderFavoriteCities = (favoriteCities) => {
  const favCityTable = $("#favCityTable");

  const constructFavCityListItem = (favoriteCity) => {
    console.log(favoriteCity.cityName);
    const FavCityListItem = `<tr>
      <td>${favoriteCity.cityName}</td>
    </tr>`;
    return FavCityListItem;
  };

  const tableItem = favoriteCities.map(constructFavCityListItem);
  console.log(tableItem);
  favCityTable.append(tableItem);
};

const onReady = () => {
  const favoriteCities = JSON.parse(localStorage.getItem("favoriteCities"));

  if (favoriteCities === null) {
    localStorage.setItem("favoriteCities", JSON.stringify({}));
  } else {
    renderFavoriteCities(favoriteCities);
  }
};

$("#searchBtn").click(saveFavCityName);
$(document).ready(onReady);
