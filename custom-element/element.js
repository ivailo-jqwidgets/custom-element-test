
var jqxCustomElementProto = Object.create(HTMLElement.prototype);

jqxCustomElementProto.createdCallback = function () {
    var color = this.getAttribute('color') || "white",
   	    text = this.getAttribute('text');

    this.innerHTML = "<div style='background-color:red; padding:10px; color:"+color+"'>"+text+"</div";

};

var jqxCustomElement = document.registerElement('jqx-custom-element', {
    prototype: jqxCustomElementProto
});