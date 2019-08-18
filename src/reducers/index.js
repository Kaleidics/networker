import { FETCH_PODCASTS_SUCCESS, SET_PLAYING_SUCCESS } from "../actions";

const initialState = {
    podcastContent: null,
    podcasts: [],
    currentPlaying: null
};

export const Reducer = (state = initialState, action) => {

    if (action.type === FETCH_PODCASTS_SUCCESS) {
        return Object.assign({}, state, {
            podcastContent: action.podcasts,
            podcasts: action.podcasts.items,
            currentPlaying: action.podcasts.items[0]
        });
    }

    if (action.type === SET_PLAYING_SUCCESS) {
        return Object.assign({}, state, {
            currentPlaying: action.playingPodcast
        });
    }
    
    return state;
};
