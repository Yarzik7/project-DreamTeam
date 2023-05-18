const save = (key, value) => {
  try {
    const serialStatus = JSON.stringify(value);
    localStorage.setItem(key, serialStatus);
  } catch (error) {
    console.error('Set stutus error:', error.message);
  }
};

const load = key => {
  try {
    const serialStatus = localStorage.getItem(key);
    return serialStatus === null ? [] : JSON.parse(serialStatus);
  } catch (error) {
    console.error('Get stutus error:', error.message);
  }
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove stutus error:', error.message);
  }
};

export default {
  save,
  load,
  remove,
};
