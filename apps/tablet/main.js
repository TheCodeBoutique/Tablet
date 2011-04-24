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

  //Render mainView
  Tablet.getPath('mainPage.mainPane').append();

  //check is we are in Portrait mode..
  var isPort = Tablet.motionController.get('isInPortrait');

  if (isPort === true) {
    Tablet.mainPage.mainPane.splitView.rightPanel.testButton.animate('left', 0, {
      duration: .5,
      timing: 'ease-in-out'
    });
  } else {
    Tablet.mainPage.mainPane.splitView.rightPanel.testButton.animate('left', 220, {
      duration: .5,
      timing: 'ease-in-out'
    });
  }

  //observer device rotation..
  device: SC.device.addObserver("orientation", this,
  function() {

    var or = SC.device.get("orientation");
    console.log(or);

    if (or === 'landscape') {
      Tablet.motionController.set('orientation', or);
    } else {
      Tablet.motionController.set('orientation', or);
    }
  })

};

function main() {
  Tablet.main();
}
