import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface ShortsCardProps {
  video: {
    snippet: {
      title: string;
      thumbnails: {
        high: { url: string };
      };
    };
  };
}

const ShortsCard: React.FC<ShortsCardProps> = ({ video }) => {
  return (
    <Card
      sx={{
        minWidth: 150,
        maxWidth: 150,
        borderRadius: 2,
        boxShadow: 0,
        flexShrink: 0,
        backgroundColor: '#fff',
      }}
    >
      <CardMedia
        component="img"
        height="280"
        image={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
        sx={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ padding: 1 }}>
        <Typography variant="subtitle2" noWrap>
          {video.snippet.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ShortsCard;
