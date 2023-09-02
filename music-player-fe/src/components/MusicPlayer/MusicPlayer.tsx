import * as S from './MusicPlayer.styles'
import { AiFillStepBackward, AiOutlineHeart, AiOutlinePlayCircle } from 'react-icons/ai'
import { BsFillVolumeMuteFill, BsFillVolumeUpFill, BsRepeat, BsRepeat1, BsShuffle, BsSkipEndFill, BsVolumeDownFill } from 'react-icons/bs'
import MusicPlayerInfo from '../MusicPlayerInfo/MusicPlayerInfo'
import { useState } from 'react'
import MusicPlayerControls from '../MusicPlayerControls/MusicPlayerControls'

const MusicPlayer = () => {
    const [localVolume, setLocalVolume] = useState(1)

    const handleVolumeChange = (e: any) => {
        setLocalVolume(e.target.value)
    }

    const handleVolumeIcon = () => {
        if (localVolume <= 0.5 && localVolume > 0) {
            return <BsVolumeDownFill />
        }
        if (localVolume == 0) {
            return <BsFillVolumeMuteFill />
        }

        return <BsFillVolumeUpFill />
    }
    return (
        <S.Container>
            <MusicPlayerInfo />
            <MusicPlayerControls />
            <S.VolumeContainer>
                {handleVolumeIcon()}
                <S.VolumeLine type='range' min={0} max={1} step={0.01} onChange={handleVolumeChange}/>
            </S.VolumeContainer>
        </S.Container>
    )
}

export default MusicPlayer