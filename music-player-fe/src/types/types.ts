
type MusicLibraryItemProps = {
    id: string;
    imgSrc: string;
    title: string;
    type?: string;
    counter: number;
}

type SongOverviewProps = {
    imgSrc: string;
    songTitle: string;
    artistName: string;
}

type PlaylistItemsProps = {
    items: any;
    playlistId: string;
}


export type { MusicLibraryItemProps, SongOverviewProps, PlaylistItemsProps }