import { playRandomVideo } from "./video.js";
// TODO: Multiple video containers: the one played shouldn't be selected for another container

// Replace with folder reading
const videos = ['./video1.mp4', './video2.mp4', './video3.mp4', './video4.mp4'];

const videoEl = document.querySelector('video');
const sourceEl = document.querySelector('source');

const dialog = document.querySelector('dialog');
const dialogBtn = document.querySelector('button');

let justPlayed = '';

/**
 * User needs to interact with the document first before playing...
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
