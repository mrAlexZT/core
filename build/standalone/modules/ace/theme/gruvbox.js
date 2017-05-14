define("ace/requirejs/text!ace/theme/gruvbox.css",[],".ace-gruvbox .ace_gutter {\n    background: #282828;\n    color: #a89984;\n}\n\n.ace-gruvbox .ace_print-margin {\n    width: 1px;\n    background: #555651\n}\n\n.ace-gruvbox {\n    background-color: #282828;\n    color: #ebdbb2\n}\n\n.ace-gruvbox .ace_cursor {\n    color: #F8F8F0\n}\n\n.ace-gruvbox .ace_marker-layer .ace_selection {\n    background: #3c3836;\n}\n\n.ace-gruvbox.ace_multiselect .ace_selection.ace_start {\n    box-shadow: 0 0 3px 0px #3c3836;\n}\n\n.ace-gruvbox .ace_marker-layer .ace_step {\n    background: #32302f;\n}\n\n.ace-gruvbox .ace_marker-layer .ace_bracket {\n    margin: -1px 0 0 -1px;\n    border: 1px solid #f38019;\n}\n\n.ace-gruvbox .ace_marker-layer .ace_active-line {\n    background: #3c3836;\n}\n\n.ace-gruvbox .ace_gutter-active-line {\n    background-color: #3c3836;\n}\n\n.ace-gruvbox .ace_marker-layer .ace_selected-word {\n    border: 1px solid #3c3836;\n}\n\n.ace-gruvbox .ace_invisible {\n    color: #3c3836\n}\n\n.ace-gruvbox .ace_entity.ace_name.ace_tag,\n.ace-gruvbox .ace_keyword,\n.ace-gruvbox .ace_meta.ace_tag,\n.ace-gruvbox .ace_storage {\n    color: #fb4934\n}\n\n.ace-gruvbox .ace_punctuation,\n.ace-gruvbox .ace_punctuation.ace_tag {\n    color: #fff\n}\n\n.ace-gruvbox .ace_constant.ace_character,\n.ace-gruvbox .ace_constant.ace_language,\n.ace-gruvbox .ace_constant.ace_numeric,\n.ace-gruvbox .ace_constant.ace_other {\n    color: #83a598\n}\n\n.ace-gruvbox .ace_invalid {\n    color: #F8F8F0;\n    background-color: #d3869b;\n}\n\n.ace-gruvbox .ace_invalid.ace_deprecated {\n    color: #F8F8F0;\n    background-color: #83a598;\n}\n\n.ace-gruvbox .ace_support.ace_constant,\n.ace-gruvbox .ace_support.ace_function {\n    color: #83a598\n}\n\n.ace-gruvbox .ace_fold {\n    background-color: #a3aa20;\n    border-color: #F8F8F2\n}\n\n.ace-gruvbox .ace_storage.ace_type,\n.ace-gruvbox .ace_support.ace_class,\n.ace-gruvbox .ace_support.ace_type {\n    font-style: italic;\n    color: #ebaa27\n}\n\n.ace-gruvbox .ace_entity.ace_name.ace_function,\n.ace-gruvbox .ace_entity.ace_other,\n.ace-gruvbox .ace_entity.ace_other.ace_attribute-name,\n.ace-gruvbox .ace_variable {\n    color: #a3aa20\n}\n\n.ace-gruvbox .ace_variable.ace_parameter {\n    font-style: italic;\n    color: #fabd2f\n}\n\n.ace-gruvbox .ace_string {\n    color: #ebdbb2;\n}\n\n.ace-gruvbox .ace_comment {\n    color: #665c54;\n    font-style: italic;\n}\n\n.ace-gruvbox .ace_indent-guide {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\n}");

define("ace/theme/gruvbox",[], function(require, exports, module) {

    exports.isDark = true;
    exports.cssClass = "ace-gruvbox";
    exports.cssText = require("../requirejs/text!./gruvbox.css");

    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass);
});