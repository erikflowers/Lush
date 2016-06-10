angular.module('ingExperience', [
	'ingGlobal',
	'ingComponents',
	'gTopNavigation',
	'gFooter',
	'tgCheckbox',
	'tgCollapsible',
	'tgComparisonTable',
	'tgFullCover',
	'tgIcon',
	'tgImage',
	'tgList',
	'tgRadio',
	'tgRibbon',
	'tgSplitList',
	'tgToggle',
	'tgUtils'
]).directive('topNavigation', ['mqService', '$rootScope', function (mqService, $rootScope) {
	return {
		restrict: 'EA',
		scope: true,
		replace: true,
		link: function(scope, elt, attrs, ctrl) {
			var breakPointWidth = mqService.getBreakPoint('md');
			var tabletWidth = mqService.getBreakPoint('lg');
			$rootScope.$on('window-resize', function(event, docWidth, mqObj){
				var mobileWidth = (mqObj.width < breakPointWidth);
				scope.mobile = mobileWidth;
				scope.tablet = (mqObj.width < tabletWidth);
				scope.$apply();
			});
		}
	}
}]).run(['$rootScope', function ($rootScope) {

	/**
	 * Some hosted vars for Lush
	 */
	var LUSHSWITCH = true; // true = lush is generated, false = textarea

	/**
	 * Should the typed string be recorded?
	 */
	var RECORD = false,
		RECORDSTRING = '';

	/**
	 * Note the SPACE before the helper functions!
	 */
	var HELPEROPTIONS = [	' Actor',
							' API, System', 
							' Critical Moment', 
							' Idea', 
							' Metric', 
							' Observation, Fact', 
							' Policy, Rule', 
							' Question', 
							' Step Definition', 
							' Channel'];
	/**
	 * Adding lush to the mix, this happens as an init, also when the switch case (below) is false
	 */
	markdown2lush( $('#lushAllTheThings') );

	/**
	 * getCurrentPos function
	 */
	 $.fn.getCursorPosition = function() {
        var el = $(this).get(0);
        var pos = 0;
        if('selectionStart' in el) {
            pos = el.selectionStart;
        } else if('selection' in document) {
            el.focus();
            var Sel = document.selection.createRange();
            var SelLength = document.selection.createRange().text.length;
            Sel.moveStart('character', -el.value.length);
            pos = Sel.text.length - SelLength;
        }
        return pos;
    }

	/**
	 * Specific edits
	 */
	$('#lush--markdownLush-switch')
		.click(function(){
			switch(LUSHSWITCH) {
			    case true:
			        /**
			         * Get the Lush element and change it to textarea
			         */
			        var markdownResult = lush2markdown( $('lush-title').text(), $('lush') );
			        //$('#lushAllTheThings').text(  );
			        $('lush').replaceWith('<textarea id="lushAllTheThings" >' + markdownResult.markdown + '</textarea>')
			        LUSHSWITCH = false;
			        break;
			    case false:
			        /**
			         * Get the textarea and change it to lush element
			         */
			        markdown2lush( $('#lushAllTheThings') );
			        LUSHSWITCH = true;
			        break;
			}
		})

	/**
	 * Helper recording, start
	 */
	function helperRecorder_start(i){

		if(i.keyCode === 8){ // backspace, step back
			RECORDSTRING = RECORDSTRING.slice(0, -1);
		} else if(i.keyCode === 13){
			RECORD = false;
			return;
		} else if(i.shiftKey === true){
			return;
		} else {
			RECORDSTRING += String.fromCharCode(i.which);
		}

		/**
		 * Match against possivle elements
		 */
		var availableOptions = [];
		HELPEROPTIONS
			.forEach(function( val ) {

				//console.log( val.toLowerCase(), RECORDSTRING.toLowerCase() );

				if( val.toLowerCase().indexOf(RECORDSTRING.toLowerCase()) != '-1' ){
					availableOptions.push(val.substring(1));
				}
			});
		
		$('.helperBlock')
			.css({
				left: $('#lushAllTheThings').getCursorPosition()
			})
		
			

	}

	/**
	 * Helper recording, stop
	 */
	function helperRecorder_stop(i){
		
	}

	/**
	 * Adding TAB function and helper
	 */
	$(document)
		.delegate('#lushAllTheThings', 'keydown', function(e) {
			var keyCode = e.keyCode || e.which;

			if (keyCode == 9) {
				e.preventDefault();
				var start = $(this).get(0).selectionStart;
				var end = $(this).get(0).selectionEnd;

				$(this).val($(this).val().substring(0, start)
				            + "\t"
				            + $(this).val().substring(end));

				$(this).get(0).selectionStart =
				$(this).get(0).selectionEnd = start + 1;
			}

			/**
			 * Record the string if needed to
			 */
			if(RECORD === true){
				helperRecorder_start(e);
			}

			/**
			 * The dollar sign is pressed
			 */
			if(keyCode == 52 && e.shiftKey === true){
				RECORD = true;
			}
		});

	/**
	 * Adding Drag Drop function
	 */
	$(document)
		.on('dragenter', function (e){
		    e.stopPropagation();
		    e.preventDefault();
		    startStickies();
		    $('main').css('opacity', '0.25');
		});

	$(document)
		.on('dragover', function (e){
		     e.stopPropagation();
		     e.preventDefault();
		});
	
	$(document)
		.on('drop', function (e) {
			$('main').css('opacity', '');
			e.preventDefault();
			stopStickies();

			var dragged = e.originalEvent.dataTransfer;
			
			var reader = new FileReader();

			if(dragged.files[0].type !== 'text/markdown'){
				alert('Hmm... This doesn\'t look like Markdown. Are you using the .md extension?');
			} else {
				 reader.onload = function(){
			     	$('lush').replaceWith('<textarea id="lushAllTheThings">' + reader.result + '</textarea>');
			     	markdown2lush( $('#lushAllTheThings') );
			    };
			    reader.readAsText(dragged.files[0]);
			}

		});
}]);