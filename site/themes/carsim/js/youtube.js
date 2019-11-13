// API for playing Youtube-hosted videos
	// 1a. insert a div with id=player where you want the video to go in your source
	// 1b. insert a short Javascript segment defining an array named play_list containing all
	//     of the video IDs you want to play
	// 1c. insert a script reference to this file (youtube.js)
	// 1d. being executing following code
	var play_ndx = -1;
	// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// 3. This function creates an <iframe> (and YouTube player)
	//    after the API code downloads.
	var player;
	var play_start;
	function onYouTubeIframeAPIReady() {
		debug_log("in onYouTubeIframeAPIReady");
		debug_log("player_width=" + player_width);
		debug_log("player_height=" + player_height);
		debug_log("player_loop=" + player_loop);
		debug_log("player_autoplay=" + player_autoplay);
		debug_log("player_list=" + player_list.join(","));
		play_start = player_autoplay;
		player = new YT.Player('player', {
			width: player_width,
			height: player_height,
			autoplay: player_autoplay,
			playerVars: {
				rel: 0,
				wmode: 'transparent'
			},
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
		// set the iframe's wmode 
		jQuery("#player").attr('wmode', 'transparent');
	}

	// 4. The API will call this function when the video player is ready.
	function onPlayerReady(event) {
		debug_log("in onPlayerReady");
		playNextVideo();
	}

	// 5. The API will call this function when the player's state changes.
	function onPlayerStateChange(event) {
		debug_log("in onPlayerStateChange");
		if (play_ndx == -1) {
			debug_log("in onPlayerStateChange: play_ndx==-1 - somehow triggered a state change at initialization");
			playNextVideo();
		} else if (event.data == YT.PlayerState.PLAYING && play_start == 0) {
			debug_log("in onPlayerStateChange: no autoplay - need to stop first video after 50ms");
			setTimeout(stopVideo, 50);
			play_start = 1;
		} else if (event.data == YT.PlayerState.ENDED) {
			debug_log("in onPlayerStateChange: finished video - try to play another one");
			playNextVideo();
		}
	}

	// 6. onPlayerReady() and onPlayerStateChange() call this function to play the next video
	function playNextVideo() {
		play_ndx += 1;
		if (play_ndx >= player_list.length) {
			debug_log("in playNextVideo: reached the end of the player_list");
			play_ndx = 0;
			if (player_loop == 0) {
				debug_log("in playNextVideo: not in a loop - reset to not autoplay");
				play_start = 0;
			}
		}
		debug_log("in playNextVideo: play_ndx=" + play_ndx + " play_start=" + play_start +
			" player_list[play_ndx]=" + player_list[play_ndx]);
		player.loadVideoById(player_list[play_ndx]);
	}

	// 7. onPlayerStateChange() calls this function on the first video of a list if autoplay=0
	function stopVideo() {
		player.stopVideo();
	}

	function debug_log(msg) {
		if (1) {
			console.log(msg);
		}
	}
