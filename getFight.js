export default async function getFight(id1, attackId, id2) {
  const responce = await fetch(
    `https://reactmarathon-api.netlify.app/api/fight?player1id=${id1}&attackId=${attackId}&player2id=${id2}`
  );
  const body = await responce.json();

  return body;
}
