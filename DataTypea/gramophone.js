function gramo(band,album,song) 
{
   let result= (album.length * band.length) * song.length / 2
   let rotation=Math.ceil(result/2.5)
   console.log('The plate was rotated '+rotation+' times.')
}
gramo('Black Sabbath', 'Paranoid', 'War Pigs')
gramo('Rammstein', 'Sehnsucht', 'Engel')
