import { BsRepeat, BsShuffle, BsSkipEndFill } from 'react-icons/bs';
import * as S from './MusicPlayerControls.styles'
import { AiFillStepBackward, AiOutlinePlayCircle } from 'react-icons/ai';

const MusicPlayerControls = () => {
    return (
        <S.PlayerContainer>
            <S.PlayerControls>
                <BsShuffle />
                <AiFillStepBackward />
                <AiOutlinePlayCircle className='bigSVG' />
                <BsSkipEndFill />
                <BsRepeat />
                {/* <BsRepeat1 /> */}
            </S.PlayerControls>
            <S.AudioTimeline type='range' min={0} step={1} max={120} />
        </S.PlayerContainer>
    )
}

export default MusicPlayerControls;