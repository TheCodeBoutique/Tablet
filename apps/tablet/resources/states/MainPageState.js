Tablet.MainPageState = Ki.State.extend({
	substatesAreConcurrent: YES,
		baseView: Ki.State.design({
			
			enterState: function() {
				console.log('enterState: BaseViewState');
				Tablet.getPath('mainPage.mainPane').append();
				this.invokeLater(this.fadeIn,1000);
			},
			
			fadeIn: function() {
				console.log('      fade in the main page');
				Tablet.mainPage.mainPane.leftPanel.animate('opacity',1.0,{duration:1.0,timing:'ease-in'});
				Tablet.mainPage.mainPane.rightPanel.animate('opacity',1.0,{duration:2.0,timing:'ease-in'});
			}
			
		})
		
});