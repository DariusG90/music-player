import React, { useContext } from "react";
import { useReducer } from "react";
import chillHop from "../data";

type Action = {
    type: 'play' | 'pause';
    song: any;
    playlistId: string;
    library: any;
}

const LibraryContext = React.createContext<any>('')

const libraryReducer = (state: any, action: Action) => {
    switch (action.type) {
        case 'play': {
            return { play: true, song: action.song, playlistId: action.playlistId }
        }
        case 'pause': {
            return { play: false, song: action.song, playlistId: action.playlistId }
        }
        default: {
            throw new Error(`Unhandled action type: ${action}`)
        }
    }
}

const LibraryProvider = ({ children }: any) => {
    
    const [state, dispatch] = useReducer<any>(libraryReducer, { play: false })
    const value = { state, dispatch }
    return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
}

const useLibrary = () => {
    const context = useContext(LibraryContext)
    if (context === undefined) {
        throw new Error('useLibrary must be used within a LibraryProvider')
    }
    return context
}

export { LibraryProvider, useLibrary }