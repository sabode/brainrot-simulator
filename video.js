'use strict';

/**
 * Plays random video.
 * @param {Array} videoArray - Contains string path of videos
 * @param {HTMLSourceElement} sourceElement
 * @param {HTMLVideoElement} videoElement
 * @param {string} current - String filename of current video playing
 */
export function playRandomVideo(videoArray, sourceElement, videoElement, current) {
	const randomVideo = chooseRandomVideoFileButNotCurrentPlaying(videoArray, current);
	sourceElement.src = randomVideo;
	videoElement.load();
	videoElement.play();
	current = randomVideo;
}

/**
 * Chooses random video file name, but not the current playing.
 * @param {Array} videoArray - Contains strings with path of each video
 * @param {string} current - String filename of current video playing
 */
function chooseRandomVideoFileButNotCurrentPlaying(videoArray, current) {

	let randomVideoFile;
	do {
		const randomIndex = Math.floor(Math.random() * videoArray.length);
		randomVideoFile = videoArray[randomIndex];
	} while (randomVideoFile === current);

	return randomVideoFile;
}

