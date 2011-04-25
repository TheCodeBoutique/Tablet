Tablet.MainPageState = Ki.State.extend({
	substatesAreConcurrent: YES,
		baseView: Ki.State.design({
			
			enterState: function() {
				console.log('enterState: BaseViewState');
				Tablet.getPath('mainPage.mainPane').append();
				Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonActive.animate('opacity','1.0',{duration:0.5,timing:'ease-in-out'});
				this.invokeLater(this.fadeIn,1000);
			},
			
			fadeIn: function() {
				console.log('      fade in the main page');
				Tablet.mainPage.mainPane.leftPanel.animate('opacity',1.0,{duration:1.0,timing:'ease-in'});
				Tablet.mainPage.mainPane.rightPanel.animate('opacity',1.0,{duration:1.0,timing:'ease-in'});
			},
			
			popoverActive: function() {
				console.log('popoverActive');
				Tablet.mainPage.mainPane.rightPanel.popOverPane.animate('opacity',1.0,{duration:'0.2',timing:'ease-in-out'});
				Tablet.getPath('mainPage.mainPane').append();
				Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonActive.animate('opacity','0',{duration:0.2,timing:'ease-in-out'});
				Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonDeactive.animate('left','15',{duration:0.1,timing:'ease-in-out'});
				this.invokeLater(this.activeGo,1);				
			},
			
			activeGo: function() {
			  console.log('activeGo');
			  Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonDeactive.animate('opacity','1.0',{duration:0.1,timing:'ease-in-out'});
				Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonActive.animate('left','-100',{duration:0.1,timing:'ease-in-out'});
			},
			
			popoverDeactive: function() {
				console.log('popoverDeactive');
				Tablet.mainPage.mainPane.rightPanel.popOverPane.animate('opacity',0.0,{duration:'0.2',timing:'ease-in-out'});
        Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonDeactive.animate('opacity','0',{duration:0.2,timing:'ease-in-out'});
				Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonActive.animate('left','15',{duration:0.1,timing:'ease-in-out'});
				this.invokeLater(this.deactiveGo,1);
			},
			
			deactiveGo: function() {
			  console.log('deactiveGo');
			  Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonActive.animate('opacity','1.0',{duration:0.1,timing:'ease-in-out'});
				Tablet.mainPage.mainPane.rightPanel.topToolBar.popoverButtonDeactive.animate('left','-100',{duration:0.1,timing:'ease-in-out'});
			},
			
		})
		
});