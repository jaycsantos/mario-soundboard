var VERSION = '1.0.0::';
var CACHE_URLS = [
	'/',
	'material.min.css',
	'material.min.js'
];

var SOUNDS_URLS = [
	'sound/smb_1-up.wav',
	'sound/smb_bowserfalls.wav',
	'sound/smb_bowserfire.wav',
	'sound/smb_breakblock.wav',
	'sound/smb_bump.wav',
	'sound/smb_coin.wav',
	'sound/smb_fireball.wav',
	'sound/smb_jump-small.wav',
	'sound/smb_jump-super.wav',
	'sound/smb_mariodie.wav',
	'sound/smb_powerup.wav',
	'sound/smb_stage_clear.wav',
	'sound/smb_stomp.wav',
	'sound/smb_warning.wav',
	'sound/smb_world_clear.wav',
	'sound/theme_castle.ogg',
	'sound/theme_overworld.ogg',
	'sound/theme_underwater.ogg',
	'sound/theme_underground.ogg',
	'sound/poke-battle.ogg',
	'sound/poke-battle-victory.ogg',
	'sound/poke-nudge.ogg',
	'sound/pac-audio.ogg',
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches
			.open(VERSION + 'assets')
				.then(function(cache){
					cache.addAll(SOUNDS_URLS);
					return cache.addAll(CACHE_URLS);
				})
	);
});

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches
			.keys()
				.then(function (keys){
					return Promise.all(
						keys
							.filter(function(key){
								return !key.startsWith(VERSION);
							})
							.map(function(key){
								return caches.delete(key);
							})
					);
				})
	);
});

self.addEventListener('fetch', function(event){

	if(event.request.method !== 'GET'){
		return;
	}

	event.respondWith(
		caches.match(event.request).then(function(response){
			return response || fetch(event.request);
		})
	);
});