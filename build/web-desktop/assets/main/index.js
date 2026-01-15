System.register("chunks:///_virtual/main",["./menu.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/menu.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,c,o,t,i;return{setters:[function(e){n=e.inheritsLoose},function(e){c=e.cclegacy,o=e._decorator,t=e.director,i=e.Component}],execute:function(){var s;c._RF.push({},"aee2eWydB5AOJF+1UV4sYTL","menu",void 0);var a=o.ccclass;o.property,e("menu",a("menu")(s=function(e){function c(){return e.apply(this,arguments)||this}n(c,e);var o=c.prototype;return o.loadInformaticsScene=function(){t.loadScene("informatics")},o.loadPhysicsScene=function(){t.loadScene("physics")},o.loadRussianScene=function(){t.loadScene("russian")},o.loadMathematicsScene=function(){t.loadScene("mathematics")},c}(i))||s);c._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});