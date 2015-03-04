$(document).ready(function() {
    $("div.bootstrapped-checkbox").bootstrapCheckbox("init");
    
    $("a").on("click", function() {
        $("body").bootstrapCheckbox(this.id);
    });
});
