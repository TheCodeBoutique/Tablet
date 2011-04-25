SC.stringsFor("English",{"Kind.app":"Apps","Kind.framework":"Frameworks","Kind.sproutcore":"SproutCore","_Test Runner":"Test Runner","_No Targets":"No Targets","_No Tests":"No Tests","_Loading Targets":"Loading Targets","_No Target Selected":"No Target Selected","_Loading Tests":"Loading Tests","_Window Title":"Test Runner - %@","_No Target":"No Target"});
TestRunner=SC.Application.create({NAMESPACE:"TestRunner",VERSION:"0.1.0",store:SC.Store.create().from("CoreTools.DataSource"),targets:function(){return this.get("store").find(CoreTools.TARGETS_QUERY)
}.property().cacheable(),trace:NO,userDefaults:SC.UserDefaults.create({userDomain:"anonymous",appDomain:"SC.TestRunner"}),route:{},routePending:NO,computeRouteTarget:function(){var name=this.get("route").target;
if(!name){return null}else{return TestRunner.targetsController.findProperty("name",name)
}},computeRouteTest:function(){var name=this.get("route").test;if(!name){return null
}else{return TestRunner.testsController.findProperty("filename",name)}},routeDidChange:function(params){if(!params.target){return NO
}params=SC.clone(params);if(params.target){params.target="/"+params.target}if(params.test){params.test="tests/"+params.test
}this.set("route",params);this.set("routePending",YES);this.trace=YES;this.sendAction("route",this,params);
this.trace=NO;return YES},updateRoute:function(target,test,isFinal){var route=this.get("route"),loc;
if(isFinal||((target===route.target)&&(test===route.test))){this.set("routePending",NO)
}if(!this.get("routePending")){if(target){target=target.get("name")}if(test){test=test.get("filename")
}loc=target?target.slice(1):"";if(test){loc="%@&test=%@".fmt(loc,test.slice(6))}SC.routes.setIfChanged("location",loc)
}}});SC.routes.add("*target",TestRunner,TestRunner.routeDidChange);if(typeof CHANCE_SLICES==="undefined"){var CHANCE_SLICES=[]
}CHANCE_SLICES=CHANCE_SLICES.concat([]);TestRunner.detailController=SC.ObjectController.create({uncachedUrl:function(){var url=this.get("url");
return url?[url,Date.now()].join("?"):url}.property("url")});TestRunner.sourceController=SC.TreeController.create({contentBinding:"TestRunner.targetsController.sourceRoot",treeItemChildrenKey:"children",treeItemIsExpandedKey:"isExpanded",treeItemIsGrouped:YES,allowsMultipleSelection:NO,allowsEmptySelection:NO,sidebarThickness:200});
TestRunner.targetController=SC.ObjectController.create({contentBinding:"TestRunner.sourceController.selection",nameDidChange:function(){var name=this.get("name");
if(name){name=name.slice(1)}document.title="_Window Title".loc(name||"_No Target".loc())
}.observes("name")});TestRunner.targetsController=SC.ArrayController.create({reload:function(){var targets=TestRunner.store.find(CoreTools.TARGETS_QUERY);
this.set("content",targets)},sourceRoot:function(){var kinds={},keys=[],kind,targets,ret;
this.forEach(function(target){if(kind=target.get("sortKind")){targets=kinds[kind];
if(!targets){kinds[kind]=targets=[]}targets.push(target);if(keys.indexOf(kind)<0){keys.push(kind)
}}},this);keys.sort();if(keys.indexOf("sproutcore")>=0){keys.removeObject("sproutcore").pushObject("sproutcore")
}if(keys.indexOf("apps")>=0){keys.removeObject("apps").unshiftObject("apps")}ret=[];
keys.forEach(function(kind){targets=kinds[kind];var defKey="SourceList.%@.isExpanded".fmt(kind),expanded=TestRunner.userDefaults.get(defKey);
ret.push(SC.Object.create({displayName:"Kind.%@".fmt(kind).loc(),isExpanded:SC.none(expanded)?(kind!=="sproutcore"):expanded,children:targets.sortProperty("kind","displayName"),isExpandedDefaultKey:defKey,isExpandedDidChange:function(){TestRunner.userDefaults.set(this.get("isExpandedDefaultKey"),this.get("isExpanded"))
}.observes("isExpanded")}))});return SC.Object.create({children:ret,isExpanded:YES})
}.property("[]").cacheable(),statusDidChange:function(){TestRunner.sendAction("targetsDidChange")
}.observes("status")});TestRunner.targetsController.addProbe("state");TestRunner.testsController=SC.ArrayController.create({contentBinding:"TestRunner.targetController.tests",useContinuousIntegration:NO,isShowingTests:YES,statusDidChange:function(){TestRunner.sendAction("testsDidChange")
}.observes("status")});TestRunner.NO_TARGETS=SC.Responder.create({didBecomeFirstResponder:function(){TestRunner.set("currentScene","noTargets");
TestRunner.updateRoute(null,null,YES)},willLoseFirstResponder:function(){TestRunner.set("currentScene",null)
}});TestRunner.READY=SC.Responder.create({selectTarget:function(sender,target){if(target&&target.isEnumerable){target=target.firstObject()
}TestRunner.sourceController.selectObject(target);if(target){var tests=target.get("tests");
if(tests&&(tests.get("status")&SC.Record.BUSY)){TestRunner.makeFirstResponder(TestRunner.READY_LOADING)
}else{if(!tests||(tests.get("length")===0)){TestRunner.makeFirstResponder(TestRunner.READY_NO_TESTS)
}else{TestRunner.makeFirstResponder(TestRunner.READY_LIST)}}}else{TestRunner.makeFirstResponder(TestRunner.READY_EMPTY)
}},selectTest:function(sender,test){if(!TestRunner.targetController.get("hasContent")){return NO
}if(test&&test.isEnumerable){test=test.firstObject()}TestRunner.detailController.set("content",test);
TestRunner.set("routeName",test?test.get("filename"):null);if(test){TestRunner.makeFirstResponder(TestRunner.READY_DETAIL)
}else{TestRunner.makeFirstResponder(TestRunner.READY_LIST)}},route:function(sender,params){var target=TestRunner.computeRouteTarget(),test=TestRunner.computeRouteTest();
if(test){TestRunner.sendAction("selectTest",this,test)}else{TestRunner.sendAction("selectTarget",this,target)
}}});sc_require("states/ready");TestRunner.READY_DETAIL=SC.Responder.create({nextResponder:TestRunner.READY,didBecomeFirstResponder:function(){TestRunner.set("currentScene","testsDetail");
var target=TestRunner.sourceController.get("selection").firstObject();var test=TestRunner.detailController.get("content");
TestRunner.updateRoute(target,test,YES)},willLoseFirstResponder:function(){TestRunner.set("currentScene",null)
},back:function(){TestRunner.detailController.set("content",null);TestRunner.makeFirstResponder(TestRunner.READY_LIST)
}});sc_require("states/ready");TestRunner.READY_EMPTY=SC.Responder.create({nextResponder:TestRunner.READY,didBecomeFirstResponder:function(){TestRunner.set("currentScene","testsNone");
TestRunner.updateRoute(null,null,NO);if(TestRunner.get("routePending")){var target=TestRunner.computeRouteTarget();
if(target){TestRunner.sendAction("selectTarget",this,target)}else{TestRunner.updateRoute(null,null,YES)
}}},willLoseFirstResponder:function(){TestRunner.set("currentScene",null)},route:function(sender,params){TestRunner.set("routeTarget",params.target);
TestRunner.set("routeTest",params.test)}});sc_require("states/ready");TestRunner.READY_LIST=SC.Responder.create({nextResponder:TestRunner.READY,didBecomeFirstResponder:function(){TestRunner.set("currentScene","testsMaster");
TestRunner.testsController.set("selection",null);var target=TestRunner.sourceController.get("selection").firstObject();
TestRunner.updateRoute(target,null,NO);if(TestRunner.get("routePending")){var test=TestRunner.computeRouteTest();
if(test){TestRunner.sendAction("selectTest",this,test)}else{TestRunner.updateRoute(target,null,YES)
}}},willLoseFirstResponder:function(){TestRunner.set("currentScene",null)}});sc_require("states/ready");
TestRunner.READY_LOADING=SC.Responder.create({nextResponder:TestRunner.READY,didBecomeFirstResponder:function(){this._timer=this.invokeLater(this._showTestsLoading,150)
},_showTestsLoading:function(){this._timer=null;TestRunner.set("currentScene","testsLoading")
},willLoseFirstResponder:function(){if(this._timer){this._timer.invalidate()}TestRunner.set("currentScene",null)
},testsDidChange:function(sender){var tests=TestRunner.testsController;if(!(tests.get("status")&SC.Record.READY)){return NO
}if(tests.get("length")===0){TestRunner.makeFirstResponder(TestRunner.READY_NO_TESTS)
}else{TestRunner.makeFirstResponder(TestRunner.READY_LIST)}}});TestRunner.READY_NO_TESTS=SC.Responder.create({nextResponder:TestRunner.READY,didBecomeFirstResponder:function(){TestRunner.set("currentScene","noTests");
var target=TestRunner.sourceController.get("selection").firstObject();TestRunner.updateRoute(target,null,YES)
},willLoseFirstResponder:function(){TestRunner.set("currentScene",null)}});TestRunner.START=SC.Responder.create({didBecomeFirstResponder:function(){TestRunner.set("currentScene","targetsLoading");
TestRunner.targetsController.reload()},willLoseFirstResponder:function(){TestRunner.set("currentScene",null)
},targetsDidChange:function(){if(TestRunner.getPath("targets.status")!==SC.Record.READY_CLEAN){return NO
}var hasTargets=TestRunner.getPath("targets.length")>0;if(hasTargets){TestRunner.makeFirstResponder(TestRunner.READY_EMPTY)
}else{TestRunner.makeFirstResponder(TestRunner.NO_TARGETS)}return YES}});TestRunner.OffsetCheckboxView=SC.CheckboxView.extend({offset:0,offsetDidChange:function(){this.adjust("left",this.get("offset")+6)
}.observes("offset")});sc_require("views/offset_checkbox");TestRunner.mainPage=SC.Page.design({mainPane:SC.MainPane.design({defaultResponder:"TestRunner",childViews:"splitView toolbarView".w(),splitView:SC.SplitView.design({layout:{left:0,top:0,right:0,bottom:32},topLeftView:SC.ScrollView.design(SC.SplitChild,{size:200,hasHorizontalScroller:NO,contentView:SC.SourceListView.design({contentBinding:"TestRunner.sourceController.arrangedObjects",selectionBinding:"TestRunner.sourceController.selection",contentValueKey:"displayName",hasContentIcon:YES,contentIconKey:"targetIcon",action:"selectTarget"})}),bottomRightView:SC.SceneView.design(SC.SplitChild,{autoResizeStyle:SC.RESIZE_AUTOMATIC,scenes:"testsMaster testsDetail".w(),nowShowingBinding:"TestRunner.currentScene"})}),toolbarView:SC.ToolbarView.design({anchorLocation:SC.ANCHOR_BOTTOM,childViews:"logo continuousIntegrationCheckbox runTestsButton".w(),classNames:"bottom-toolbar",logo:SC.View.design({layout:{left:0,top:0,bottom:0,width:200},classNames:"app-title",tagName:"h1",render:function(context,firstTime){var img_url="/static/sproutcore/foundation/en/0ed9b0348c4b32f16fdf40fcc37dc1649e507340/source/images/sproutcore-logo.png";
context.push('<img src="%@" />'.fmt(img_url));context.push("<span>","_Test Runner".loc(),"</span>")
}}),continuousIntegrationCheckbox:TestRunner.OffsetCheckboxView.design({title:"Continuous Integration",offsetBinding:"TestRunner.sourceController.sidebarThickness",valueBinding:"TestRunner.testsController.useContinuousIntegration",isEnabledBinding:"TestRunner.testsController.isShowingTests",layout:{height:18,centerY:1,width:170,left:206}}),runTestsButton:SC.ButtonView.design({title:"Run Tests",isEnabledBinding:"TestRunner.testsController.isShowingTests",layout:{height:24,centerY:0,width:90,right:12}})})}),targetsLoading:SC.View.design({childViews:"labelView".w(),labelView:SC.LabelView.design({layout:{centerX:0,centerY:0,height:24,width:200},textAlign:SC.ALIGN_CENTER,controlSize:SC.HUGE_CONTROL_SIZE,classNames:"center-label",controlSize:SC.LARGE_CONTROL_SIZE,fontWeight:SC.BOLD_WEIGHT,value:"_Loading Targets".loc()})}),noTargets:SC.View.design({childViews:"labelView".w(),labelView:SC.LabelView.design({layout:{centerX:0,centerY:0,height:24,width:200},textAlign:SC.ALIGN_CENTER,classNames:"center-label",controlSize:SC.LARGE_CONTROL_SIZE,fontWeight:SC.BOLD_WEIGHT,value:"_No Targets".loc()})}),noTests:SC.View.design({childViews:"labelView".w(),labelView:SC.LabelView.design({layout:{centerX:0,centerY:0,height:24,width:200},textAlign:SC.ALIGN_CENTER,classNames:"center-label",controlSize:SC.LARGE_CONTROL_SIZE,fontWeight:SC.BOLD_WEIGHT,value:"_No Tests".loc()})}),testsLoading:SC.View.design({childViews:"labelView".w(),labelView:SC.LabelView.design({layout:{centerX:0,centerY:0,height:24,width:200},textAlign:SC.ALIGN_CENTER,classNames:"center-label",controlSize:SC.LARGE_CONTROL_SIZE,fontWeight:SC.BOLD_WEIGHT,value:"_Loading Tests".loc()})}),testsNone:SC.View.design({childViews:"labelView".w(),labelView:SC.LabelView.design({layout:{centerX:0,centerY:0,height:24,width:200},textAlign:SC.ALIGN_CENTER,classNames:"center-label",controlSize:SC.LARGE_CONTROL_SIZE,fontWeight:SC.BOLD_WEIGHT,value:"_No Target Selected".loc()})}),testsMaster:SC.ScrollView.design({hasHorizontalScroller:NO,contentView:SC.ListView.design({contentBinding:"TestRunner.testsController.arrangedObjects",selectionBinding:"TestRunner.testsController.selection",classNames:["test-list"],rowHeight:32,hasContentIcon:YES,contentIconKey:"icon",hasContentBranch:YES,contentIsBranchKey:"isRunnable",contentValueKey:"displayName",actOnSelect:YES,action:"selectTest"})}),testsDetail:SC.View.design({childViews:"navigationView webView".w(),navigationView:SC.ToolbarView.design({classNames:"navigation-bar",layout:{top:0,left:0,right:0,height:32},childViews:"backButton locationLabel".w(),backButton:SC.ButtonView.design({layout:{left:8,centerY:0,width:80,height:24},title:"« Tests",action:"back"}),locationLabel:SC.LabelView.design({layout:{right:8,centerY:-2,height:16,left:100},textAlign:SC.ALIGN_RIGHT,valueBinding:"TestRunner.detailController.displayName"})}),webView:SC.WebView.design({layout:{top:33,left:2,right:0,bottom:0},valueBinding:SC.Binding.oneWay("TestRunner.detailController.uncachedUrl")})})});
TestRunner.main=function main(){TestRunner.getPath("mainPage.mainPane").append();
TestRunner.makeFirstResponder(TestRunner.START)};function main(){TestRunner.main()
};