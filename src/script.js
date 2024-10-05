import { playRandomVideo } from "./video.js";
// TODO: Multiple video containers: the one played shouldn't be selected for another container
// TODO: Review Vite static asset importing (if optimization is needed)

/**
 * Vite static asset importing
 * + Adding video paths to an array for ease of processing.
 */
const videoObject = import.meta.glob('/public/*.mp4');
const videos = Object.keys(videoObject);

const videoEl = document.querySelector('video');
const sourceEl = document.querySelector('source');

const dialog = document.querySelector('dialog');
const dialogBtn = document.querySelector('button');

let justPlayed = '';

/**
 * User needs to interact with the document first before playing videos...
 */
document.addEventListener('DOMContentLoaded', () => {
	dialog.showModal();
});

/**
 * Initial video
 */
dialogBtn.addEventListener('click', () => {
	dialog.close();
	justPlayed = playRandomVideo(videos, sourceEl, videoEl, justPlayed);
});

/**
 * Start random loop
 */
videoEl.addEventListener('ended', () => {
	justPlayed = playRandomVideo(videos, sourceEl, videoEl, justPlayed);
});
