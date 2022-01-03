import { client, checkError } from './client';

export async function getDogs() {
  let request = await client.from('dogs').select('*');
  return checkError(request);
}

export async function getDog(id) {
  let request = await client.from('dogs').select('*').match({ id: id });
  return checkError(request);
}
