// ==========================================================================
// Project:   Tablet - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tablet */

// This page describes the main user interface for your application.  
Tablet.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
		classNames: ['base-view'],
		childViews: 'splitView'.w(),
		
			splitView: SC.View.design({
				layout: { top: 0, left: 0, bottom: 0, right: 0 },
				childViews: 'leftPanel rightPanel'.w(),
				
					leftPanel: SC.View.design({
						classNames: ['left-view'],
						layout: { left: 0, right: 780, top: 0, bottom: 0 },
						backgroundColor: 'white',
						childViews: 'topToolBar'.w(),
						
							topToolBar: SC.ToolbarView.design({
								classNames: ['toolbar-left'],
							  layout: { top: 0, left: 0, right: 0, height: 34 },
							  anchorLocation: SC.ANCHOR_TOP,
								childViews: 'toolbarSplit'.w(),
								
							toolbarSplit:	SC.ImageView.design({
									classNames:['line'],
								  layout: { top: 0, right: 0, bottom: 0, width: 2 },
								  useImageQueue: NO
								}),
										
							}) //toolbar
								
					}), //leftpanel
							
					rightPanel: SC.View.design({
						classNames: ['right-view'],
						backgroundColor: 'gray',
				    autoResizeStyle: SC.RESIZE_AUTOMATIC,
						childViews: 'topToolBar testButton'.w(),
						
							testButton: SC.ButtonView.design({
								  layout: { top: 50, height: 24, left: 220, width: 100 },
								  title:  "Test"
							}), //text button
						
							topToolBar: SC.ToolbarView.design({
								classNames: ['toolbar-right'],
							  layout: { top: 0, left: 0, right: 0, height: 34 },
							  anchorLocation: SC.ANCHOR_TOP,
								backgroundColor: 'blue',
									childViews: 'popoverButton'.w(),

									popoverButton: SC.ButtonView.design({
										  layout: { centerY: 0, height: 24, left: 12, width: 100 },
										  title:  "Add Task"
									}) // popover
									
							}) //toolbar
				  
					})  //right panel
				
			})  //split

		})  //main pane
		
}); // main page
