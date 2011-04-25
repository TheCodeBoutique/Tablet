/* >>>>>>>>>> BEGIN source/core.js */
// ==========================================================================
// Project:   Tablet
// Copyright: ©2011 The Code Boutique
// ==========================================================================
/*globals Tablet */


Tablet = SC.Application.create(
/** @scope Tablet.prototype */
{

  NAMESPACE: 'Tablet',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures),
 

	// Finds a devices orientation before any views are appended //
 device: SC.device.addObserver("orientation", this,
  function() {
    var or = SC.device.get("orientation");
    console.log(or);

    if (or === 'portrait') {
      Tablet.motionController.set('isInPortrait', true);
    } else {}
  })
  
});

/* >>>>>>>>>> BEGIN source/controllers/motion.js */
// ==========================================================================
// Project:   Tablet.motionController
// Copyright: ©2011 The Code Boutique
// ==========================================================================
/*globals Tablet */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Tablet.motionController = SC.ObjectController.create({

  orientation: '',
  isInPortrait: false,

  _orientationHasChanged: function() {

    var or = this.get('orientation');
    var isPort = this.get('isInPortrait');

    if (or === 'landscape') {
      Tablet.mainPage.mainPane.rightPanel.testButton.animate('left', 220, {
        duration: '.1',
        timing: 'ease-in-out'
      });

    } else if (or === 'portrait') {
      console.log('animation port firing..');
      isPort = true;
      Tablet.mainPage.mainPane.rightPanel.testButton.animate('left', 0, {
        duration: '.1',
        timing: 'ease-in-out'
      });

    } else if (isPort === true) {
      Tablet.mainPage.mainPane.rightPanel.testButton.animate('left', 0, {
        duration: '.1',
        timing: 'ease-in-out'
      });
    }
  }.observes('orientation')

});

/* >>>>>>>>>> BEGIN source/resources/states/MainPageState.js */
Tablet.MainPageState = Ki.State.extend({
	substatesAreConcurrent: YES,
		baseView: Ki.State.design({
			
			enterState: function() {
				console.log('enterState: BaseViewState');
				Tablet.getPath('mainPage.mainPane').append();
				this.invokeLater(this.fadeIn,1000);
			},
			
			fadeIn: function() {
				console.log('      fade in the main page');
				Tablet.mainPage.mainPane.leftPanel.animate('opacity',1.0,{duration:1.0,timing:'ease-in'});
				Tablet.mainPage.mainPane.rightPanel.animate('opacity',1.0,{duration:2.0,timing:'ease-in'});
			}
			
		})
		
});
/* >>>>>>>>>> BEGIN source/resources/states/state.js */
SC.mixin(Tablet, {
  
	statechart: Ki.Statechart.create({
  
  	rootState: Ki.State.design({
    
			substatesAreConcurrent: YES,
			baseView: Ki.State.plugin('Tablet.MainPageState')
			
   })
    
	})

});


/* >>>>>>>>>> BEGIN source/resources/main_page.js */
// ==========================================================================
// Project:   Tablet - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tablet */

// This page describes the main user interface for your application.  
Tablet.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
		classNames: ['base-view'],
    childViews: 'leftPanel rightPanel'.w(),
    
    leftPanel: SC.View.design({
			classNames: ['left-view'],
			layout: { left: 0, right: 780, top: 0, bottom: 0 },
			childViews: 'topToolBar'.w(),
			
			topToolBar: SC.ToolbarView.design({
				classNames: ['toolbar'],
				layout: { top: 0, left: 0, right: 0, height: 34 },
				anchorLocation: SC.ANCHOR_TOP,
				childViews: 'toolbarSplit'.w(),
					
				toolbarSplit:	SC.ImageView.design({
				  classNames: ['lines'],
					layout: { top: 0, right: 0, bottom: 0, width: 2 },
					useImageQueue: NO
			  })
							
			}) 
					
		}),
		
			rightPanel: SC.View.design({
				classNames: ['right-view'],
		    autoResizeStyle: SC.RESIZE_AUTOMATIC,
				childViews: 'topToolBar testButton'.w(),
				
					testButton: SC.ButtonView.design({
							classNames:['popover-button'],
						  layout: { top: 50, height: 32, left: 220, width: 85 },
						  title:  "Test"
					}), //text button
				
					topToolBar: SC.ToolbarView.design({
						classNames: ['toolbar'],
					  layout: { top: 0, left: 0, right: 0, height: 34 },
					  anchorLocation: SC.ANCHOR_TOP,
							childViews: 'popoverButton'.w(),

							popoverButton: SC.ButtonView.design({
									classNames:['popover-button'],
								  layout: { top: 3, height: 30, left: 12, width: 85 },
								  title:  "Add Task"
							}) // popover
							
					}) //toolbar
		  
			})  //right panel
  
  })

});

/* >>>>>>>>>> BEGIN source/main.js */
// ==========================================================================
// Project:   Tablet
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tablet */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
Tablet.main = function main() {

  // Step 1: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  // Tablet.getPath('mainPage.mainPane').append() ;

	SC.RootResponder.responder.set('defaultResponder', Tablet.statechart);
	Tablet.statechart.initStatechart();

    // Check to see if we are in Portrait mode..
    var isPort = Tablet.motionController.get('isInPortrait');

    if (isPort === true) {
      Tablet.mainPage.mainPane.rightPanel.testButton.animate('left', 0, {
        duration: '.1',
        timing: 'ease-in-out'
      });
    } else {
      Tablet.mainPage.mainPane.rightPanel.testButton.animate('left', 220, {
        duration: '.1',
        timing: 'ease-in-out'
      });
    }

    // Observes device orientation...
    SC.device.addObserver("orientation", this,
    function() {

      var or = SC.device.get("orientation");
      console.log(or);

      if (or === 'landscape') {
        Tablet.motionController.set('orientation', or);
      } else {
        Tablet.motionController.set('orientation', or);
      }
    });

  };

  function main() {
    Tablet.main();
  }

