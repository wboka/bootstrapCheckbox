# Bootstrap Checkbox | 1.2.0
[Visit the Demo](http://wboka.github.io/bootstrapCheckbox)
## General
The SELECTOR should be an `input[type="checkbox"].bootstrapCheckbox` or a collection of `input[type="checkbox"].bootstrapCheckbox`s. Currently the class is hard-coded. (Sorry) 

## Methods
----
## Init
Setup: `$(SELECTOR).bootstrapCheckbox('init');`

Notes: This adds a `glyphicon` to represent the checked status and hides the main checkbox. Also sets up a click listener to toggle the checked state of the SELECTOR.

## Toggle/ToggleAll
Setup: `$(SELECTOR).bootstrapCheckbox('toggle');` or `$(SELECTOR).bootstrapCheckbox('toggleAll');`

Notes: Switches the `glyphicon` from checked to unchecked and vice versa. Also, updates the hidden check box

## SelectAll
Setup: `$(SELECTOR).bootstrapCheckbox('selectAll');`

Notes: Switches the `glyphicon` to unchecked. Also, updates the hidden check box.

## DeselectAll
Setup: `$(SELECTOR).bootstrapCheckbox('deselectAll');`

Notes: Switches the `glyphicon` to checked. Also, updates the hidden check box.

## Destroy
Setup: `$(SELECTOR).bootstrapCheckbox('destroy');`

Notes: Shows the hidden checkbox, removes the click listener, and removes the `glyphicon` from the DOM
