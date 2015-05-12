var config = [
    {
        type: "toggle",
        label: "First time visitor",
        value: false
    },
    {
        type: "toggle",
        label: "Museum member",
        value: true
    },
    {
        type: "select",
        label: "Age range",
        options: [
            "< 18",
            "18 - 64",
            "> 64"
        ],
        value: "< 18"
    }
    ];

var templates = {
    toggle:
    "{{setting.label}}" +
    "<label class='toggle toggle-royal'>" +
    "<input type='checkbox' ng-model='setting.value'>" +
    "<div class='track'>" +
    "   <div class='handle'></div>" +
    " </div>" +
    "</label>",
    checkbox:
    "{{setting.label}}" +
    "<label class='checkbox'>"+
    " <input type='checkbox' ng-model='setting.value'>"+
    "</label>",
    select:
    "<div class='input-label'>"+
    "  {{setting.label}}"+
    "</div>"+
    "<select ng-options='o for o in setting.options' ng-model='setting.value'></select>"
};