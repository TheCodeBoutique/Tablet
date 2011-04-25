Tablet=SC.Application.create({NAMESPACE:"Tablet",VERSION:"0.1.0",store:SC.Store.create().from(SC.Record.fixtures),device:SC.device.addObserver("orientation",this,function(){var or=SC.device.get("orientation");
console.log(or);if(or==="portrait"){Tablet.motionController.set("isInPortrait",true)
}else{}})});Tablet.motionController=SC.ObjectController.create({orientation:"",isInPortrait:false,_orientationHasChanged:function(){var or=this.get("orientation");
var isPort=this.get("isInPortrait");if(or==="landscape"){Tablet.mainPage.mainPane.rightPanel.popoverButton.animate("left",260,{duration:".1",timing:"ease-in-out"})
}else{if(or==="portrait"){console.log("animation port firing..");isPort=true;Tablet.mainPage.mainPane.rightPanel.popoverButton.animate("left",0,{duration:".1",timing:"ease-in-out"})
}else{if(isPort===true){Tablet.mainPage.mainPane.rightPanel.popoverButton.animate("left",0,{duration:".1",timing:"ease-in-out"})
}}}}.observes("orientation")});Tablet.MainPageState=Ki.State.extend({substatesAreConcurrent:YES,baseView:Ki.State.design({enterState:function(){console.log("enterState: BaseViewState");
Tablet.getPath("mainPage.mainPane").append();Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonActive.animate("opacity","1.0",{duration:0.5,timing:"ease-in-out"});
this.invokeLater(this.fadeIn,1000)},fadeIn:function(){console.log("      fade in the main page");
Tablet.mainPage.mainPane.leftPanel.animate("opacity",1,{duration:1,timing:"ease-in"});
Tablet.mainPage.mainPane.rightPanel.animate("opacity",1,{duration:1,timing:"ease-in"})
},popoverActive:function(){console.log("popoverActive");Tablet.mainPage.mainPane.rightPanel.popOverPane.animate("opacity",1,{duration:"0.2",timing:"ease-in-out"});
Tablet.getPath("mainPage.mainPane").append();Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonActive.animate("opacity","0",{duration:0.2,timing:"ease-in-out"});
Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonDeactive.animate("left","15",{duration:0.1,timing:"ease-in-out"});
this.invokeLater(this.activeGo,1)},activeGo:function(){console.log("activeGo");Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonDeactive.animate("opacity","1.0",{duration:0.1,timing:"ease-in-out"});
Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonActive.animate("left","-100",{duration:0.1,timing:"ease-in-out"})
},popoverDeactive:function(){console.log("popoverDeactive");Tablet.mainPage.mainPane.rightPanel.popOverPane.animate("opacity",0,{duration:"0.2",timing:"ease-in-out"});
Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonDeactive.animate("opacity","0",{duration:0.2,timing:"ease-in-out"});
Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonActive.animate("left","15",{duration:0.1,timing:"ease-in-out"});
this.invokeLater(this.deactiveGo,1)},deactiveGo:function(){console.log("deactiveGo");
Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonActive.animate("opacity","1.0",{duration:0.1,timing:"ease-in-out"});
Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonDeactive.animate("left","-100",{duration:0.1,timing:"ease-in-out"})
},})});SC.mixin(Tablet,{statechart:Ki.Statechart.create({rootState:Ki.State.design({substatesAreConcurrent:YES,baseView:Ki.State.plugin("Tablet.MainPageState")})})});
Tablet.mainPage=SC.Page.design({mainPane:SC.MainPane.design({classNames:["base-view"],childViews:"leftPanel rightPanel".w(),leftPanel:SC.View.design({classNames:["left-view"],layout:{left:0,right:780,top:0,bottom:0},childViews:"topToolBar".w(),topToolBar:SC.ToolbarView.design({classNames:["toolbar"],layout:{top:0,left:0,right:0,height:46},anchorLocation:SC.ANCHOR_TOP,childViews:"toolbarSplit".w(),toolbarSplit:SC.ImageView.design({classNames:["lines"],layout:{top:0,right:0,bottom:0,width:2},useImageQueue:NO})})}),rightPanel:SC.View.design({classNames:["right-view"],autoResizeStyle:SC.RESIZE_AUTOMATIC,childViews:"topToolBar popoverButton popOverPane".w(),popoverButton:SC.ButtonView.design({classNames:["popover-button"],layout:{top:50,height:44,left:260,width:42},target:"Tablet.statechart",action:"popoverActive"}),popOverPane:SC.View.design({classNames:["popover-pane"],layout:{top:40,left:0,width:335,bottom:100},childViews:"popoverPane listView".w(),listView:SC.ScrollView.design({hasHorizontalScroller:NO,layout:{bottom:65,left:20,right:31,top:55},contentView:SC.ListView.design({rowHeight:50,rowSpacing:2,contentIconKey:"appImage",hasContentIcon:YES,escapeHTML:NO})}),popoverPane:SC.ImageView.design({layout:{bottom:0,top:10,width:325,height:500},useImageQueue:NO,value:"/static/touchpad/en/0a8a1e4098f4947cae04a1042cda4a46d4369f87/source/resources/images/popover.png"})}),topToolBar:SC.ToolbarView.design({classNames:["toolbar"],layout:{top:0,left:0,right:0,height:46},anchorLocation:SC.ANCHOR_TOP,childViews:"popoverButtonActive popoverButtonDeactive".w(),popoverButtonActive:SC.ButtonView.design({classNames:["popover-button"],layout:{top:1,height:44,left:15,width:42},target:"Tablet.statechart",action:"popoverActive"}),popoverButtonDeactive:SC.ButtonView.design({classNames:["popover-button"],layout:{top:1,height:44,left:-100,width:42},target:"Tablet.statechart",action:"popoverDeactive"})})})})});
Tablet.main=function main(){SC.RootResponder.responder.set("defaultResponder",Tablet.statechart);
Tablet.statechart.initStatechart();var isPort=Tablet.motionController.get("isInPortrait");
if(isPort===true){Tablet.mainPage.mainPane.rightPanel.popoverButton.animate("left",0,{duration:".1",timing:"ease-in-out"})
}else{Tablet.mainPage.mainPane.rightPanel.popoverButton.animate("left",260,{duration:".1",timing:"ease-in-out"})
}SC.device.addObserver("orientation",this,function(){var or=SC.device.get("orientation");
console.log(or);if(or==="landscape"){Tablet.motionController.set("orientation",or)
}else{Tablet.motionController.set("orientation",or)}})};function main(){Tablet.main()
};