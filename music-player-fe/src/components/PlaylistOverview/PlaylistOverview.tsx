import { useState } from 'react'
import { useLibrary } from '../../contexts/LibraryContext'
import { PlaylistItemsProps } from '../../types/types'
import * as S from './PlaylistOverview.styles'

const PlaylistOverview = ({ items, playlistId }: PlaylistItemsProps) => {
    const { dispatch } = useLibrary()
    const [isPlaying, setIsPlaying] = useState(false)

    const handleItemClick = (item: any) => {
        dispatch({
            type: 'play',
            song: item,
            playlistId: playlistId
        })
        setIsPlaying(true)
    }

    return (
        <S.PlaylistOverview>
            <S.PlaylistTable>
                <table>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Date added</th>
                    </tr>
                    {items?.length > 0 && (items.map((item: any, index: number) => (
                        <tr key={item.id} onClick={() => handleItemClick(item)}>
                            <td >{index + 1}</td>
                            <td className='title'>
                                <img src={item.cover} />
                                <S.PlaylistItemAttributes>
                                    <S.PlaylistItemTitle>{item.name}</S.PlaylistItemTitle>
                                    <S.PlaylistItemArtist>{item.artist}</S.PlaylistItemArtist>
                                </S.PlaylistItemAttributes>
                            </td>
                            <td>{new Date().getTime()}</td>
                        </tr>
                    )))}

                </table>
            </S.PlaylistTable>
        </S.PlaylistOverview>
    )
}


export default PlaylistOverview