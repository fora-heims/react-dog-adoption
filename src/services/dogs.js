import { client, checkError } from './client';

export async function getDogs() {
  let request = await client.from('dogs').select('*');
  return checkError(request);
}

export async function getDog(id) {
  let request = await client.from('dogs').select('*').match({ id: id });
  return checkError(request);
}

export async function updateDog(dog) {
  let request = await client.from('dogs').update(dog).eq('id', dog.id);
  return checkError(request);
}

export async function insertDog(dog) {
  let request = await client.from('dogs').insert(dog);
  return checkError(request);
}

export async function deleteDog(id) {
  let request = await client.from('dogs').delete().match({ id });
  return checkError(request);
}
