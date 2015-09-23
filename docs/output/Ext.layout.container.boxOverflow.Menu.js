Ext.data.JsonP.Ext_layout_container_boxOverflow_Menu({
"alternateClassNames": ["Ext.layout.boxOverflow.Menu"],
"aliases": {},
"enum": null ,
"parentMixins": [],
"tagname": "class",
"subclasses": [],
"extends": "Ext.layout.container.boxOverflow.None",
"uses": [],
"html": "",
"superclasses": ["Ext.Base", "Ext.layout.container.boxOverflow.None"],
"meta": {
"private": true
},
"code_type": "ext_define",
"requires": ["Ext.button.Button", "Ext.toolbar.Separator"],
"html_meta": {
"private": null
},
"statics": {
"property": [{
"tagname": "property",
"owner": "Ext.Base",
"meta": {
"static": true,
"private": true
},
"name": "$onExtended",
"id": "static-property-S-onExtended"
}],
"cfg": [],
"css_var": [],
"method": [{
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"private": true
},
"name": "addConfig",
"id": "static-method-addConfig"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"chainable": true,
"private": true
},
"name": "addInheritableStatics",
"id": "static-method-addInheritableStatics"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"chainable": true,
"private": true
},
"name": "addMember",
"id": "static-method-addMember"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"chainable": true
},
"name": "addMembers",
"id": "static-method-addMembers"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"chainable": true
},
"name": "addStatics",
"id": "static-method-addStatics"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"chainable": true,
"private": true
},
"name": "addXtype",
"id": "static-method-addXtype"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"chainable": true,
"private": true
},
"name": "borrow",
"id": "static-method-borrow"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true
},
"name": "create",
"id": "static-method-create"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true
},
"name": "createAlias",
"id": "static-method-createAlias"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"private": true
},
"name": "extend",
"id": "static-method-extend"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true
},
"name": "getName",
"id": "static-method-getName"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"deprecated": {
"text": "Use {@link #addMembers} instead.",
"version": "4.1"
}
},
"name": "implement",
"id": "static-method-implement"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"private": true
},
"name": "mixin",
"id": "static-method-mixin"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"chainable": true,
"private": true
},
"name": "onExtended",
"id": "static-method-onExtended"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"chainable": true,
"markdown": true,
"deprecated": {
"text": "Use {@link Ext#define Ext.define} instead",
"version": "4.1.0"
}
},
"name": "override",
"id": "static-method-override"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"static": true,
"private": true
},
"name": "triggerExtended",
"id": "static-method-triggerExtended"
}],
"event": [],
"css_mixin": []
},
"files": [{
"href": "Menu.html#Ext-layout-container-boxOverflow-Menu",
"filename": "Menu.js"
}],
"linenr": 1,
"members": {
"property": [{
"tagname": "property",
"owner": "Ext.Base",
"meta": {
"private": true
},
"name": "$className",
"id": "property-S-className"
}, {
"tagname": "property",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "_asLayoutRoot",
"id": "property-_asLayoutRoot"
}, {
"tagname": "property",
"owner": "Ext.Base",
"meta": {
"private": true
},
"name": "configMap",
"id": "property-configMap"
}, {
"tagname": "property",
"owner": "Ext.Base",
"meta": {
"private": true
},
"name": "initConfigList",
"id": "property-initConfigList"
}, {
"tagname": "property",
"owner": "Ext.Base",
"meta": {
"private": true
},
"name": "initConfigMap",
"id": "property-initConfigMap"
}, {
"tagname": "property",
"owner": "Ext.Base",
"meta": {
"private": true
},
"name": "isInstance",
"id": "property-isInstance"
}, {
"tagname": "property",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "menu",
"id": "property-menu"
}, {
"tagname": "property",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {},
"name": "menuItems",
"id": "property-menuItems"
}, {
"tagname": "property",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "menuTrigger",
"id": "property-menuTrigger"
}, {
"tagname": "property",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {},
"name": "noItemsMenuText",
"id": "property-noItemsMenuText"
}, {
"tagname": "property",
"owner": "Ext.Base",
"meta": {
"protected": true
},
"name": "self",
"id": "property-self"
}],
"cfg": [{
"tagname": "cfg",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {},
"name": "triggerButtonCls",
"id": "cfg-triggerButtonCls"
}],
"css_var": [],
"method": [{
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {},
"name": "constructor",
"id": "method-constructor"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "addComponentToMenu",
"id": "method-addComponentToMenu"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "beforeMenuShow",
"id": "method-beforeMenuShow"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "beginLayout",
"id": "method-beginLayout"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "beginLayoutCycle",
"id": "method-beginLayoutCycle"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.None",
"meta": {
"private": true
},
"name": "calculate",
"id": "method-calculate"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"protected": true,
"deprecated": {
"text": "as of 4.1. Use {@link #callParent} instead."
}
},
"name": "callOverridden",
"id": "method-callOverridden"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"protected": true
},
"name": "callParent",
"id": "method-callParent"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"protected": true
},
"name": "callSuper",
"id": "method-callSuper"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "captureChildElements",
"id": "method-captureChildElements"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "clearMenu",
"id": "method-clearMenu"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "clearOverflow",
"id": "method-clearOverflow"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.None",
"meta": {
"private": true
},
"name": "completeLayout",
"id": "method-completeLayout"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"private": true
},
"name": "configClass",
"id": "method-configClass"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "createMenuConfig",
"id": "method-createMenuConfig"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "destroy",
"id": "method-destroy"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.None",
"meta": {
"private": true
},
"name": "finishedLayout",
"id": "method-finishedLayout"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"private": true
},
"name": "getConfig",
"id": "method-getConfig"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {},
"name": "getInitialConfig",
"id": "method-getInitialConfig"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.None",
"meta": {
"private": true
},
"name": "getItem",
"id": "method-getItem"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "getOverflowCls",
"id": "method-getOverflowCls"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.None",
"meta": {
"private": true
},
"name": "getOwnerType",
"id": "method-getOwnerType"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.None",
"meta": {
"private": true
},
"name": "getPrefixConfig",
"id": "method-getPrefixConfig"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "getSuffixConfig",
"id": "method-getSuffixConfig"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "handleOverflow",
"id": "method-handleOverflow"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"private": true
},
"name": "hasConfig",
"id": "method-hasConfig"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "hideTrigger",
"id": "method-hideTrigger"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"chainable": true,
"protected": true
},
"name": "initConfig",
"id": "method-initConfig"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "onButtonAttrChange",
"id": "method-onButtonAttrChange"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "onButtonToggle",
"id": "method-onButtonToggle"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"private": true
},
"name": "onConfigUpdate",
"id": "method-onConfigUpdate"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "onRemove",
"id": "method-onRemove"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"chainable": true,
"private": true
},
"name": "setConfig",
"id": "method-setConfig"
}, {
"tagname": "method",
"owner": "Ext.layout.container.boxOverflow.Menu",
"meta": {
"private": true
},
"name": "showTrigger",
"id": "method-showTrigger"
}, {
"tagname": "method",
"owner": "Ext.Base",
"meta": {
"protected": true
},
"name": "statics",
"id": "method-statics"
}],
"event": [],
"css_mixin": []
},
"inheritable": null ,
"private": true,
"component": false,
"name": "Ext.layout.container.boxOverflow.Menu",
"singleton": false,
"override": null ,
"inheritdoc": null ,
"id": "class-Ext.layout.container.boxOverflow.Menu",
"mixins": [],
"mixedInto": []
});
