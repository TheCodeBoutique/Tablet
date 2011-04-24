// ==========================================================================
// Project:   Tablet.motionController
// Copyright: ©2011 My Company, Inc.
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
      Tablet.mainPage.mainPane.splitView.rightPanel.testButton.animate('left', 220, {
        duration: .2,
        timing: 'ease-in-out'
      });

    } else if (or === 'portrait') {
      console.log('animation port firing..');
      isPort = true;
      Tablet.mainPage.mainPane.splitView.rightPanel.testButton.animate('left', 0, {
        duration: .2,
        timing: 'ease-in-out'
      });

    } else if (isPort === true) {
      Tablet.mainPage.mainPane.splitView.rightPanel.testButton.animate('left', 0, {
        duration: .2,
        timing: 'ease-in-out'
      });
    }
  }.observes('orientation')

});
