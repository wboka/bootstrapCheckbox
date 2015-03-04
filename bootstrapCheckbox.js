(function ($) {
    // Define available methods
    var methods = {
        // Initialize checkboxes
        init: function () {
            return this.each(function () {
                // Does the this parent element contain a "span.bootstrap-checkbox"
                if ($(this).find("span.bootstrapCheckbox").length == 0) {
                    // If not, prepend it the parent element
                    $(this).prepend("<span class='bootstrapCheckbox glyphicon glyphicon-unchecked'></span>");
                }
                // Checked to unchecked and vice versa
                $(this).on("click", methods['toggle']);
            });
        },
        toggle: function () {
            // Toggle which bootstrap checkbox glyphicon is showing
            $(this).find("span.bootstrapCheckbox").toggleClass("glyphicon-check glyphicon-unchecked");
        },
        toggleAll: function () {
            // Toggle the checked/unchecked state for every bootstrap-checkbox in the parent element
            return this.each(function () {
                $(this).find("span.bootstrapCheckbox").toggleClass("glyphicon-check glyphicon-unchecked");
            });
        },
        selectAll: function () {
            // Set all bootstrap-checkboxes in the parent element to checked
            $(this).find("span.bootstrapCheckbox").removeClass("glyphicon-check glyphicon-unchecked").addClass("glyphicon-check");
        },
        deselectAll: function () {
            // Set all bootstrap-checkboxes in the parent element to unchecked
            $(this).find("span.bootstrapCheckbox").removeClass("glyphicon-check glyphicon-unchecked").addClass("glyphicon-unchecked");
        }
    };
    
    $.fn.bootstrapCheckbox = function (method) {
        // Check if the desired method exists
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else {
            $.error("Method: \"" + method + "\" does not exist in bsCheckbox");
        }
    };
})(jQuery);
