const API_URL = `http://localhost:8080`;

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcwOTQxOTkzMX0.Z2BQ8hc7goaTyp6nbRCORVICdiyuyieMrR2Uw-MwW3Y";

export default () => {
  return fetch(`${API_URL}/todos`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
