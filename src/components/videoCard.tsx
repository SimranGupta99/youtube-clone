import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const VideoCard = ({ video }: { video: any }) => {
  return (
    <Card sx={{ maxWidth: '100%', borderRadius: 2, boxShadow: 0 }}>
  <CardMedia
    component="img"
    height="180"
    image={video.snippet.thumbnails.high.url}
    alt={video.snippet.title}
  />
  <CardContent sx={{ padding: 1 }}>
    <Typography variant="subtitle1" noWrap>
      {video.snippet.title}
    </Typography>
    <Typography variant="caption" color="text.secondary">
      {video.snippet.channelTitle}
    </Typography>
  </CardContent>
</Card>
  );
};

export default VideoCard;
