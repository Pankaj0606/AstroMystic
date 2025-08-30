// astro-frontend/src/sanityClient.js
import { createClient } from '@sanity/client';

export default createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-05-03',
});