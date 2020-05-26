(function($){
   $.fn.jCurrencyInput = function(options){

      var defaults = {
          defaultValue : '0.00',
          placeholder : '$'
      }

      var settings = $.extend({}, defaults, options);
      
      this.each(function() {
      	$(this).attr("placeholder", settings.placeholder);
      	
      	if($(this).val()=="") {
      		$(this).val(settings.defaultValue);
      	}
      	
      	$(this).focus(function() {
      		if($(this).val()==settings.defaultValue) {
      		$(this).val("");	
      		}
      	});
      	
      	$(this).blur(function() {
      		if($(this).val()=="") {
      		$(this).val(settings.defaultValue);	
      		}
      	});
      });
      if(settings.variable1){
         // do something
      }
   }
})(jQuery);