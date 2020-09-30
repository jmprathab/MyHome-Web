const getMediaScreen = (px) => {
  return `screen and (max-width: ${px})`;
};

export default {
  mobile: getMediaScreen('480px'),
};
