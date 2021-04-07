const saveFavCityName = (event) => {
  const buttonTarget = $(event.currentTarget);

  if (buttonTarget.is("button")) {
    console.log("hello");
  }
};
$("#searchBtn").click(saveFavCityName);
