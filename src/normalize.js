const normalize = (t) => {
  let text = t;
  text = text.trim();
  text = text.toLowerCase();
  text = text.replace(/(?:\\[rn]|[\r\n]+)+/g, ' ');
  text = text.replace(/'/g, " ' ");
  text = text.replace(/"/g, '');
  text = text.replace(/\./g, ' . ');
  text = text.replace(/,/g, ' , ');
  text = text.replace(/\(/g, ' ( ');
  text = text.replace(/\)/g, ' ) ');
  text = text.replace(/!/g, ' ! ');
  text = text.replace(/\?/g, ' ! ');
  text = text.replace(/;/g, ' ');
  text = text.replace(/:/g, ' ');
  text = text.replace(/\t+/g, '\t').replace(/\t\s/g, ' ').replace(/\t/g, ' ');
  return text;
};

export default normalize;
