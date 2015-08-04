$(document).ready(function() {
    $("input.bootstrapCheckbox").bootstrapCheckbox("init");

    $("a").on("click", function() {
        $("input.bootstrapCheckbox").bootstrapCheckbox(this.id);
    });
});
