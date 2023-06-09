import NotificationHelper from './notification';

function webSocketInit(url, config) {
  const socket = new WebSocket(url);

  socket.onmessage = (message) => {
    const movie = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema`,
      options: {
        body: movie.overview,
        image: `${config.BASE_IMAGE_URL + movie.poster_path}`,
      },
    });
  };
}

export default webSocketInit;
