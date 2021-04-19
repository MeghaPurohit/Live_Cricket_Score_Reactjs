const API_KEY = "Q7QnLP30WBZPyratUq0ACxmyVBo1";
//get all the matches [ucoming matches]

export const getMatches = () => {
    const url= ` https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR : ",error));
};