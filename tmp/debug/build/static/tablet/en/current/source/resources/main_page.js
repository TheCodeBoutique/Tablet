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
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('tablet');