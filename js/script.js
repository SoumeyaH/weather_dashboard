const favCitiesArray = [];
const saveFavCityName = (event) => {
  const buttonTarget = $(event.currentTarget);

  if (buttonTarget.is("button")) {
    const cityName = buttonTarget.parent().find("input").val();

    const cityNameObject = {
      cityName,
    };

    favCitiesArray.push(cityNameObject);

    console.log(favCitiesArray);
    localStorage.setItem("favoriteCities", JSON.stringify(favCitiesArray));
  }
};
$("#searchBtn").click(saveFavCityName);
