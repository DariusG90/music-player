
import './App.css';
import useAudio from './hooks/useAudio';
import MusicLibrary from './components/MusicLibrary/MusicLibrary';
import MusicOverview from './components/MusicOverview/MusicOverview';
import * as S from './App.styles'
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

function App() {
  const {
    play,
    pause,
    isPlaying,
    volume,
    setVolume,
    currentTime,
    duration,
    seekTo,
    audioEnded
  } = useAudio('https://mp3.chillhop.com/serve.php/?mp3=10075')

  const handleVolumeChange = (e: any) => {
    setVolume(parseFloat(e.target.value))
  }

  const handleSeek = (e: any) => {
    const newTime = parseFloat(e.target.value);
    seekTo(newTime);
  };

  return (
    <S.Container>
      <MusicLibrary />
      <MusicOverview />
      <S.PlayerContainer>
        <MusicPlayer />
      </S.PlayerContainer>
    </S.Container>
  );
}

export default App;
