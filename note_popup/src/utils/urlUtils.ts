export const getHost = () => {
  return window.location.host;
};

export const getPathname = () => {
  return window.location.pathname;
};

export const getHostPathname = () => {
  return `${getHost()}${getPathname()}`;
};
