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
      Tablet.mainPage.mainPane.rightPanel.popoverButton.animate('left', 260, {
        duration: '.1',
        timing: 'ease-in-out'
      });

    } else if (or === 'portrait') {
      console.log('animation port firing..');
      isPort = true;
      Tablet.mainPage.mainPane.rightPanel.popoverButton.animate('left', 0, {
        duration: '.1',
        timing: 'ease-in-out'
      });

    } else if (isPort === true) {
      Tablet.mainPage.mainPane.rightPanel.popoverButton.animate('left', 0, {
        duration: '.1',
        timing: 'ease-in-out'
      });
    }
  }.observes('orientation')

});
