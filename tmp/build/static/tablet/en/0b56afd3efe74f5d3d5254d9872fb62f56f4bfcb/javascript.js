Tablet=SC.Application.create({NAMESPACE:"Tablet",VERSION:"0.1.0",store:SC.Store.create().from(SC.Record.fixtures),device:SC.device.addObserver("orientation",this,function(){var or=SC.device.get("orientation");
console.log(or);if(or==="portrait"){Tablet.motionController.set("isInPortrait",true)
}else{}})});Tablet.motionController=SC.ObjectController.create({orientation:"",isInPortrait:false,_orientationHasChanged:function(){var or=this.get("orientation");
var isPort=this.get("isInPortrait");if(or==="landscape"){Tablet.mainPage.mainPane.rightPanel.testButton.animate("left",220,{duration:".1",timing:"ease-in-out"})
}else{if(or==="portrait"){console.log("animation port firing..");isPort=true;Tablet.mainPage.mainPane.rightPanel.testButton.animate("left",0,{duration:".1",timing:"ease-in-out"})
}else{if(isPort===true){Tablet.mainPage.mainPane.rightPanel.testButton.animate("left",0,{duration:".1",timing:"ease-in-out"})
}}}}.observes("orientation")});Tablet.MainPageState=Ki.State.extend({substatesAreConcurrent:YES,baseView:Ki.State.design({enterState:function(){console.log("enterState: BaseViewState");
Tablet.getPath("mainPage.mainPane").append();this.invokeLater(this.fadeIn,1000)},fadeIn:function(){console.log("      fade in the main page");
Tablet.mainPage.mainPane.leftPanel.animate("opacity",1,{duration:1,timing:"ease-in"});
Tablet.mainPage.mainPane.rightPanel.animate("opacity",1,{duration:2,timing:"ease-in"})
}})});SC.mixin(Tablet,{statechart:Ki.Statechart.create({rootState:Ki.State.design({substatesAreConcurrent:YES,baseView:Ki.State.plugin("Tablet.MainPageState")})})});
Tablet.mainPage=SC.Page.design({mainPane:SC.MainPane.design({classNames:["base-view"],childViews:"leftPanel rightPanel".w(),leftPanel:SC.View.design({classNames:["left-view"],layout:{left:0,right:780,top:0,bottom:0},childViews:"topToolBar".w(),topToolBar:SC.ToolbarView.design({classNames:["toolbar"],layout:{top:0,left:0,right:0,height:34},anchorLocation:SC.ANCHOR_TOP,childViews:"toolbarSplit".w(),toolbarSplit:SC.ImageView.design({classNames:["lines"],layout:{top:0,right:0,bottom:0,width:2},useImageQueue:NO})})}),rightPanel:SC.View.design({classNames:["right-view"],autoResizeStyle:SC.RESIZE_AUTOMATIC,childViews:"topToolBar testButton".w(),testButton:SC.ButtonView.design({classNames:["popover-button"],layout:{top:50,height:32,left:220,width:85},title:"Test"}),topToolBar:SC.ToolbarView.design({classNames:["toolbar"],layout:{top:0,left:0,right:0,height:34},anchorLocation:SC.ANCHOR_TOP,childViews:"popoverButton".w(),popoverButton:SC.ButtonView.design({classNames:["popover-button"],layout:{top:3,height:30,left:12,width:85},title:"Add Task"})})})})});
Tablet.main=function main(){SC.RootResponder.responder.set("defaultResponder",Tablet.statechart);
Tablet.statechart.initStatechart();var isPort=Tablet.motionController.get("isInPortrait");
if(isPort===true){Tablet.mainPage.mainPane.rightPanel.testButton.animate("left",0,{duration:".1",timing:"ease-in-out"})
}else{Tablet.mainPage.mainPane.rightPanel.testButton.animate("left",220,{duration:".1",timing:"ease-in-out"})
}SC.device.addObserver("orientation",this,function(){var or=SC.device.get("orientation");
console.log(or);if(or==="landscape"){Tablet.motionController.set("orientation",or)
}else{Tablet.motionController.set("orientation",or)}})};function main(){Tablet.main()
};