System.register(["jimu-core","jimu-arcgis","jimu-ui/advanced/data-source-selector"],(function(e,t){var r={},o={},a={};return{setters:[function(e){r.Immutable=e.Immutable,r.React=e.React},function(e){o.DataSourceTypes=e.DataSourceTypes},function(e){a.DataSourceSelector=e.DataSourceSelector}],execute:function(){e((()=>{var e={826:e=>{"use strict";e.exports=o},891:e=>{"use strict";e.exports=r},338:e=>{"use strict";e.exports=a}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,s),a.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var u={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(u),s.d(u,{default:()=>o});var e=s(891),t=s(826),r=s(338);class o extends e.React.PureComponent{constructor(){super(...arguments),this.supportedTypes=(0,e.Immutable)([t.DataSourceTypes.WebMap]),this.onDataSourceSelected=e=>{this.props.onSettingChange({id:this.props.id,useDataSources:e})}}render(){return e.React.createElement("div",{className:"sample-map-view-setting p-2"},e.React.createElement(r.DataSourceSelector,{types:this.supportedTypes,mustUseDataSource:!0,useDataSources:this.props.useDataSources,onChange:this.onDataSourceSelected,widgetId:this.props.id}))}}})(),u})())}}}));