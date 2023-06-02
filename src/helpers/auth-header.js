export function authHeader(token) {
    if (token) {
      return {
        Authorization: `Bearer ${token} `,
        "Content-Type": "application/json",
        Accept: "application/json",
      };
    } else {
      return {
        //Authorization: `Bearer ${token} `,
        "Content-Type": "application/json",
        Accept: "application/json",
      };
    }
  }