import Parser from "rss-parser";

let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
const feed = "https://pinecast.com/feed/netwrkr";
const PROXIED_URL = CORS_PROXY + feed;

export const FETCH_PODCASTS_SUCCESS = "FETCH_PODCASTS_SUCCESS";
export const fetchPodcastsSuccess = podcasts => ({
    type: FETCH_PODCASTS_SUCCESS,
    podcasts
});

export const fetchPodcasts = () => dispatch => {
    (async () => {
        let feed = await parser.parseURL(PROXIED_URL);
        console.log(feed)
        dispatch(fetchPodcastsSuccess(feed));
    })();
}

export const SET_PLAYING_SUCCESS = "SET_PLAYING_SUCCESS";
export const setPlayingSuccess = playingPodcast => ({
    type: SET_PLAYING_SUCCESS,
    playingPodcast
});

export const setPlaying = playingPodcast => dispatch => {
    dispatch(setPlayingSuccess(playingPodcast));
}