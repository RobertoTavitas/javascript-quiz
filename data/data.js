export const data = [];

/**
 * 
 * @param {object} question question object literal
 * @returns {object} question pushed to data array
 */
const $ = question => data.push(question);

$({
  text: '¿Cuál de las siguientes opciones no es un editor de código?',
  options: ['Vim', 'Nano', 'Emacs', 'Word'],
  answer: 'Word',
});

$({
  text: 'Qué lenguajde de programación no es orientado a objetos?',
  options: ['Java', 'Haskell', 'C++', 'Python'],
  answer: 'Haskell',
});

$({
  text: 'Qué lenguaje no sirve para estilizar sitios web?',
  options: ['Stylus', 'Less', 'Sass', 'NextCSS', 'PostCSS'],
  answer: 'PostCSS',
});