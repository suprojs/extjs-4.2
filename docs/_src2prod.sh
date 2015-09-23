#!/bin/sh

search(){
# [ 'search' = "$1" ]
# process search data
# * remove empty `"meta": {},` (application is patched)
# > size diff is ~ +100 000 bytes

APP_FILE='supro-data-8515f44300484aa544afce1aa831969a.js'

sed '
    s/^ *//
    s/ *$//
    /^"meta": {}/d
' < "source/_$APP_FILE" >"$APP_FILE"
}

js(){
# change JS files in place
APP_FILE=$1

sed -i '
    s/^ *//
    s/ *$//
' "$APP_FILE"

}

htm(){
# [ 'htm' = "$1" ]
# $2 e.g. 'output/_Ext...htm' - input html file with '_' prefix
#
# olecom@U32U-RX007R_OLE /d/extjs-4.2/docs (master)
# $ sh _src2prod.js htm output/_Ext.form.Label.htm
# output/_Ext.form.Label.htm
# Done
#
# olecom@U32U-RX007R_OLE /d/extjs-4.2/docs (master)
# $ sh _src2prod.js htm output/_Ext.button.Button.htm
# output/_Ext.button.Button.htm
# Done
#
# olecom@U32U-RX007R_OLE /d/extjs-4.2/docs (master)

APP_FILE=$1

sed '
    /<pre/,/<[/]pre>/b
    s/^ *//
    s/ *$//
' < "$APP_FILE" >"output/${APP_FILE#*output/_}"

}

app(){
# process Docs App file:
# * remove requires
# * replace strings in `extends` with `Ext` class names
# > 249145 - 221197 = +27948 bytes is size diff

APP_FILE='app-1c3b39672c292d36e4a5ff05c1bb7035.js'

sed '
    # remove requires (all is one file anyway)
    /^    requires:/{
        # skip raw like: /requires: "Docs.store.Settings",/
        /requires: "/d

    :_more
        /[]],[[:blank:]]*$/!{
            N
            b_more
        }
        d
    }
    # replace string refs to Ext classes
    /    extend: "Ext/{
        s/extend: "\(Ext[^"]*\)"/extend:\1/
    }
    s/^ *//
    s/ *$//
' < "source/_$APP_FILE" >"$APP_FILE"

: dev data <<'!!!'

Ext.define("Docs.view.cls.Overview", {
    extend: "Ext.panel.Panel",
    alias: "widget.classoverview",
    requires: ["Docs.view.cls.Toolbar", "Docs.view.examples.Inline", "Docs.view.comments.LargeExpander", "Docs.view.cls.MemberWrap", "Docs.view.comments.MemberWrap", "Docs.Syntax", "Docs.Settings", "Docs.Comments"],
    mixins: ["Docs.view.Scrolling"],
    cls: "class-overview iScroll",
    autoScroll: true,

Ext.define("Docs.Settings", {
    extend: "Docs.LocalStore",
    singleton: true,
    requires: "Docs.store.Settings",

Ext.define("Docs.view.HoverMenuButton", {
    extend: "Ext.toolbar.TextItem",
    alias: "widget.hovermenubutton",
    componentCls: "hover-menu-button",
    requires: ["Docs.view.HoverMenu"],
    showCount: false,
    statics: {
        menus: []
    },
    initComponent: function() {
        this.addEvents("click");
        if (this.showCount) {
            this.initialText = this.text;
            this.text += " <sup>" + this.store.getCount() + "</sup>";
            this.store.on("datachanged", function() {
                this.setText(this.initialText + " <sup>" + this.store.getCount() + "</sup>")



Ext.define("Docs.view.cls.Toolbar", {
    extend: "Ext.toolbar.Toolbar",
    requires: ["Docs.view.HoverMenuButton", "Docs.Settings", "Docs.Comments", "Ext.form.field.Checkbox"],
    dock: "top",
    cls: "member-links",
    docClass: {},
    accessors: {},
    initComponent: function() {

Ext.define("Docs.Application", {
    requires: ["Ext.app.Application", "Docs.History", "Docs.Comments", "Docs.Settings", "Docs.view.Viewport", "Docs.controller.Auth", "Docs.controller.Welcome", "Docs.controller.Failure", "Docs.controller.Classes", "Docs.controller.Search", "Docs.controller.InlineExamples", "Docs.controller.Examples", "Docs.controller.Guides", "Docs.controller.Videos", "Docs.controller.Tabs", "Docs.controller.Comments", "Docs.controller.CommentCounts", "Docs.controller.Tests"],
    constructor: function() {
        Docs.Comments.init(this.createApp, this)
    },
    createApp: function() {

!!!

}

[ 'search' = "$1" ] && search || [ 'htm' = "$1" ] && htm "$2" || [ 'js' = "$1" ] && js "$2" || app
echo "$APP_FILE
Done"

exit 0
