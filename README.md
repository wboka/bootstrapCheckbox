# Bootstrap Checkbox | 1.2.1
[Visit the Demo](http://wboka.github.io/bootstrapCheckbox)

##General

The SELECTOR should be a collection of ```input[type="checkbox"]```s.

##Methods
----

##Init
*Version Added:* 1.0.0

Setup: ``` $(SELECTOR).bootstrapCheckbox('init'); ```

Notes: This adds a <code>glyphicon</code> to represent the checked status and hides the main checkbox. Also sets up a click listener to toggle the checked state of the SELECTOR.

##Toggle/ToggleAll
*Version Added:* 1.0.0

Setup: ``` $(SELECTOR).bootstrapCheckbox('toggle'); ``` or ``` $(SELECTOR).bootstrapCheckbox('toggleAll'); ```

Notes: Switches the ```glyphicon``` from checked to unchecked and vice versa. Also, updates the hidden check box

##SelectAll
*Version Added:* 1.0.0

Setup: ``` $(SELECTOR).bootstrapCheckbox('selectAll'); ```

Notes: Switches the ```glyphicon``` to unchecked. Also, updates the hidden check box.

##DeselectAll
*Version Added:* 1.0.0

Setup: ``` $(SELECTOR).bootstrapCheckbox('deselectAll'); ```

Notes: Switches the ```glyphicon``` to checked. Also, updates the hidden check box.

##Refresh
*Version Added:* 1.1.0

Setup: ``` $(SELECTOR).bootstrapCheckbox('refresh');```

Notes: Sets the ```glyphicon``` to checked/unchecked based on the hidden checkbox. This would be required if the hidden checkbox checked property/attribute has changed.

##Destroy
*Version Added:* 1.0.0

Setup: ``` $(SELECTOR).bootstrapCheckbox('destroy');```

Notes: Shows the hidden checkbox, removes the click listener, and removes the ```glyphicon``` from the DOM
