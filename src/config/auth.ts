let bearerToken: string | null = null;

export const setBearerToken = (token: string | null) => {
  bearerToken = token;
};

export const getBearerToken = () => {
  return bearerToken;
};