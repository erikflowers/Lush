'use strict';
/**
 * Exp Conf JS
 * Funny JS stuff by @bobvanluijt
 */
jQuery(document)
	.ready(function(){

		/**
		 * Scope globals
		 */
			var rotateTheBrain_i = 0, // global scope I
				rotateTheBrainLastScroll = 0,
				rotateTheBrainReversing = false,
				heightOfMenuBar = 120;

	  function onMobile(){
			return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
			|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))
		}

		/**
		 * Remove the head in mobile
		 */
		function removeHeadForMobile(){
			if(onMobile()){
				jQuery('.Head').remove()
			}
		}

		/**
		 * Init the register button
		 */
		function setRegisterButtonInit(event){
			jQuery('#registerLabel')
				.click(function(){
					window
						.location
						.assign('http://goo.gl/forms/A6SJ9c2jx7');
				})
		}

		/**
		 * Set register button
		 */
		function setRegisterButton(event){

			var st = jQuery(window)
						.scrollTop();

			/**
			 * Determine if label should be shown
			 */
			if(st > heightOfMenuBar){
				if(!jQuery('#registerLabel').hasClass('show')){
					jQuery('#registerLabel')
						.addClass('show');
				}
			} else {
				if(jQuery('#registerLabel').hasClass('show')){
					jQuery('#registerLabel')
						.removeClass('show');
				}
			}

			/**
			 * Determine if label should have fulltext
			 */
			if(st > jQuery('#headBar').height()){
				jQuery('#registerLabel')
					.text('R');
			} else {
				jQuery('#registerLabel')
					.text('Register');
			}

		}

		/**
		 * Drop object on head
		 */
		function dropOnHead(){}

		/**
		 * Set the size of the brandbar
		 */
		function setBrandbar(){
			var navbarHeaderHeigth = onMobile() ? 30 : 125

			$('#headBar')
			.css({
				height: "calc(100vh - " + navbarHeaderHeigth + "px)",
			})
		}

		/**
		 * Fadein the head and other items
		 */
		function initHead(){
			removeHeadForMobile();

			jQuery('.Head') // fade in head
				.animate({
					'opacity': 1
				}, 2200, function(){

					jQuery('.eventLogo')
						.fadeIn('slow');

					setTimeout(function(){
						jQuery('.conferenceLocation')
								.fadeIn('slow', function(){
									jQuery('.conferenceDate')
										.fadeIn('slow');
								});
					}, 150);

					setTimeout(function(){
						jQuery('.conferenceDate')
								.fadeIn('slow');
					}, 300)

				});
		}

		/**
		 * Flash the brain
		 */
		function flashTheBrain(){
			/**
			 * Orange and Red
			 */
			var polsAndPaths = jQuery('.Head')
									.find('#Colors')
									.find('polygon, path');

				setInterval(function(){

					var brainChunkToChange = Math.floor(Math.random() * polsAndPaths.length) + 1;

					var brainChunkOriginalColor = polsAndPaths
													.eq(brainChunkToChange)
													.attr('fill');
					polsAndPaths
						.eq(brainChunkToChange)
						.css({
							fill: "white",
							transition: "100ms"
						});

					setTimeout(function(){
						polsAndPaths
							.eq(brainChunkToChange)
							.css({
								fill: brainChunkOriginalColor,
								transition: "100ms"
							});
					}, 120);

				}, 200)
		}

		/**
		 * Wobble the brain on R press
		 */
		function wobbleTheBrain(input){

			if(input === 'start'){
				jQuery('.Head')
					.find('#Colors')
					.css({
						'-webkit-animation-name': 'BRAINITCH',
					    '-webkit-animation-duration': '0.5s',
					    '-webkit-transform-origin': '50% 50%',
					    '-webkit-animation-iteration-count': 'infinite',
					    '-webkit-animation-timing-function': 'linear'
					});
			} else {
				jQuery('.Head')
					.find('#Colors')
					.css({
						'-webkit-animation-name': '',
						'-webkit-transform': 'translate(0px, 0px) rotate(0deg)'
					});
			}
		}

		/**
		 * Rotate the brain on scrolling
		 */
		function rotateTheBrain(event){

			if(rotateTheBrainReversing === false){
				var st = jQuery(window).scrollTop();
				if (st > rotateTheBrainLastScroll){

					rotateTheBrain_i += 2;

					jQuery('.Head')
						.css('transform', 'rotateY(' + rotateTheBrain_i + 'deg)')

				} else {

					rotateTheBrainReversing = true;

					var rotateInterval = setInterval(function(){
						if(rotateTheBrain_i < 1){
							clearInterval(rotateInterval);
							rotateTheBrainReversing = false;
						} else {
							rotateTheBrain_i--;
							jQuery('.Head')
						      		.css('transform','rotateY('+rotateTheBrain_i+'deg)');
						}
					}, 5);
				}

				rotateTheBrainLastScroll = st;
			}
		}

		/**
		 * On start, resize etc
		 */

				/**
				 * Init the head
				 */
				initHead();
				/**
				 * Flip the brain on 'R' key
				 */
				jQuery(document)
					.keydown(function(e){
						if(e.keyCode == 68){ /* when d is pressed */
							dropOnHead();
						}

						if(e.keyCode == 82){ /* when r is pressed */
							wobbleTheBrain('start');
						}
					})
					.keyup(function(e){
						wobbleTheBrain('stop');
					})
				/**
				 * Set the brandbar
				 */
				setBrandbar();
				/**
				 * Flashy brain animations
				 */
				flashTheBrain();
				/**
				 * rotate brain on scroll effect
				 * DISABLED
				 */
				/*
				jQuery(window)
					.scroll(function(event){
						rotateTheBrain(event);
					});
				*/
				/**
				 * set the register button when needed
				 */
				jQuery(window)
					.scroll(function(event){
						setRegisterButton(event);
					});
				setRegisterButtonInit();
		/**
		 * set size on change
		 */
		jQuery(window)
			.resize(function() {
				setBrandbar();
			});
});
