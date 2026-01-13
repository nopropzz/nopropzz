
import React from 'react';
import { Play, SkipForward, SkipBack, Headphones } from 'lucide-react';
import { Editable, useVisualEditor } from '../components/VisualEditor';

const SPOTIFY_PLAYLIST_ID = "37i9dQZF1DXdbX4ghv977E"; 

const Radio: React.FC = () => {
  const { isEditing } = useVisualEditor();

  const tracklist = [
    { id: "01", title: "NORDIC_DRIVE_04", artist: "NOPROPZZ_SOUND", duration: "04:22" },
    { id: "02", title: "CONCRETE_ECHO", artist: "ARCHITECT_S", duration: "03:15" },
    { id: "03", title: "RAW_TEXTURE_V2", artist: "EST_COLLECTIVE", duration: "05:40" },
    { id: "04", title: "MIDNIGHT_EDIT_FINAL", artist: "M_MUHUSTE", duration: "02:55" },
    { id: "05", title: "STRUCTURAL_SOUL", artist: "K_KLAUS", duration: "04:10" },
    { id: "06", title: "VOID_COMPONENTS", artist: "SIGNAL_VOID", duration: "03:33" },
    { id: "07", title: "BRUTALIST_PULSE", artist: "DRUM_MACHINE_01", duration: "04:45" },
    { id: "08", title: "OSLO_MORNING_FOG", artist: "NORDIC_AMBIENT", duration: "06:12" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-20 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 w-full overflow-hidden">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
          <Editable id="radio_pretitle" defaultText="noPROPZZ_RADIO" />
        </span>
        <h1 className="text-6xl sm:text-9xl md:text-[12rem] lg:text-[15rem] font-black tracking-tighter italic uppercase leading-none">
          <Editable id="radio_main_title" defaultText="ON AIR" />
        </h1>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
        
        {/* LEFT: THE MANIFEST (Song List) */}
        <div className="order-2 lg:order-1 lg:col-span-5 border-4 border-black bg-white brutalist-shadow overflow-hidden">
          <div className="bg-black text-white p-5 md:p-6 flex justify-between items-center border-b-4 border-black">
            <h3 className="text-lg md:text-xl font-black uppercase tracking-widest italic leading-none">
              <Editable id="radio_list_header" defaultText="THE_ARTIST_WAY" />
            </h3>
            <span className="text-[9px] font-mono font-bold opacity-50 uppercase tracking-[0.3em]">LIVE</span>
          </div>
          
          <div className="max-h-[400px] md:max-h-[500px] overflow-y-auto custom-scrollbar">
            <table className="w-full text-left font-mono">
              <thead className="bg-zinc-100 border-b-2 border-black sticky top-0 z-10">
                <tr className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                  <th className="p-3 md:p-4 border-r-2 border-black w-10 md:w-12">ID</th>
                  <th className="p-3 md:p-4 border-r-2 border-black">TITLE</th>
                  <th className="p-3 md:p-4">DUR</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-black/10">
                {tracklist.map((track) => (
                  <tr key={track.id} className="group hover:bg-black hover:text-white transition-colors cursor-pointer">
                    <td className="p-3 md:p-4 border-r-2 border-black font-black text-[10px] md:text-xs">{track.id}</td>
                    <td className="p-3 md:p-4 border-r-2 border-black">
                      <div className="flex flex-col">
                        <span className="font-black text-[10px] md:text-xs uppercase italic truncate max-w-[150px] md:max-w-none">
                          <Editable id={`radio_track_${track.id}_title`} defaultText={track.title} />
                        </span>
                        <span className="text-[8px] md:text-[9px] opacity-40 group-hover:opacity-100 uppercase tracking-widest truncate max-w-[150px] md:max-w-none">
                          <Editable id={`radio_track_${track.id}_artist`} defaultText={track.artist} />
                        </span>
                      </div>
                    </td>
                    <td className="p-3 md:p-4 text-[9px] md:text-[10px] font-black">{track.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 md:p-6 bg-zinc-50 border-t-4 border-black flex justify-between items-center">
            <div className="flex items-center gap-2 md:gap-3">
              <Headphones size={14} />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">SYNC: ON</span>
            </div>
            <button className="text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:line-through">
              REFRESH
            </button>
          </div>
        </div>

        {/* RIGHT: THE PLAYER */}
        <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-900 p-8 md:p-12 brutalist-border brutalist-shadow">
            
            <div className="relative aspect-square brutalist-border bg-black flex items-center justify-center overflow-hidden">
              <iframe 
                src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`} 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="absolute inset-0 opacity-20 grayscale hover:opacity-100 transition-opacity z-0"
              ></iframe>
              
              <div className="z-10 w-24 h-24 md:w-32 md:h-32 border-4 border-white rounded-full animate-pulse flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-white rounded-full flex items-center justify-center">
                   <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-ping" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6 md:space-y-8 text-white">
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">
                  <Editable id="radio_player_title" defaultText="THE_ARTIST_WAY" />
                </h2>
                <p className="text-[9px] md:text-[10px] font-mono opacity-50 mt-2 uppercase tracking-widest">
                  <Editable id="radio_player_sub" defaultText="Curated by NoPropzz Sound Lab" />
                </p>
              </div>

              <div className="space-y-4">
                <div className="h-1 bg-white/20 relative">
                  <div className="absolute left-0 top-0 h-full w-[40%] bg-white" />
                </div>
                <div className="flex justify-between text-[9px] md:text-[10px] font-bold font-mono uppercase opacity-50">
                  <span>12:45</span>
                  <span>56:47</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 md:space-x-8">
                <SkipBack className="cursor-pointer hover:opacity-50" size={20} />
                <div className="p-5 md:p-6 bg-white text-black rounded-full cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  <Play fill="black" size={24} className="md:w-8 md:h-8" />
                </div>
                <SkipForward className="cursor-pointer hover:opacity-50" size={20} />
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 border-4 border-black bg-white flex justify-between items-center brutalist-shadow">
             <div className="space-y-1">
                <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-40">System_Output</p>
                <p className="text-xs md:text-sm font-black uppercase tracking-tighter">
                  <Editable id="radio_system_log" defaultText="Direct_Link_Established_38.9°N" />
                </p>
             </div>
             <a 
               href={isEditing ? '#' : `https://open.spotify.com/playlist/${SPOTIFY_PLAYLIST_ID}`} 
               target="_blank" 
               rel="noopener noreferrer"
               onClick={(e) => isEditing && e.preventDefault()}
               className="px-4 py-3 md:px-6 md:py-3 bg-black text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all leading-none"
              >
               Spotify
             </a>
          </div>
        </div>
      </div>

      {/* Vision Statement Section */}
      <div className="mt-24 md:mt-40 w-full border-t-4 border-black py-16 md:py-24 flex flex-col items-center justify-center bg-white">
        <div className="text-center w-full px-4 flex flex-col items-center">
          <h3 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 md:mb-10 italic leading-none max-w-full">
            <Editable id="radio_vision_header" defaultText="Awaken your artist within" />
          </h3>
          <div className="max-w-4xl px-4 md:px-6">
            <p className="text-lg md:text-3xl font-mono font-bold leading-tight opacity-70 uppercase">
              <Editable 
                id="radio_vision_desc" 
                defaultText="Playlists born from late-night edits, road trips between shoots, slow mornings, and moments shared with fellow creatives." 
              />
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #fff;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #000;
        }
      `}</style>
    </div>
  );
};

export default Radio;
