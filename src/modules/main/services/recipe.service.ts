export const getRecipes = async (
  page: Number,
  search: string,
  difficulty: string,
  kcal: string,
) => {
  let url = `https://6453db48c18adbbdfea9924a.mockapi.io/recipes?limit=5&page=${page}`;
  if (search !== '') {
    url += `&search=${search}`;
  }
  if (difficulty !== '') {
    url += `&difficulty=${difficulty}`;
  }
  if (kcal != '') {
    url += `&kcal=${kcal}`;
  }
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
