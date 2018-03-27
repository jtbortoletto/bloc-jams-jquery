{
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });
  $('button#next').on('click', function() {
      console.log("Next");
      if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const nextSongIndex = currentSongIndex + 1;
      if (nextSongIndex >= album.songs.length) {return; }

      const nextSong = album.songs[nextSongIndex];
      player.playPause(nextSong);
  });

  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control input').val(percent);
  }, 1000);
  $('button#previous').on('click', function() {
      console.log("Previous");
      if (player.playState !== 'playing') {return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
      const previousSongIndex = currentSongIndex - 1;
      if (previousSongIndex >= album.songs.length) {return; }

      console.log("Song index was " + currentSongIndex + ", now is " + previousSongIndex);
      const previousSong = album.songs[previousSongIndex];
      player.playPause(previousSong);
  });
}
