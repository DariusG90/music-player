
import './App.css';
import MusicLibrary from './components/MusicLibrary/MusicLibrary';
import * as S from './App.styles'
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<S.Container>
			<S.MusicLibraryContainer>
				<MusicLibrary />
			</S.MusicLibraryContainer>
			<S.OutletContainer>
				<Outlet />
			</S.OutletContainer>
			<S.PlayerContainer>
				<MusicPlayer />
			</S.PlayerContainer>
		</S.Container>
	);
}

export default App;
