SC.mixin(Tablet, {
  
	statechart: Ki.Statechart.create({
  
  	rootState: Ki.State.design({
    
			substatesAreConcurrent: YES,
			baseView: Ki.State.plugin('Tablet.MainPageState')
			
   })
    
	})

});

