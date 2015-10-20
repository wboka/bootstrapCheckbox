/**
 *  @author 		Wayne T Boka
 *  @lastmodified 	201510201605
 *  @version		1.2.0
 *  @description	Plugin for Bootstrap styled checkboxes
 *  @website		http://wboka.github.io/bootstrapCheckbox
 */

(function ($) {
	// Define available methods
    var methods = {
		// Initialize checkboxes
        init: function () {
            return this.each(function () {
				// Checked to unchecked and vice versa
				if ($(this).siblings("span.bootstrapCheckboxSpan").length === 0) {
					$(this).after("<span class='bootstrapCheckboxSpan glyphicon " + (this.checked ? "glyphicon-check" : "glyphicon-unchecked") + "'></span>");
				}
				
				$(this).hide();
				
                $(this).siblings("span.bootstrapCheckboxSpan, label").on("click", methods['toggle']);
            });
        },
        toggle: function () {
			// Toggle which bootstrap checkbox glyphicon is showing
			$bootstrapCheckbox = $(this).is("span.bootstrapCheckboxSpan") ? $(this) : $bootstrapCheckbox = $("span.bootstrapCheckboxSpan", $(this).parent());
			
			$bootstrapCheckbox.toggleClass("glyphicon-check glyphicon-unchecked");
			
			$originalCheckbox = $(this).siblings("input[type=checkbox]");
			
			$bootstrapCheckbox.hasClass("glyphicon-check") ? $originalCheckbox.prop("checked", true) : $originalCheckbox.removeProp("checked");
			
			$originalCheckbox.change();
			
			return this;
        },
        toggleAll: function () {
			// Toggle the checked/unchecked state for every bootstrapCheckbox
            return this.each(function () {
				$bootstrapCheckbox = $(this).is("span.bootstrapCheckboxSpan") ? $(this) : $bootstrapCheckbox = $("span.bootstrapCheckboxSpan", $(this).parent());
				
				$bootstrapCheckbox.toggleClass("glyphicon-check glyphicon-unchecked");
				
				$originalCheckbox = $(this).siblings("input[type=checkbox]");
				
				$bootstrapCheckbox.hasClass("glyphicon-check") ? $originalCheckbox.prop("checked", true) : $originalCheckbox.removeProp("checked");
				
				$originalCheckbox.change();
            });
        },
        selectAll: function () {
			// Set all bootstrapCheckboxes to checked
			$bootstrapCheckbox = $(this).is("span.bootstrapCheckboxSpan") ? $(this) : $bootstrapCheckbox = $("span.bootstrapCheckboxSpan", $(this).parent());
			
			$bootstrapCheckbox.removeClass("glyphicon-check glyphicon-unchecked").addClass("glyphicon-check");
			
			$(this).siblings("input[type=checkbox]").prop("checked", true).change();
			
			return this;            
        },
        deselectAll: function () {
			// Set all bootstrapCheckboxes to unchecked
			$bootstrapCheckbox = $(this).is("span.bootstrapCheckboxSpan") ? $(this) : $bootstrapCheckbox = $("span.bootstrapCheckboxSpan", $(this).parent());
			
			$bootstrapCheckbox.removeClass("glyphicon-check glyphicon-unchecked").addClass("glyphicon-unchecked");
			
			$(this).siblings("input[type=checkbox]").removeProp("checked").change();
			
			return this;            
    	},
    	refresh: function() {
			// Set the bootstrapCheckbox(es) back to the current state of the underlying checkbox
			return this.each(function() {
				$bootstrapCheckbox = $(this).is("span.bootstrapCheckboxSpan") ? $(this) : $bootstrapCheckbox = $("span.bootstrapCheckboxSpan", $(this).parent());
				
				$bootstrapCheckbox.removeClass("glyphicon-check glyphicon-unchecked").addClass(($bootstrapCheckbox.siblings("input[type=checkbox]").is(":checked")) ? "glyphicon-check" : "glyphicon-unchecked");
			});
		},
		reset: function() {
			// Set the bootstrapCheckbox(es) back to the unchecked state
			return this.each(function() {
				$bootstrapCheckbox = $(this).is("span.bootstrapCheckboxSpan") ? $(this) : $bootstrapCheckbox = $("span.bootstrapCheckboxSpan", $(this).parent());
				
				$bootstrapCheckbox.removeClass("glyphicon-check glyphicon-unchecked").addClass("glyphicon-unchecked");
				
				$(this).siblings("input[type=checkbox]").removeProp("checked").change();
			});
		},
		destroy: function() {
			return this.each(function() {
				$(this).show();
				
                $(this).siblings("span.bootstrapCheckboxSpan, label").off("click");
				$(this).siblings("span.bootstrapCheckboxSpan").remove();
			});
		}
    };

    $.fn.bootstrapCheckbox = function (method) {
		// Check if the desired method exists
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else {
            $.error("Method: \"" + method + "\" does not exist in bootstrapCheckbox");
        }
    };
})(jQuery);
