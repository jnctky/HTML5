/**
 *
 * 加载类事件
 * @author
 *
 */
var LoadEvent = (function (_super) {
    __extends(LoadEvent, _super);
    //public static LOADING: string = "loading";
    //public static LOADCOMP: string = "loadcomp";
    //private _resName: string = "";
    //public constructor(type:string, resName:string="", bubbles:boolean=false, cancelable:boolean=false) {
    function LoadEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        _super.call(this, type, bubbles, cancelable);
        //this._resName = resName;
    }
    var __egretProto__ = LoadEvent.prototype;
    return LoadEvent;
})(RES.ResourceEvent);
LoadEvent.prototype.__class__ = "LoadEvent";
//# sourceMappingURL=LoadEvent.js.map