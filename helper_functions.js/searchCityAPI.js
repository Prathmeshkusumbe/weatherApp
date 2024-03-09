

export async function searchCityApi(q){
  let res = await fetch(`https://api.api-ninjas.com/v1/city?name=${q}`, {headers: {
    'X-Api-Key': '7qo6vtKcKzyL+ebnTCavjA==8NIa5UDK3kg5AsFy'} });
  res = await res.json();
  return res;
}