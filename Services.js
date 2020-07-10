export const getBills = async () => {
  const bills = await fetch(
    'https://my-json-server.typicode.com/smurph7/mock-data/bills'
  ).then((response) => {
    return response.json();
  });
  return bills;
};
