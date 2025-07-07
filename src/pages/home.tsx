// src/pages/Home.tsx

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { fetchVideos, fetchShorts } from '../services/youtube';
import VideoCard from '../components/videoCard';
import ShortsCard from '../components/shortsCard';

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

const Home: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [shorts, setShorts] = useState<Video[]>([]);

  useEffect(() => {
    fetchVideos(searchQuery || 'music').then(setVideos);
    fetchShorts().then(setShorts);
  }, [searchQuery]);

  return (
    <Box sx={{ padding: 2, overflowY: 'auto', flex: 1 }}>
      <Typography variant="h6" gutterBottom>
        {searchQuery ? `Results for "${searchQuery}"` : 'Recommended'}
      </Typography>
      <Grid container spacing={2}>
        {videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={video.id.videoId}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" mt={4} mb={1}>
        Shorts
      </Typography>
      <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, pb: 2 }}>
        {shorts.map((video) => (
          <ShortsCard key={video.id.videoId} video={video} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
