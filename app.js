(function(){
	var list = {
		music: [
			{
				name: 'Main',
				icon: '',
				src: 'sound/theme_overworld.ogg',
				loop: true
			},
			{
				name: 'Underground',
				icon: '',
				src: 'sound/theme_underground.ogg',
				loop: true
			},
			{
				name: 'Underwater',
				icon: '',
				src: 'sound/theme_underwater.ogg',
				loop: true
			},
			{
				name: 'Castle',
				icon: '',
				src: 'sound/theme_castle.ogg',
				loop: true
			},
			{
				name: 'Pacman',
				icon: '',
				src: 'sound/pac-audio.ogg'
			},
			{
				name: 'Poke Battle',
				icon: '',
				src: 'sound/poke-battle.ogg'
			},
			{
				name: 'Poke Victory',
				icon: '',
				src: 'sound/poke-battle-victory.ogg'
			}
		],
		sfx: [
			{
				name: 'Enter Pipe',
				icon: '',
				src: 'sound/smb_pipe.wav'
			},
			{
				name: 'Jump (SM)',
				icon: '',
				src: 'sound/smb_jump-small.wav'
			},
			{
				name: 'Jump (LG)',
				icon: '',
				src: 'sound/smb_jump-super.wav'
			},
			{
				name: 'Block Bump',
				icon: '',
				src: 'sound/smb_bump.wav'
			},
			{
				name: 'Break Block',
				icon: '',
				src: 'sound/smb_breakblock.wav'
			},
			{
				name: 'Coin',
				icon: '',
				src: 'sound/smb_coin.wav'
			},
			{
				name: '1up',
				icon: '',
				src: 'sound/smb_1-up.wav'
			},
			{
				name: 'Show Power Up',
				icon: '',
				src: 'sound/smb_powerup_appears.wav'
			},
			{
				name: 'Get Power Up',
				icon: '',
				src: 'sound/smb_powerup.wav'
			},
			{
				name: 'Stomp',
				icon: '',
				src: 'sound/smb_stomp.wav'
			},
			{
				name: 'Fireball',
				icon: '',
				src: 'sound/smb_fireball.wav'
			},
			{
				name: 'Bowser Fire',
				icon: '',
				src: 'sound/smb_bowserfire.wav'
			},
			{
				name: 'Pokeball Nudge',
				icon: '',
				src: 'sound/poke-nudge.ogg'
			}
		]
	};

	var vm = new Vue({
		el: '#app',
		data: {
			list: list,
			musicCh: new Audio()
		},
		props: {
			activeMusic: null
		},
		methods: {
			playMusic: function(item){
				if ( this.musicCh.src.indexOf(item.src) > -1 ) {
					if ( this.musicCh.paused )
						this.musicCh.play();
					else
						this.musicCh.pause();
				} else {
					this.musicCh.src = item.src;
					this.musicCh.loop = !!item.loop;
					this.musicCh.play();
				}
				this.activeMusic = item;
			},
			playSfx: function(item){
				var audio = new Audio(item.src);
				audio.play();
			}
		}
	});

})();