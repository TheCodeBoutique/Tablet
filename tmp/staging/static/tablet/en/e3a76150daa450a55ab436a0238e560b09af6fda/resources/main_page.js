// ==========================================================================
// Project:   Tablet - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Tablet */

// This page describes the main user interface for your application.  
Tablet.mainPage = SC.Page.design({

  
  
  mainPane: SC.MainPane.design({
		classNames: ['base-view'],
    childViews: 'leftPanel rightPanel'.w(),
    
    leftPanel: SC.View.design({
			classNames: ['left-view'],
			layout: { left: 0, right: 780, top: 0, bottom: 0 },
			childViews: 'topToolBar'.w(),
			
			topToolBar: SC.ToolbarView.design({
				classNames: ['toolbar'],
				layout: { top: 0, left: 0, right: 0, height: 46 },
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
				childViews: 'topToolBar popoverButton popOverPane'.w(),
				
					popoverButton: SC.ButtonView.design({
							classNames:['popover-button'],
						  layout: { top: 50, height: 44, left: 260, width: 42 },
						  target: "Tablet.statechart",
    					action: "popoverActive"
					}),
					
					popOverPane: SC.View.design({
      			classNames:['popover-pane'],
      			layout: { top: 40, left: 0, width: 335, bottom: 100},
      			childViews: 'popoverPane listView'.w(),

      				listView: SC.ScrollView.design({
      			  	hasHorizontalScroller: NO,
      			    layout: { bottom: 65, left: 20, right: 31, top: 55 },
      					contentView: SC.ListView.design({
      			  		//contentValueKey: "name",
      						//contentBinding: "Genius.appsController.arrangedObjects",
      						//selectionBinding: "Genius.appsController.selection",
      			     	rowHeight: 50,
      						rowSpacing: 2,
      						//exampleView:Genius.appList,
      						contentIconKey: "appImage",
      						hasContentIcon:  YES,
                	escapeHTML: NO
      			  	})

      				}),

      				popoverPane: SC.ImageView.design({
      					layout: { bottom: 0, top: 10, width: 325, height: 500 },
      					useImageQueue: NO,
      					value: '/static/touchpad/en/0a8a1e4098f4947cae04a1042cda4a46d4369f87/source/resources/images/popover.png'
      				})

      		}), 
				
					topToolBar: SC.ToolbarView.design({
						classNames: ['toolbar'],
					  layout: { top: 0, left: 0, right: 0, height: 46 },
					  anchorLocation: SC.ANCHOR_TOP,
							childViews: 'popoverButtonActive popoverButtonDeactive'.w(),

							popoverButtonActive: SC.ButtonView.design({
									classNames:['popover-button'],
								  layout: { top: 1, height: 44, left: 15, width: 42 },
								  target: "Tablet.statechart",
        					action: "popoverActive"
							}), // popoverButtonActive
							
							popoverButtonDeactive: SC.ButtonView.design({
									classNames:['popover-button'],
								  layout: { top: 1, height: 44, left: -100, width: 42 },
								  target: "Tablet.statechart",
        					action: "popoverDeactive"
							}) // popoverButtonDeactive
							
					}) //toolbar
		  
			})  //right panel
  
  })

});
