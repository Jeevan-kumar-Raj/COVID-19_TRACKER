import axios from 'axios';

const states_daily = 'https://api.covid19india.org/data.json';

export const fetchData = async (states_daily) => {
  let cases_time_series = states_daily;

  if (states_daily) {
    cases_time_series = `${cases_time_series}/status/${states_daily}`;
  }

  try {
    const { data: { Confirmed, Recovered, Deceased} } = await axios.get(cases_time_series);

    return { Confirmed, Recovered, Deceased };
  } catch (error) {
    return error;
  }
};


export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://api.covid19india.org/states_daily.json');
  
      return data.map(({ Confirmed, Recovered, Deceased }) => ({ Confirmed, Recovered, Deceased }));
    } catch (error) {
      return error;
    }
  };

export const fetchState = async () => {
  try {
    const { data: { states_daily } } = await axios.get(`${states_daily}/states_daily`);

    return states_daily.map((states_daily) => states_daily.status);
  } catch (error) {
    return error;
  }
};
