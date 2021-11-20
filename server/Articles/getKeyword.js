function getKeyword() {
  let form = document.forms['myForm'];
  console.log(form);
  let word = form.articles.value;
  console.log(word);
  return word;
}

export default getKeyword;
