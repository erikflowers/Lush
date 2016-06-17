$('document').ready(function(){

  /**
   * Load raw MD file Gitlab
   */
  function loadRawMd(url){
    $.get( url )
      .fail(function(){
        $('#lush--git-box').prepend('<div id="lush--git-error">Something is wrong, check your input</div>');
      })
      .done(function(data){
        /**
         * Go through normal input process
         */
        //console.log( $('#lushAllTheThings').length );
        //if( $('#lushAllTheThings') ){
          $('#lush--markdownLush-switch').click();
          $('#lushAllTheThings').val(data);
          $('#lush--markdownLush-switch').click();
        //}
      });
  }

  /**
   * function to load Gitlab resources
   */
  function loadGitlabFiles(source, privateToken, user, repo, dir, branch){
    $.get( 'https://' + source + '/api/v3/projects/' + user + '%2F' + repo + '/repository/tree?path=' + dir + '&private_token=' + privateToken )
      .fail(function(){
        $('#lush--git-box').prepend('<div id="lush--git-error">Something is wrong, check your input</div>');
      })
      .done(function(data){
        $.each(data, function(key, obj){
          var name = obj.name;
          var id = obj.id;
          if( name.substr(name.length - 3) === '.md'){
            $('#lush--git-sourceContentUrl').parent().show(); // show dropdown
            $('#lush--git-load').hide(); // hide button
            $('#lush--git-sourceContentUrl').append('<option value="' + name + '">' + name + '</option>');
          }
        })

        $('#lush--git-sourceContentUrl').change(function(){
          $.fancybox.close();
          loadRawMd( 'https://' + source + '/api/v3/projects/' + user + '%2F' + repo + '/repository/blobs/master?filepath=' + dir + '/' + this.value + '&private_token=' + privateToken );
        })
      })
  }

  /**
   * Function to load Github resources
   */
  function loadGithubFiles(source, privateToken, user, repo, dir, branch){
    $.get( 'https://' + source + '/repos/' + user + '/' + repo + '/contents/' + dir + '?ref=' + branch)
      .fail(function(){
        $('#lush--git-box').prepend('<div id="lush--git-error">Something is wrong, check your input</div>');
      })
      .done(function(data){
        $('#lush--git-error').remove();
        $.each(data, function(key, obj){
          var name = obj.name;
          var contentUrl = obj.download_url;
          if( name.substr(name.length - 3) === '.md'){
            $('#lush--git-sourceContentUrl').parent().show(); // show dropdown
            $('#lush--git-load').hide(); // hide button
            $('#lush--git-sourceContentUrl').append('<option value="' + contentUrl + '">' + name + '</option>');
          }
        })

        // Add the branches


        $('#lush--git-sourceContentUrl').change(function(){
          $.fancybox.close();
          loadRawMd( this.value );
        })

      })
  }

  /**
   * Sets the right input fields for Git
   */
  function setInputs(i){

    function openAll(){
      $('#lush--git-box')
        .find('[id^="lush--git"]')
        .not('#lush--git-sourceContentUrl')
        .each(function() {
          $(this).parent().show();
        })
    }

    switch(i){
      case 'github':
        openAll();
        $('#lush--git-sourceUrl').parent().hide();
        $('#lush--git-privateToken').parent().hide();
        break;
      case 'gitlab':
        openAll();
        break;
    }
  }

  /**
   * Add Fancybox
   */
  $('#lush--git').fancybox({
    maxWidth  : 360,
    maxHeight : 640,
    fitToView : false,
    width   : '90%',
    height    : '90%',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none'
  });

  /**
   * Add button actions
   */
  if( $('#lush--git-box').length ){
    /**
     * Show load button on change
     */
    $('[id^="lush--git"]').change(function(){
      $('#lush--git-load').show();
    })

    /**
     * change url when location changes
     */
    $('#lush--git-source').change(function(){
      switch ( this.value ) {
        case 'github':
          setInputs('github');
          $('#lush--git-sourceUrl').val('api.github.com');
          break;
        case 'gitlab':
          setInputs('gitlab');
          $('#lush--git-sourceUrl').val('gitlab.com');
          break;
      }
    })

    $('#lush--git-load').click(function(){
      switch ( $('#lush--git-source').val() ){
        case 'github':
          loadGithubFiles( $('#lush--git-sourceUrl').val(), $('#lush--git-privateToken').val(), $('#lush--git-user').val(), $('#lush--git-repo').val(), $('#lush--git-dir').val(), $('#lush--git-branch').val() );
          break;
        case 'gitlab':
          loadGitlabFiles( $('#lush--git-sourceUrl').val(), $('#lush--git-privateToken').val(), $('#lush--git-user').val(), $('#lush--git-repo').val(), $('#lush--git-dir').val(), $('#lush--git-branch').val());
          break;
      }
    })
  }
})