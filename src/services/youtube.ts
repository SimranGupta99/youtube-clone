import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchVideos = async (query = 'music') => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      maxResults: 20,
      q: query,
      type: 'video',
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    },
  });

  return response.data.items;
};
export const fetchShorts = async () => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      maxResults: 10,
      type: 'video',
      videoDuration: 'short',
      q: 'trending', // change keyword if needed
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    },
  });

  return response.data.items;
};