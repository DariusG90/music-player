import { v4 as uuidv4 } from "uuid";
const chillHop = () => {
    return [{
        id: '9a2505b1-4137-476e-a1ff-e45019912e55', ///uuidv4(),
        type: 'Playlist',
        init: true,
        name: 'Default playlist',
        items: [
            {
                name: "Beaver Creek",
                cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
                artist: "Aso, Middle School, Aviino",
                audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
                color: ["#205950", "#2ab3bf"],
                id: uuidv4(),
                active: true,
            },
            {
                name: "Daylight",
                cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
                artist: "Aiguille",
                audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Keep Going",
                cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
                artist: "Swørn",
                audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
                color: ["#CD607D", "#c94043"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Nigheall",
                cover: "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
                artist: "Aiguille",
                audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
                color: ["#EF8EA9", "#ab417f"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "ReflecUon",
                cover: "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
                artist: "Swørn",
                audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
                color: ["#CD607D", "#c94043"],
                id: uuidv4(),
                active: false,
            },
            {
                name: "Under the City Stars",
                cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
                artist: "Aso, Middle School, Aviino",
                audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
                color: ["#205950", "#2ab3bf"],
                id: uuidv4(),
                active: false,
            },
            //ADD MORE HERE
        ]
    }, {
        id: '9a2505b1-4137-476e-a1ff-e45019912e56', //uuidv4(),
        type: 'album',
        init: false,
        name: 'Astrovibes',
        items: [{
            name: 'Beautiful',
            cover: 'https://i.scdn.co/image/ab67616d0000b273c08f99bf4b716633a4e9f033',
            artist: 'C Y G N',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=60572',
            id: uuidv4()
        }, {
            name: 'Emotions',
            cover: 'https://i.scdn.co/image/ab67616d0000b273c08f99bf4b716633a4e9f033',
            artist: 'C Y G N',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=60573'
        }, {
            name: 'Forever Young',
            cover: 'https://i.scdn.co/image/ab67616d0000b273c08f99bf4b716633a4e9f033',
            artist: 'C Y G N',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=60614'
        }, {
            name: 'Late Night Drive',
            cover: 'https://i.scdn.co/image/ab67616d0000b273c08f99bf4b716633a4e9f033',
            artist: 'C Y G N',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=60615'
        }, {
            name: 'Sunset Drive',
            cover: 'https://i.scdn.co/image/ab67616d0000b273c08f99bf4b716633a4e9f033',
            artist: 'C Y G N',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=60620'
        }, {
            name: 'Morning Star',
            cover: 'https://i.scdn.co/image/ab67616d0000b273c08f99bf4b716633a4e9f033',
            artist: 'C Y G N',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=60621'
        }]
    }, {
        id: uuidv4(),
        name: 'Liked Songs',
        type: 'Playlist',
        init: true,
        items: []
    }];
}
export default chillHop;