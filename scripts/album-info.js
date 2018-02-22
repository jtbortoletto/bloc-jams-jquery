{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('#album-data').text(album.artist);
  $('#album-data').text(album.releaseInfo);
}
