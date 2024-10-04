/**
 * Plays random video.
 * @param {Array} videoArray - Contains string path of videos
 * @param {HTMLSourceElement} sourceElement
 * @param {HTMLVideoElement} videoElement
 * @param {string} justPlayed - Filename of video just played
 * @returns {string} randomVideo - The new current video filename
 */
export function playRandomVideo(videoArray, sourceElement, videoElement, justPlayed) {
	const randomVideo = chooseRandomVideoFileButNotTheJustPlayed(videoArray, justPlayed);
	sourceElement.src = randomVideo;
	videoElement.load();
	videoElement.play();
	return randomVideo;
}

/**
 * Chooses random video file name, but not the just played.
 * @param {Array} videoArray - Contains strings with path of each video
 * @param {string} justPlayed - Filename of video just played
 * @returns {string} randomVideoFile - Chosen filename of chosen video
 */
function chooseRandomVideoFileButNotTheJustPlayed(videoArray, justPlayed) {

	let randomVideoFile;
	do {
		const randomIndex = Math.floor(Math.random() * videoArray.length);
		randomVideoFile = videoArray[randomIndex];
	} while (randomVideoFile === justPlayed);

	return randomVideoFile;
}
