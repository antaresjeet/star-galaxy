const openNewWindow = (url: string = '', target: string = '_blank') => {
  window.open(url, target);
};

export {
  openNewWindow
}