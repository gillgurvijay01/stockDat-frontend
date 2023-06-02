import GlobalConfig from "../config/GlobalConfig";
import { authHeader } from "../helpers/auth-header";
export const UserService = {
    Login,
    SignUp
}
function Login(data){
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify(data),
      };
      return fetch(
        `${GlobalConfig.baseUrl}/login`,
        requestOptions
      ).then(handleResponse);
}


function SignUp(data){
  const requestOptions = {
      method: "POST",
      headers: authHeader(),
      body: JSON.stringify(data),
    };
    return fetch(
      `${GlobalConfig.baseUrl}/signup`,
      requestOptions
    ).then(handleResponse);
}
function logout(data){
    const requestOptions = {
        method: "POST",
        headers: authHeader(),
        body: JSON.stringify(data),
      };
      return fetch(
        `${GlobalConfig.baseUrl}/login`,
        requestOptions
      ).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          logout();
          // location.reload(true);
        }
  
        // const error = (data && data.message) || response.statusText;
        const error = data || response.statusText;
        if (error.hasOwnProperty("message")) {
          return Promise.reject(error.message);
        } else {
          let errorArray = Object.values(error.errors);
          return Promise.reject(errorArray[0]); // show first error
        }
  
        // errorArray.map((val) => {
        //   return Promise.reject(val);
        // });
      }
      return data;
    });}