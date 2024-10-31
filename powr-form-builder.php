<? header("Access-Control-Allow-Origin: *"); ?>
<?php
    /**
     * @package POWr Form Builder
     * @version 1.6.4
     */
    /*
    Plugin Name: POWr Form Builder
    Plugin URI: https://www.powr.io/plugins/form-builder
    Description: Increase conversions and get more sign-ups.  Drop the widget anywhere in your theme. Or use the POWr icon in your WP text editor to add to a page or post. Edit on your live page by clicking the settings icon. More plugins and tutorials at POWr.io.
    Author: POWr.io
    Version: 1.6.4
    Author URI: https://www.powr.io
    */

    ///////////////////////////////////////GENERATE JS IN HEADER///////////////////////////////
    //For local mode (testing)

    define( 'POWR_URL', 'https://www.powr.io');

    // define( 'POWR_URL', 'https://powr-alpha.herokuapp.com');

    if(!function_exists('powr_local_mode')){
        function powr_local_mode(){
          return false;
        }
    }
    add_filter( 'allowed_http_origins', 'add_allowed_origins' );
    function add_allowed_origins( $origins ) {
        $origins[] = 'https://www.powr.io';
        // $origins[] = 'https://powr-alpha.herokuapp.com';
        return $origins;
    }
    function add_cors_http_header(){
      header("Access-Control-Allow-Origin: *");
    }
    add_action('init','add_cors_http_header');
    //Generates an instance key
    if(!function_exists('generate_powr_instance')){
        function generate_powr_instance() {
          $alphabet = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';
          $pass = array(); //remember to declare $pass as an array
          $alphaLength = strlen($alphabet) - 1; // Put the length -1 in cache.
          for ($i = 0; $i < 10; $i++) { // Add 10 random characters.
            $n = rand(0, $alphaLength);
            $pass[] = $alphabet[$n];
          }
          $pass_string = implode($pass) . time(); // Add the current time to avoid duplicate keys.
          return $pass_string; // Turn the array into a string.
        }
    }
    //Adds script to the header if necessary
    if(!function_exists('initialize_powr_js')){
        function initialize_powr_js(){
          //No matter what we want the javascript in the header:
          add_option( 'powr_token', generate_powr_instance(), '', 'yes' );	//Add a global powr token: (This will do nothing if the option already exists)
          $powr_token = get_option('powr_token'); //Get the global powr_token
          if(powr_local_mode()){//Determine JS url:
            $js_url = '//localhost:3000/powr_local.js?external-type=wordpress';
          }else{
            $js_url = '//www.powr.io/powr.js?external-type=wordpress';
          }
          ?>
          <script>
            (function(d){
              var js, id = 'powr-js', ref = d.getElementsByTagName('script')[0];
              if (d.getElementById(id)) {return;}
              js = d.createElement('script'); js.id = id; js.async = true;
              js.src = '<?php echo $js_url; ?>';
              js.setAttribute('powr-token','<?php echo $powr_token; ?>');
              ref.parentNode.insertBefore(js, ref);
            }(document));
          </script>
          <?php
        }
        //CALL INITIALIZE
        add_action( 'wp_enqueue_scripts', 'initialize_powr_js' );
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////Create Form Builder widget/////////////////////////////////
    class Powr_Form_Builder extends WP_Widget{
      public $plugin;
      //Create the widget
      public function __construct(){
        parent::__construct( 'powr_form_builder',
                             __( 'POWr Form Builder' ),
                             array( 'description' => __( 'Form Builder by POWr.io') )
        );

      }
      //This prints the div
      public function widget( $args, $instance ){
        $label = $instance['label'];

        ?>
        <div class='widget powr-form-builder' label='<?php echo $label; ?>'></div>
        <?php
      }
      public function update( $new_instance, $old_instance ){
        $instance = $old_instance;
        //If no label, then set a label
        if( empty($instance['label']) ){
          $instance['label'] = 'wordpress_'.time();
        }

        return $instance;
      }
      public function form( $instance ){

        ?>
        <p>
          To edit, visit your live webpage and click the gears icon on your Form Builder.
        </p>
        <p>
          Learn more at <a href='https://www.powr.io/knowledge-base'>POWr.io</a>
        </p>
        <?php
      }


    }
    function plugin_row_meta( $plugin_meta, $plugin_file ) {
      if ( "powr-form-builder/powr-form-builder.php" === $plugin_file ) {
        $row_meta = [
          'docs' => '<a href="'.POWR_URL.'/users/me" aria-label="' . esc_attr( __( 'View Installed Plugins', 'powr-form-builder' ) ) . '" target="_blank">' . __( 'My Plugins', 'powr-form-builder' ) . '</a>'
        ];

        $plugin_meta = array_merge( $plugin_meta, $row_meta );
        return $plugin_meta;
      }
    }

    //Register Widget With WordPress
    function register_powr_form_builder() {
      register_widget( 'Powr_Form_Builder' );
    }
    //Use widgets_init action hook to execute custom function
    add_action( 'widgets_init', 'register_powr_form_builder' );
    add_filter( 'plugin_row_meta', 'plugin_row_meta', 10, 2);
    //Create short codes for adding plugins anywhere:
    function powr_form_builder_shortcode( $atts ){
      if(isset($atts['id'])){
        $id = $atts['id'];
      	return "<div class='powr-form-builder' id='$id'></div>";
      }else if(isset($atts['label'])){
        $label = $atts['label'];
		    return "<div class='powr-form-builder' label='$label'></div>";
      }else{
      	"<div class='powr-form-builder'></div>";
      }
    }
    add_shortcode( 'powr-form-builder', 'powr_form_builder_shortcode' );

    /* Add POWr Plug to tiny MCE */
    if( !function_exists('powr_tinymce_button') ){
      add_action( 'admin_init', 'powr_tinymce_button' ); //This calls the function below

      function powr_tinymce_button() {
           if ( current_user_can( 'edit_posts' ) && current_user_can( 'edit_pages' ) ) {
                add_filter( 'mce_buttons', 'powr_register_tinymce_button' );
                add_filter( 'mce_external_plugins', 'powr_add_tinymce_button' );
           }
      }
      function powr_register_tinymce_button( $buttons ) {
           array_push( $buttons, 'powr');
           return $buttons;
      }
      function powr_add_tinymce_button( $plugin_array ) {
           $plugin_array['powr'] = plugins_url( '/powr_tinymce.js', __FILE__ ) ;
           return $plugin_array;
      }
      //CSS For icon
      function powr_tinymce_css() {
          wp_enqueue_style('powr_tinymce', plugins_url('/powr_tinymce.css', __FILE__));
      }
      add_action('admin_enqueue_scripts', 'powr_tinymce_css');
    }
    //ADD MENUS
    add_action( 'admin_menu', 'powr_form_builder_menu' );
    function powr_form_builder_menu() {
      add_menu_page( 'POWr Form Builder', 'POWr Form Builder', 'manage_options', 'powr-form-builder-settings', 'powr_form_builder_options', plugins_url('/powr-icon.png',__FILE__));
    }

    function getAccessToken() {
      if($_GET["code"] && !$_GET["id"]) {
        global $wpdb;
        // echo $_GET["code"];
        $authorization_code = $_GET['code'];
        // echo $authorization_code;
        $sql = "SELECT * FROM wp_powr_form_builder ORDER By ID DESC LIMIT 1";
        $results = $wpdb->get_results($sql) or die(mysql_error());
        // var_dump($results);
        $result = $results[0];
        // echo $result->uid;
        // $url = 'https://localhost:3000/oauth/token';
        $url = POWR_URL . '/oauth/token';
        $data = array(
          'client_id' => $result->uid,
          'client_secret' => $result->secret,
          'code' => $authorization_code,
          'redirect_uri' => get_admin_url().'?page=powr-form-builder-settings',
          'grant_type' => 'authorization_code'
         );
         $oauth = wp_remote_post( $url, array(
           'method'      => 'POST',
           'timeout'     => 45,
           'redirection' => 5,
           'httpversion' => '1.0',
           'blocking'    => true,
           'headers'     => array(
              "content-type" => "application/x-www-form-urlencoded"
            ),
           'body'        => $data,
           'cookies'     => array()
           )
         );
         if ( is_wp_error( $response ) ) {
           $error_message = $response->get_error_message();
           echo "Something went wrong: $error_message";
         } else {
          $secret = json_decode($oauth['body']);
          $access_token = $secret->access_token;
          $access_table_name = $wpdb->prefix . "powr_form_builder_access_tokens";
          $wpdb->insert(
           $access_table_name,
           array(
             'time' => current_time( 'mysql' ),
             'access_token' => $access_token,
           )
          );
          return $access_token;
        }
      }
      return getAccessTokenFromDB();
    }

    function getAccessTokenFromDB() {
      global $wpdb;
      $access_table_name = $wpdb->prefix . "powr_form_builder_access_tokens";
      $sql = "SELECT * FROM $access_table_name ORDER By ID DESC LIMIT 1";
      $results = $wpdb->get_results($sql) or die(mysql_error());
      if($results && $results[0]) {
        return $results[0]->{'access_token'};
      } else {
        return '' ;
      }
    }

    function staticPOWrAppCode() {
      $app_unique_label = '';
      if($_GET["id"]) {
        $id = $_GET["id"];
      } else {
        $app_unique_label = 'wordpress_'.time();
      }
      // $test_html = require_once( ABSPATH . 'wp-content/plugins/powr-form-builder/app_html.php' );
      echo "<!DOCTYPE html>
      <html>
      <body>
      <link href='//maxcdn.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
      <link href='//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>
      <!--[if IE 9]>
      <link rel=\"stylesheet\" media=\"screen\" href=\"/assets/ie9-overrides.css\" />
      <![endif]-->
      <link rel=\"stylesheet\" media=\"screen\" href=\"./../wp-content/plugins/powr-form-builder/assets/js/apps-wordpress_settings-efca4e700cd01dc6e9e6.css\" />
      <link rel=\"stylesheet\" media=\"screen\" href=\"./../wp-content/plugins/powr-form-builder/assets/css/formBuilder.css\" />
      <meta name=\"csrf-param\" content=\"authenticity_token\" />
      <meta name=\"csrf-token\" content=\"AxPPfrSaS/JmqHqym/emr2GrhWlFi2jooe6KQcdS8TyQCQwgzsXcc4QPK4aIrf65e7z37AH9xRMoj1iqZIpc1w==\" />
      <div class='container-fluid editor-container clearfix' id='apps-standalone'>
      <div id=\"edit-topbar-container\"></div>
      <!-- APP SETTINGS -->
      <div class='formBuilderSettings' id='appSettings'>
      <div class='navContainer navContainer-js theme-4'>
      <div class='nav-tabs'>
      <tr></tr>
      </div>
      </div>
      <div class='backNextContainer theme-4'>
      <div class='nextSectionContianer'>
      <div class='row pad-m'>
      <span class='col-s-6'>
      <button class='button button-secondary-outline prevSection'>Go Back</button>
      </span>
      <span class='col-s-6'>
      <button class='button button-secondary-outline nextSection normal'>
      <span class='nextSectionText'>Next</span>
      <span class='nextSectionPublishText hid'>
      Add to Site
      </span>
      <i class='fa fa-arrow-circle-right js-next-icon'></i>
      </button>
      </span>
      </div>
      </div>
      <div id='sidebar-publish-group-container'></div>
      </div>

      <div class='sectionContainer tab-content theme-3'>
        <div class=\"gettingStartedWithSettings section\" data-label=\"Get Started\">

      <div class='powrreact-component-js' id='powr-get-started' powr-react='PowrSection'></div>
      <div class='langSelectWrapper'>
      <div class='langDropdown'>
      <div class='langSelected'>
      <i class='fa fa-globe'></i>
      <span class='langSelectedVal'>
      EN
      </span>
      <!-- /%i.fa.fa-chevron-down -->
      </div>
      <ul class='lang-list'>
      <li class='activeLang' data-locale='en'>English</li>
      <li class='' data-locale='es'>Español</li>
      <li class='' data-locale='de'>Deutsch</li>
      <li class='' data-locale='fr'>Français</li>
      </ul>
      </div>
      </div>

        <div class=\"stupidFirefoxAndIEHack\"></div>
        </div>


        <div class=\"form section\" data-label=\"Form\">

      <div class='powrreact-component-js' id='powr-form-builder-content' powr-react='PowrSection'></div>
        <div class=\"stupidFirefoxAndIEHack\"></div>
        </div>

        <div class=\"settings section\" data-label=\"Settings\">

      <div class='powrreact-component-js' id='powr-form-builder-settings' powr-react='PowrSection'></div>
        <div class=\"stupidFirefoxAndIEHack\"></div>
        </div>

        <div class=\"payment section\" data-label=\"Payment\">

      <div class='powrreact-component-js' id='powr-form-builder-payment' powr-react='PowrSection'></div>
        <div class=\"stupidFirefoxAndIEHack\"></div>
        </div>

        <div class=\"design section\" data-label=\"Design\">

      <div class='powrreact-component-js' id='powr-form-builder-design' powr-react='PowrSection'></div>
        <div class=\"stupidFirefoxAndIEHack\"></div>
        </div>


      <div id='upgrade-modal'></div>

      </div>
      </div>
      <div id='appViewWrapper'>
      <div id='appView'></div>
      </div>
      <script id='formBuilderSettingsTemplate' type='text/html'>
      <div class='navContainer navContainer-js theme-4'>
      <div class='nav-tabs'>
      <tr></tr>
      </div>
      </div>
      <div class='backNextContainer theme-4'>
      <div class='nextSectionContianer'>
      <div class='row pad-m'>
      <span class='col-s-6'>
      <button class='button button-secondary-outline prevSection'>Go Back</button>
      </span>
      <span class='col-s-6'>
      <button class='button button-secondary-outline nextSection normal'>
      <span class='nextSectionText'>Next</span>
      <span class='nextSectionPublishText hid'>
      Continue
      </span>
      <i class='fa fa-arrow-circle-right js-next-icon'></i>
      </button>
      </span>
      </div>
      </div>
      <div id='sidebar-publish-group-container'></div>
      </div>

      <div class='sectionContainer tab-content theme-3'>
        <div class=\"gettingStartedWithSettings section\" data-label=\"Get Started\">

      <div class='powrreact-component-js' id='powr-get-started' powr-react='PowrSection'></div>
      <div class='langSelectWrapper'>
      <div class='langDropdown'>
      <div class='langSelected'>
      <i class='fa fa-globe'></i>
      <span class='langSelectedVal'>
      EN
      </span>
      <!-- /%i.fa.fa-chevron-down -->
      </div>
      <ul class='lang-list'>
      <li class='activeLang' data-locale='en'>English</li>
      <li class='' data-locale='es'>Español</li>
      <li class='' data-locale='de'>Deutsch</li>
      <li class='' data-locale='fr'>Français</li>
      </ul>
      </div>
      </div>

        <div class=\"stupidFirefoxAndIEHack\"></div>
        </div>


      <div class=\"loader\">
        <div class=\"small circle\"></div>
        <div class=\"medium circle\"></div>
        <svg version=\"1.1\" id=\"Layer_1\" class=\"powr-logo-icon\"  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"
      	 width=\"1024px\" height=\"1024px\" viewBox=\"0 0 1024 1024\" enable-background=\"new 0 0 1024 1024\" xml:space=\"preserve\">
      <path d=\"M546.521,74.469v236.123H477.53V74.443C325.272,91.428,203.937,221.798,203.937,380.142c0,0.85,0.004,2.759,0.004,2.869
      	v418.024c0,0.7,0.16,1.59,0.347,2.267c1.235,4.459,3.211,7.617,4.957,10.21c2.167,3.219,4.1,5.444,5.237,6.723
      	c66.51,74.817,166.394,115.695,271.208,132.901c13.578,2.229,26.779-4.354,28.694-19.888c0.547-4.435,0.43-245.505,0.43-245.505
      	c0-0.015,0.021-0.026,0.035-0.026c163.53-1.441,296.705-130.467,304.576-292.383C827.41,231.111,704.727,92.234,546.521,74.469
      	 M512.076,604.368c-124.581,0-225.493-100.993-225.493-225.576c0-87.667,50.583-163.654,123.145-200.985v80.419
      	c-33.307,28.833-54.789,71.539-54.789,119.201c0,86.828,70.348,157.219,157.178,157.219c86.83,0,157.042-70.392,157.042-157.219
      	c0-47.641-20.339-90.33-54.835-119.162V177.83c72.56,37.342,123.171,113.312,123.171,200.963
      	C737.495,503.375,636.657,604.368,512.076,604.368\"/>
      </svg>
        <div class=\"medium circle\"></div>
        <div class=\"small circle\"></div>
      </div>

      </div>
      <div class='triggerPublish'></div>

      <div class=\"modalPanel upgradePanel  scheme-3\">
        <div class=\"panel-header scheme-1\">
          <div class=\"upgradePanelClose modalPanelClose col-xs-6 col-md-3 noPadLeft\">
            <span class=\"modalPanelClose backButton\">
              <i class=\"fa fa-arrow-left\"></i>
              <span>
                Back to Editor
              </span>
            </span>
          </div>
          <div class=\"upgradePanelClose modalPanelClose col-xs-6 panelTitle\">
            <span>
                Upgrade
            </span>
          </div>
          <div class=\"upgradePanelClose modalPanelClose col-xs-6 col-md-3 xbutton noPadRight\">

              <span class=\"modalPanelClose panel-close\" style=\"\">
                  <!-- <i class=\"fa fa-times\"></i> -->
                  <div class=\"closeContinue\">
                    No thanks, continue
                  </div>
              </span>
          </div>
        </div>
        <div class=\"modal-panel-body\">
          <div class=\"loader\">
        <div class=\"small circle\"></div>
        <div class=\"medium circle\"></div>
        <svg version=\"1.1\" id=\"Layer_1\" class=\"powr-logo-icon\"  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"
      	 width=\"1024px\" height=\"1024px\" viewBox=\"0 0 1024 1024\" enable-background=\"new 0 0 1024 1024\" xml:space=\"preserve\">
      <path d=\"M546.521,74.469v236.123H477.53V74.443C325.272,91.428,203.937,221.798,203.937,380.142c0,0.85,0.004,2.759,0.004,2.869
      	v418.024c0,0.7,0.16,1.59,0.347,2.267c1.235,4.459,3.211,7.617,4.957,10.21c2.167,3.219,4.1,5.444,5.237,6.723
      	c66.51,74.817,166.394,115.695,271.208,132.901c13.578,2.229,26.779-4.354,28.694-19.888c0.547-4.435,0.43-245.505,0.43-245.505
      	c0-0.015,0.021-0.026,0.035-0.026c163.53-1.441,296.705-130.467,304.576-292.383C827.41,231.111,704.727,92.234,546.521,74.469
      	 M512.076,604.368c-124.581,0-225.493-100.993-225.493-225.576c0-87.667,50.583-163.654,123.145-200.985v80.419
      	c-33.307,28.833-54.789,71.539-54.789,119.201c0,86.828,70.348,157.219,157.178,157.219c86.83,0,157.042-70.392,157.042-157.219
      	c0-47.641-20.339-90.33-54.835-119.162V177.83c72.56,37.342,123.171,113.312,123.171,200.963
      	C737.495,503.375,636.657,604.368,512.076,604.368\"/>
      </svg>
        <div class=\"medium circle\"></div>
        <div class=\"small circle\"></div>
      </div>


      </div>
      </div>

      <div aria-hidden='true' class='modal fade' id='shareThis' role='dialog' tabindex='-1'>
      <div class='modal-dialog'>
      <div class='modal-content powrStyle'>
      <div class='modal-header'>
      <button aria-hidden='true' class='close' data-dismiss='modal' type='button'>×</button>
      <div class='modal-title'>
      <span class='powrIcon icon-logo'></span>
      Share POWr
      </div>
      </div>
      <div class='modal-body'>
      <h2>
      Refer a friend and you&#39;ll both get 10 free days of Pro!
      </h2>
      <ul class='socialLinks'>
      <li class='facebook'>
      <i class='fa fa-facebook'></i>
      Share on Facebook
      </li>
      <li class='twitter'>
      <i class='fa fa-twitter'></i>
      Share on Twitter
      </li>
      <li class='linkedin'>
      <i class='fa fa-linkedin'></i>
      Share on LinkedIn
      </li>
      <li class='email'>
      <i class='fa fa-envelope-o'></i>
      Email
      </li>
      </ul>
      </div>
      </div>
      </div>
      </div>

      <div aria-hidden='true' class='modal fade' id='accessModal' role='dialog' tabindex='-1'>
      <div class='modal-dialog'>
      <div class='modal-content powrStyle'>
      <div class='modal-header scheme-1'>
      <button aria-label='Close' class='close' data-dismiss='modal' type='button'>
      <span aria-hidden='true'>&times;</span>
      </button>
      <div class='modal-title'>
      Grant Access
      </div>
      </div>
      <div class='modal-body text-center'>
      <i class='fa fa-refresh fa-spin'></i>
      </div>
      </div>
      </div>
      </div>

      <div class='powrWalkthrough scheme-3 hid'>
      <div class='walkthroughArrow'></div>
      <span class='closeModal walkthroughCancel fa fa-times'></span>
      <h3 class='walkthroughTitle'></h3>
      <p class='walkthroughText'></p>
      <div class='walkthroughButtons'>
      <span class='walkthroughCancel powrbutton secondary walkthroughSkip'>
      skip
      </span>
      <span class='walkthroughTriggerNext walkthroughNext powrbutton'>
      Next
      </span>
      <span class='walkthroughTriggerNext walkthroughGetStarted powrbutton'>
      Get Started
      </span>
      <span class='walkthroughCancel powrbutton walkthroughDone'>
      Done
      </span>
      </div>
      </div>
      <div class='clickwheel hid'>
      <div class='clickwheelSolar scheme-1'></div>
      </div>

      </script>

      <script>
        SHOW_CHAT = false;
        CHAT_AVAILABLE = false;
      </script>
      <div id='helpCenterBackground'></div>
      <script>
        /*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement(\"iframe\");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src=\"javascript:false\",r.title=\"\",r.role=\"presentation\",(r.frameElement||r).style.cssText=\"display: none\",d=document.getElementsByTagName(\"script\"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(e){n=document.domain,r.src='javascript:var d=document.open();d.domain=\"'+n+'\";void(0);',o=s}o.open()._l=function(){var o=this.createElement(\"script\");n&&(this.domain=n),o.id=\"js-iframe-async\",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload=\"document._l();\">'),o.close()}(\"https://assets.zendesk.com/embeddable_framework/main.js\",\"powr-support.zendesk.com\");
        /*]]>*/
        window.zESettings = {
          webWidget: {
            contactForm: {
              suppress: true
            },
            chat: {
              suppress: true
            },
            color: {
             launcherText: '#FFF'
            }
          }
        };
      </script>


      <div aria-hidden='true' class='modal fade' id='confirmModal' role='dialog' tabindex='-1'>
      <div class='modal-dialog'>
      <div class='modal-content powrStyle'>
      <div class='modal-header'>
      <button aria-hidden='true' class='close' data-dismiss='modal' type='button'>×</button>
      <div class='modal-title'>
      Please confirm
      </div>
      </div>
      <div class='modal-body'>
      Are you sure?
      </div>
      <div class='modal-footer'>
      <a class='powrbutton secondary' data-dismiss='modal' href='#'>
      Cancel
      </a>
      <a class='powrbutton' data-dismiss='modal' href='#' id='okBtn'>
      OK
      </a>
      </div>
      </div>
      </div>
      </div>

      <!--/ Modal-->
      <script id='file-manager-template' type='text/html'>
      <div aria-hidden='true' aria-labelledby='myModalLabel' class='modal fade' id='{{= opts.name}}Manager' role='dialog' tabindex='-1'>
      <div class='modal-dialog'>
      <div class='modal-content scheme-3'>
      <div class='modal-header'>
      <button aria-hidden='true' class='close' data-dismiss='modal' type='button'>×</button>
      <div class='modal-title'>
      <!-- {{= opts.capitalName}} Manager -->
      </div>
      </div>
      <div class='modal-body'>
      <div class='uploadOtions'>
      <div id='add-{{=opts.name}}'>
      <ul class='nav nav-tabs' role='tablist'>
      <li class='active' role='presentation'>
      <a aria-controls='home' data-toggle='tab' href='#imageupload' role='tab'>
      Upload File
      </a>
      </li>
      {{ if (!opts.hideUrl) { }}
      <li role='presentation'>
      <a aria-controls='profile' data-toggle='tab' href='#urlupload' role='tab'>URL</a>
      </li>
      {{ } }}
      <li class='addFromStock' role='presentation'>
      <a aria-controls='messages' data-toggle='tab' href='#stockimage' role='tab'>
      Stock Image
      </a>
      </li>
      </ul>
      <div class='tab-content'>
      <div class='tab-pane active' id='imageupload' role='tabpanel'>
      <form class='imageUploadForm' enctype='multipart/form-data'>
      <i class='fa fa-picture-o dragDropIcon'></i>
      <p class='dragText'>
      Drag a file here
      </p>
      <p>
      - or -
      </p>
      <button class='chooseFile powrbutton' type='button'>
      Choose File
      </button>
      <div class='fileProgressBar hid' data-upload-complete='Upload complete'></div>
      <div class='fileLoadingBar hid' data-upload-complete='Loading'></div>
      <input accept='{{=opts.accept}}' class='hidden imageUploadInput' multiple='multiple' name='file[]' title='Select File' type='file'>
      <!-- <input name=\"file[]\" type=\"file\", accept=\"{{=opts.accept}}\" class=\"imageUploadInput\" multiple=\"multiple\"> -->
      <input name=\"app_id\" type=\"hidden\" value=\"#{@app['id']}\"} >
      <p class='fileSizeCheckError failure triggerUpgrade hid'></p>
      </form>
      </div>
      {{ if (!opts.hideUrl) { }}
      <div class='tab-pane' id='urlupload' role='tabpanel'>
      <div class='url-adder'>
      <input class='form-control' name='url' placeholder='Enter a {{=opts.name}} url' type='text'>
      </div>
      </div>
      {{ } }}
      <div class='tab-pane text-center' id='stockimage' role='tabpanel'>
      <div class='search-input-group'>
      <input class='search-stock-image-input ignore form-control' placeholder='Search Images'>
      <div class='stock-image-content-wrapper hid clearfix pad-v-m pad-h-nil card has-shadow margin-top-s'>
      <div class='stock-image-content'></div>
      <div class='more-stock-images-wrapper pad-top-m'>
      <button class='button-s button button-primary-outline more-stock-images hid'>
      More
      </button>
      <span class='upgrade-stock-images hid'>
      <button class='button-s button-upgrade triggerPremium' data-dismiss='modal'>Upgrade to Pro</button>
      for access to over 300,000 Free Photos.
      </span>
      </div>
      <a class='text-center margin-top-m unsplash-watermark' href='https://www.unsplash.com?utm_source=POWr&amp;utm_medium=referral&amp;utm_campaign=api-credit' target='_blank'>
      Photos by Unsplash
      </a>
      </div>
      </div>
      <div class='margin-top-m'>
      OR
      </div>
      <a class='powrbutton margin-top-s' href='//www.shareasale.com/r.cfm?b=257542&amp;u=923171&amp;m=29473&amp;urllink=&amp;afftrack=' target='_blank'>
      Get Images from Depositphoto
      </a>
      </div>
      </div>
      </div>
      </div>
      <div class='fileLibraryHeader'>
      Select File
      </div>
      <div id='{{=opts.name}}-box'>
      <div class='row' id='current-{{=opts.name}}s'>
      <!-- Loaded dynamically via AJAX -->
      <div class='loading'>
      <i class='fa fa-refresh fa-spin'></i>
      <div class='imageLoadErrors errors hid'></div>
      </div>
      </div>
      </div>
      <div class='spaceSummary hid'>
      <i class='fa fa-warning hid limitReached'></i>
      You are using
      <span class='used'></span>
      out of
      <span class='limit'></span>
      </div>
      <!-- <hr> -->
      </div>
      <div class='modal-footer'>
      <div class='errors' id='{{=opts.name}}-errors'></div>
      <button class='powrbutton secondary' data-dismiss='modal' type='button'>
      Cancel
      </button>
      <button class='powrbutton success select-button' type='button'>
      Select File
      </button>
      </div>
      </div>
      </div>
      </div>
      </script>

        <div class=\"saveModal modal fade text-center\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">
          <div class=\"modal-dialog modal-lg\">
            <div class=\"modal__content\">
              <div class=\"modal__header\">
                <h4><i class=\"fa fa-save\"></i> Please save/publish this plugin first!</h4>
              </div>
              <div class=\"modal__footer\">
                <button class=\"button button-primary triggerPublish\" data-dismiss=\"modal\"> Save</button>
              </div>
            </div>
          </div>
        </div>


      <div id='toast-container'></div>
      <script src='//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js'></script>
      <!--[if IE 8]>
      <script src=\"/javascripts/ie8-overrides.js\"></script>
      <![endif]-->
      <script>
        // Setting defaults
        window.ENVIRONMENT = \"production\"
        window.HOST=\"wordpress\"
        window.WORDPRESS_BUILD_PLUGIN_MODE = true;
        window.SIMPLE_COPIES_DICTIONARY = {}
        // Setting empties
      </script>
      <script>
        window.CONTENT={};
        window.BACKUP_CONTENT=null;
        window.META={\"unique_label\": \"$app_unique_label\",\"app_type\":\"formBuilder\",\"app_namespace\":\"formBuilder\",\"app_slug\":\"form-builder\",\"app_common_name\":\"Form Builder\",\"soft_alias\":false,\"edit_me\":false,\"chameleon_url\":undefined};
        window.GLOBALS=null;
        window.IS_EU = false;
        window.IS_US = true;
      </script>
      <script>
        window.WIX_QA_APP_TYPE = \"formBuilder\";
        window.SHOPIFY_QA_APP_TYPE = \"\";
        window.BIGCOMMERCE_QA_APP_TYPE = \"\";
        window.AMERICOMMERCE_QA_APP_TYPE = \"\";
        window.WEEBLY_QA_APP_TYPE = \"formBuilder\";
        window.WEEBLY_BACKEND_QA_APP_TYPE = \"\";
      </script>

      <script async='async' defer='defer' src='//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'></script>
      <script src=\"./../wp-content/plugins/powr-form-builder/assets/js/apps-wordpress_settings.js\"></script>
      <script src=\"./../wp-content/plugins/powr-form-builder/assets/js/apps/formBuilder.js\"></script>
      <noscript>
      <img height='1' src='https://www.facebook.com/tr?id=2671846833039974&amp;ev=PageView&amp;noscript=1' width='1'>
      </noscript>
      </div>
      </body>
      </html>";
    }

    function override_styles() {
      echo "<style>
        #adminmenuwrap, #adminmenuback {
          display: none;
        }
        #wpcontent {
          margin-left: 0 !important;
          padding-left: 0;
        }
        #wpcontent .site-wrapper {
          padding-top: 32px;
        }
        #wpcontent #appSettings .navContainer{
          top: 98px;
        }
        #wpcontent #appSettings .section{
          top: 50px;
        }
        #wpcontent #edit-topbar-container, .topbar-nav {
          top: 34px;
        }
        #wpcontent .publish-uber-panel {
          padding-top: 72px;
        }
        #wpcontent #product-navigation-bar-container {
          position: fixed;
          z-index: 99991;
        }
        #wpcontent .sideBar.increase-sales-sidebar {
          padding-top: 34px;
        }
        #wpcontent .powrDrilldown .powrDrilldownContent {
          height: calc(100% - 34px);
          top: 98px;
        }
        #wpcontent .product-updates {
          top: 32px;
        }
        #wpcontent .update-nag{
          display: none;
        }

      </style>";
    }

    function powr_form_builder_options() {
      $redirect_url = 'https://www.powr.io/wp-create/form-builder';
      if(powr_local_mode()){//Determine JS url:
        $redirect_url = POWR_URL.'/wp-create/form-builder';
      }
      $access_token = getAccessToken();
      echo "<script>
        window.POWR_URL = \"" .POWR_URL. "\";
        window.ACCESS_TOKEN = \"" .$access_token. "\";
      </script>";
      override_styles();
      staticPOWrAppCode();
      echo "<script src=\"https://www.powr.io/powr.js\"
      -token='asdfg2sd'>";
      // echo "<script src=\"http://localhost:3000/powr_local.js\" powr-token='asdfg2sd'>";
    }
    if( !function_exists('admin_handle_powr_ext_urls') ){
      add_action('in_admin_footer', 'admin_handle_powr_ext_urls');
      function admin_handle_powr_ext_urls(){
		    echo '<script>';
        echo 'if( document.querySelector("a[class*=page_powr-]") ){ ';
	      echo 'document.querySelector("a[class*=page_powr-]").target = "_blank"';
        echo '}';
		    echo '</script>';
      }
	  }

    //Redirecting to landing page when plugin is activated
    register_activation_hook(__FILE__, 'powr_form_builder_plugin_activate');
      add_action('admin_init', 'powr_form_builder_plugin_redirect');

      function powr_form_builder_plugin_activate() {
      add_option('powr_form_builder_plugin_do_activation_redirect', true);
      }

      $current_date = new DateTime();
      $current_timestamp = $current_date->format('U');
      add_option('powr_install_time', $current_timestamp, '', 'yes' );	//Add a global powr oauth token: (This will do nothing if the option already exists)

      function powr_form_builder_plugin_redirect() {
      if (get_option('powr_form_builder_plugin_do_activation_redirect', false)) {
          delete_option('powr_form_builder_plugin_do_activation_redirect');
          if(!isset($_GET['activate-multi']))
          {
            echo "activate-multi called";
            $redirect_url = get_admin_url().'?page=powr-form-builder-settings';
            $admin_url = get_admin_url();
            $url = POWR_URL. '/api/v1/oauth/application';
            $data = array(
              'name' => get_bloginfo(),
              'redirect_uri' => $admin_url
            );
            echo get_bloginfo();
            echo get_admin_url();
            $response = wp_remote_post( $url, array(
              'method'      => 'POST',
              'timeout'     => 45,
              'redirection' => 5,
              'httpversion' => '1.0',
              'blocking'    => true,
              'headers'     => array(
                "content-type" => "application/x-www-form-urlencoded"
              ),
              'body'        => $data,
              'cookies'     => array()
              )
            );

            if ( is_wp_error( $response ) ) {
              $error_message = $response->get_error_message();
              echo "Something went wrong: $error_message";
            } else {
              echo 'Response:<pre>';
              $oauth_details =  json_decode($response['body']);
              print_r($oauth_details->{'oauth'});
              $oauth = $oauth_details->{'oauth'};
              print_r($oauth->{'secret'});
              global $wpdb;

              $table_name = $wpdb->prefix . "powr_form_builder";
              $charset_collate = $wpdb->get_charset_collate();

              $sql = "CREATE TABLE $table_name (
                id mediumint(9) NOT NULL AUTO_INCREMENT,
                time datetime NOT NULL,
                name tinytext NOT NULL,
                uid varchar(100) DEFAULT '' NOT NULL,
                secret varchar(100) DEFAULT '' NOT NULL,
                PRIMARY KEY  (id)
              ) $charset_collate;";

              require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
              dbDelta( $sql );

              $access_table_name = $wpdb->prefix . "powr_form_builder_access_tokens";
              $tokensql = "CREATE TABLE $access_table_name (
                id mediumint(9) NOT NULL AUTO_INCREMENT,
                time datetime NOT NULL,
                access_token varchar(100) DEFAULT '' NOT NULL,
                PRIMARY KEY  (id)
              ) $charset_collate;";
              require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
              dbDelta( $tokensql );

              // $apps_table_name = $wpdb->prefix . "powr_form_builder_apps";
              // $appssql = "CREATE TABLE $apps_table_name (
              //   id mediumint(9) NOT NULL AUTO_INCREMENT,
              //   time datetime NOT NULL,
              //   unique_label varchar(100) DEFAULT '' NOT NULL,
              //   app_id INT(100);
              //   PRIMARY KEY  (id)
              // ) $charset_collate;";
              // require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
              // dbDelta( $appssql );

              $wpdb->insert(
              	$table_name,
              	array(
              		'time' => current_time( 'mysql' ),
              		'name' => $oauth->{'name'},
              		'uid' => $oauth->{'uid'},
                  'secret' => $oauth->{'secret'},
              	)
              );

              // $wpdb->insert(
              // 	$apps_table_name,
              // 	array(
              // 		'time' => current_time( 'mysql' ),
              //     'unique_label' => 'wordpress_'.time()
              // 	)
              // );

              // wp_redirect("http://localhost:3000/oauth/authorize?response_type=code&client_id=".$oauth->{'uid'}."&redirect_uri=".$redirect_url);
              wp_redirect(POWR_URL."/oauth/authorize?response_type=code&client_id=".$oauth->{'uid'}."&redirect_uri=".$redirect_url);
            }

            // wp_redirect( get_admin_url().'?platform=wordpress&page=powr-form-builder-settings&' );
            //url-ify the data for the POST
            // foreach($data as $key=>$value) { $data_string .= $key.'='.$value.'&'; }
            // rtrim($data_string, '&');
            //
            // //open connection
            // $ch = curl_init();
            //
            // //set the url, number of POST vars, POST data
            // curl_setopt($ch,CURLOPT_URL, $url);
            // curl_setopt($ch,CURLOPT_POST, count($data));
            // curl_setopt($ch,CURLOPT_POSTFIELDS, $data_string);

            //execute post
            // $response = curl_exec($ch);
            // {"oauth":{"uid":"0507c4ae5e258cd3f74966e1f6e0f55b40d59ce7759e2efb20d810a0653b6ad4","name":"Praneeta Site","secret":"d7d81055d73ab689a3ace8407de7d4c0f7f232e5eb95a7d1613b53520f99a437"}}
            // //close connection
            // curl_close($ch);
            // echo json_encode($response);
            // wp_redirect("https://localhost:3000/oauth/authorize?client_id=7f40632040cfd89c0a740937894aa6fc63728d72f1770963736825ca68f5471c&redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&response_type=code");
            // wp_redirect("https://localhost:3000/oauth/authorize?client_id=".$localClientCode."&redirect_uri=urn:ietf:wg:oauth:2.0:oob");
          }
        }
      }


  ?>
