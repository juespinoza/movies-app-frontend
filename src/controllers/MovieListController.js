const URL = "https://movie-distribuidas-back.herokuapp.com";
//const URL = "http://s1.ebrainte.com:47000";

export const getAllLists = async () => {
  const endpoint = `${URL}/api/getPublicMovieLists`;
  const options = {
    method: "GET",
  };
  try {
    let response = await fetch(endpoint, options);
    let responseStatus = response.status;
    let responseData = await response.json();

    switch (responseStatus) {
      case 200: {
        return {
          rdo: 0,
          mensaje: "OK",
          data: responseData,
        };
      }
      default: {
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
      }
    }
  } catch (error) {
    console.error("Error on POST /api/getPublicMovieLists", error);
    return { rdo: 1, mensaje: error };
  }
};

export const getMyLists = async (ownerData) => {
  const endpoint = `${URL}/api/getMyMovieLists`;
  const options = {
    method: "POST",
    body: JSON.stringify(ownerData),
    headers: { "Content-Type": "application/json" },
  };
  try {
    let response = await fetch(endpoint, options);
    let responseStatus = response.status;
    let responseData = await response.json();
    switch (responseStatus) {
      case 200: {
        return {
          rdo: 0,
          mensaje: "OK",
          data: responseData,
        };
      }
      default: {
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
      }
    }
  } catch (error) {
    console.error("Error on POST /api/getPublicMovieLists", error);
    return { rdo: 1, mensaje: error };
  }
};

export const getFollowingLists = async (userData) => {
  const endpoint = `${URL}/api/getFollowingMovieLists`;
  const options = {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  };
  try {
    let response = await fetch(endpoint, options);
    let responseStatus = response.status;
    let responseData = await response.json();

    switch (responseStatus) {
      case 200: {
        return {
          rdo: 0,
          mensaje: "OK",
          data: responseData,
        };
      }
      default: {
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
      }
    }
  } catch (error) {
    console.error("Error on POST /api/getFollowingMovieLists", error);
    return { rdo: 1, mensaje: error };
  }
};

export const createMovieList = async (data) => {
  const endpoint = `${URL}/api/insertMovieList`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };
  try {
    let response = await fetch(endpoint, options);
    let responseStatus = response.status;
    let responseData = await response.json();

    switch (responseStatus) {
      case 200: {
        return { rdo: 0, mensaje: "OK", data: responseData };
      }
      case 500: {
        return { rdo: 1, mensaje: "Hubo un problema al crear la lista" };
      }
      default: {
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
      }
    }
  } catch (error) {
    console.error("Error on POST /api/insertMovieList", error);
    return { rdo: 1, mensaje: error };
  }
};

export const updateMovieList = async (data) => {
  const endpoint = `${URL}/api/updateMovieList`;
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };
  try {
    let response = await fetch(endpoint, options);
    let responseStatus = response.status;
    let responseData = await response.json();

    switch (responseStatus) {
      case 200: {
        return { rdo: 0, mensaje: "OK", data: responseData };
      }
      case 500: {
        return { rdo: 1, mensaje: "Hubo un problema al crear la lista" };
      }
      default: {
        return { rdo: 1, mensaje: "Ha ocurrido un error" };
      }
    }
  } catch (error) {
    console.error("Error on POST /api/updateMovieList", error);
    return { rdo: 1, mensaje: error };
  }
};
