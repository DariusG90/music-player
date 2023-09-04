import { useState } from 'react'
import { useLibrary } from '../../contexts/LibraryContext'
import { PlaylistItemsProps } from '../../types/types'
import * as S from './PlaylistOverview.styles'
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai'
import { BsSoundwave } from 'react-icons/bs'

const PlaylistOverview = ({ items, playlistId }: PlaylistItemsProps) => {
    const { dispatch, state } = useLibrary()
    const [isPlaying, setIsPlaying] = useState(false)
    const [rowState, setRowState] = useState<any>({ id: state?.song?.id, play: false })
    const [icon, setIcon] = useState<any>(undefined)

    const handleItemClick = (item: any) => {
        dispatch({
            type: 'play',
            song: item,
            playlistId: playlistId
        })
        setIsPlaying(true)
    }


    const handleIconDisplay = (id: number, index: number) => {
        if (state?.song?.id === id) {
            if (state?.play) {
                return <BsSoundwave />
            }
        }

        return index + 1
    }

    return (
        <S.PlaylistOverview>
            <S.PlaylistTable>
                <table>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                    </tr>
                    {items?.length > 0 && (items.map((item: any, index: number) => (
                        <tr key={item.id}
                            onClick={() => handleItemClick(item)}
                            className='row'
                        >
                            <td className='icon-index-column'>{handleIconDisplay(item.id, index)}</td>
                            <td className='title'>
                                <img src={item.cover} />
                                <S.PlaylistItemAttributes>
                                    <S.PlaylistItemTitle>{item.name}</S.PlaylistItemTitle>
                                    <S.PlaylistItemArtist>{item.artist}</S.PlaylistItemArtist>
                                </S.PlaylistItemAttributes>
                            </td>
                        </tr>
                    )))}

                </table>
            </S.PlaylistTable>
        </S.PlaylistOverview>
    )
}


export default PlaylistOverview