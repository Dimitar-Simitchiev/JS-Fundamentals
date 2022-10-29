function FuncSong(ArrofSongs)
{
    class Songs
    {   constructor(type,name,time)
        {
            this.type=type;
            this.name=name;
            this.time=time;


        }


    }
    let songs=[]
    let numberofsongs=ArrofSongs.shift();
    let typesong=ArrofSongs.pop();
    for (let i = 0; i < numberofsongs; i++) 
    {
        let splitsong=ArrofSongs[i].split('_');
        let song=new Songs(splitsong[0],splitsong[1],splitsong[2])
        songs.push(song)
        
    }
    for (let prop of songs)
    {
        if (prop.type==typesong)
        {
            console.log(prop.name)
        }
        if(typesong.toString()=='all')
        {
            console.log(prop.name)
        }
        
    }


}
FuncSong([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )
FuncSong([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )
FuncSong([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )