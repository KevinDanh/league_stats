// Fetch Champions
export const fetchChampions = async () => {
  const res = await fetch('http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json');
  const data = await res.json();
  return data.data;
};

// Fetch Single Champion
export const fetchChampion = async (name) => {
  const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/${name}.json`);
  const data = await res.json();
  return data;
};