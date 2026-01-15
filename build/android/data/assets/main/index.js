System.register("chunks:///_virtual/main",["./menu.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/menu.ts",["cc"],(function(e){var c,n,s,a;return{setters:[function(e){c=e.cclegacy,n=e.Component,s=e.director,a=e._decorator}],execute:function(){var t;c._RF.push({},"aee2eWydB5AOJF+1UV4sYTL","menu",void 0);const{ccclass:o,property:r}=a;e("menu",o("menu")(t=class extends n{loadInformaticsScene(){s.loadScene("informatics")}loadPhysicsScene(){s.loadScene("physics")}loadRussianScene(){s.loadScene("russian")}loadMathematicsScene(){s.loadScene("mathematics")}})||t);c._RF.pop()}}}));

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