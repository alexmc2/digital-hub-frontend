// export default async function getAllPosts() {
//   const res = await fetch('http://api.beyond-bytes.blog/api/posts/newest');

//   if (!res.ok) throw new Error('failed to fetch data');

//   return res.json();
// }
import axios from '@/lib/axios';

export default async function getAllPosts() {
  try {
    const response = await axios.get('/api');
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
