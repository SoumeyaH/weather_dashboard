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
  console.log(favoriteCities);
};

const onReady = () => {
  const favoriteCities = JSON.parse(localStorage.getItem("favoriteCities"));

  if (favoriteCities === null) {
    console.log("hello");
    localStorage.setItem("favoriteCities", JSON.stringify({}));
  } else {
    renderFavoriteCities(favoriteCities);
  }
};

$("#searchBtn").click(saveFavCityName);
$(document).ready(onReady);
