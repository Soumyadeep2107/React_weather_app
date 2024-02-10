const Dates = ({ city }) => {
  const apiKey = "cdbb9bb9e06c4573812185129230406";
  const apiUrl = "https://api.weatherapi.com/v1/current.json?key=";

  const getDayFullName = (num) => {
    switch (num) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Don't Know";
    }
  };

  const getMonthFullName = (num) => {
    switch (num) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "Don't Know";
    }
  };

  const checkDate = async () => {
    try {
      const response = await fetch(apiUrl + apiKey + `&q=${city}`);
      const data = await response.json();

      const exactTime = data.location.localtime.split(" ")[1];
      const exactDate = data.location.localtime.split(" ")[0];
      const exactDay = getDayFullName(new Date(exactDate).getDay());
      const exactMonth = getMonthFullName(new Date(exactDate).getMonth());

      const exactHour = exactTime.split(":")[0];
      const exactMinute = exactTime.split(":")[1];

      document.getElementById('date').innerHTML =
        exactHour + `:` + exactMinute + ` - ` + exactDay + `, ` + new Date(exactDate).getDate() + ` ` + exactMonth + ` ` + new Date(exactDate).getFullYear();
    } catch (error) {
      console.error("Error fetching date data:", error);
      alert("Error fetching date data. Please try again.");
    }
  };
};

export default Dates;
