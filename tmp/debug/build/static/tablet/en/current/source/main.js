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
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('tablet');