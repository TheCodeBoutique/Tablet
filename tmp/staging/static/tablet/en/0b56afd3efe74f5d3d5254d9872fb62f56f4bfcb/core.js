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
