import{l as e,c as t,a as r,u as n,d as l,b as s,e as a,t as i,o,f as c,r as u,g as p,F as d,h as y,i as m}from"./vendor.2d8dd9eb.js";const g=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function v(e,t){return g.map((r=>r.map((t=>e[t])).every((e=>e.player===t)))).findIndex((e=>e))}function C(e){return e.map(((e,t)=>""===e.player?t:-1)).filter((e=>-1!==e))}function b(e,t){return A(e,t).move}function A(t,r,n=!0,l=0){const s=e.exports.cloneDeep(t),a=C(s).map((t=>{const{nextState:a,move:i}=function(t,r,n){const l=e.exports.cloneDeep(t);return l[n].player=r,{nextState:l,move:n}}(s,r,t),o=-1!==v(a,r),c=(o?n?100:-100:0)-l,u=C(a);if(o||0===u.length)return{score:c,move:i};return{score:c+A(a,function(e){return"X"===e?"O":"X"}(r),!n,l+1).score,move:i}}));return n?e.exports.maxBy(a,(e=>e.score)):e.exports.minBy(a,(e=>e.score))}const P=Symbol(),G=t({plugins:[r()],state:{currentPlayer:"X",playerOWinCount:0,playerXWinCount:0,isGameRunning:!1,isGameOver:!1,isAIActive:!0,isAiThinking:!1,cells:[{id:0,player:"",hit:!1},{id:1,player:"",hit:!1},{id:2,player:"",hit:!1},{id:3,player:"",hit:!1},{id:4,player:"",hit:!1},{id:5,player:"",hit:!1},{id:6,player:"",hit:!1},{id:7,player:"",hit:!1},{id:8,player:"",hit:!1}]},getters:{isPlayerSelected:e=>""!==e.currentPlayer,isGameRunning:e=>e.isGameRunning,isBoardCellDisabled:e=>t=>!!t.player||e.isAiThinking||e.isGameOver,currentPlayer:e=>`Current player: ${e.currentPlayer}`,playerXWinCount:e=>`X ${e.playerXWinCount||"-"}`,playerOWinCount:e=>`O ${e.playerOWinCount||"-"}`,aiStatus:e=>"AI: "+(e.isAIActive?"ON":"OFF")},mutations:{selectPlayer(e,t){e.currentPlayer=t},switchPlayer(e){e.currentPlayer="X"===e.currentPlayer?"O":"X"},updateCell(e,t){const r=e.cells.find((e=>t.id===e.id));r&&(r.player=e.currentPlayer)},updateGameOver(e){const t=v(e.cells,e.currentPlayer),r=e.cells.every((e=>""!==e.player));e.isGameOver=-1!==t||r,e.isGameOver&&!r&&(g[t].map((t=>e.cells[t].hit=!0)),"X"===e.currentPlayer?e.playerXWinCount+=1:"O"===e.currentPlayer&&(e.playerOWinCount+=1))},resetBoard(e){e.cells.forEach((e=>{e.player="",e.hit=!1})),e.currentPlayer="X",e.isGameRunning=!1,e.isGameOver=!1}},actions:{updateGame({commit:e,state:t},r){if(t.isGameRunning=!0,e("updateCell",r),e("updateGameOver"),t.isGameOver)setTimeout((()=>e("resetBoard")),1700);else{if(t.isAIActive){t.isAIActive=!0,e("switchPlayer");const r=b(t.cells,t.currentPlayer),n=t.cells.find((e=>e.id===r));n&&(e("updateCell",n),e("updateGameOver"),t.isGameOver&&setTimeout((()=>e("resetBoard")),1700)),t.isAiThinking=!1}e("switchPlayer")}},toggleAI({state:e}){e.isAIActive=!e.isAIActive},reset({commit:e}){e("resetBoard")},resetFull({commit:e,state:t}){e("resetBoard"),t.playerXWinCount=0,t.playerOWinCount=0,t.isAIActive=!0}}});function h(){return n(P)}var O=l({setup(){const e=h();return{message:s((()=>e.getters.currentPlayer))}}});O.render=function(e,t,r,n,l,s){return o(),a("p",null,i(e.message),1)};var f=l({components:{},props:{title:{type:String,required:!0}},setup(){}});const X={type:"button",class:"button"};f.render=function(e,t,r,n,l,s){return o(),a("button",X,i(e.title),1)};var B=l({components:{AppButton:f},setup(){const e=h();return{buttonXText:s((()=>e.getters.playerXWinCount)),buttonOText:s((()=>e.getters.playerOWinCount)),isGameRunning:s((()=>e.getters.isGameRunning)),selectPlayer(t){e.commit("selectPlayer",t)}}}});const k={class:"select-player"};B.render=function(e,t,r,n,l,s){const i=u("AppButton");return o(),a("div",k,[c(i,{title:e.buttonXText,class:"select-player-button",disabled:e.isGameRunning,onClick:t[1]||(t[1]=t=>e.selectPlayer("X"))},null,8,["title","disabled"]),c(i,{title:e.buttonOText,class:"select-player-button",disabled:e.isGameRunning,onClick:t[2]||(t[2]=t=>e.selectPlayer("O"))},null,8,["title","disabled"])])};var x=l({props:{cell:{type:Object,required:!0}},setup(e){const{cell:t}=p(e),r=h();return{cell:t,isDisabled:s((()=>r.getters.isBoardCellDisabled(t.value))),updateCell(){r.dispatch("updateGame",t.value)}}}});x.render=function(e,t,r,n,l,s){return o(),a("button",{type:"button",class:["board-cell",{"board-cell--win":e.cell.hit}],id:e.cell.id.toString(),disabled:e.isDisabled,onClick:t[1]||(t[1]=(...t)=>e.updateCell&&e.updateCell(...t))},i(e.cell.player),11,["id","disabled"])};var W=l({components:{Cell:x},setup(){const e=h();return{cells:s((()=>e.state.cells))}}});const I={class:"board"};W.render=function(e,t,r,n,l,s){const i=u("Cell");return o(),a("div",I,[(o(!0),a(d,null,y(e.cells,(e=>(o(),a(i,{key:e.id,cell:e},null,8,["cell"])))),128))])};var R=l({components:{AppButton:f},setup(){const e=h();return{message:s((()=>e.getters.aiStatus)),toggleAi(){e.dispatch("toggleAI")},resetGame(){e.dispatch("reset")},resetFullGame(){e.dispatch("resetFull")}}}});const S={class:"footer"};R.render=function(e,t,r,n,l,s){const i=u("AppButton");return o(),a("div",S,[c(i,{title:e.message,onClick:e.toggleAi},null,8,["title","onClick"]),c(i,{title:"Reset Game",onClick:e.resetGame,onDblclick:e.resetFullGame},null,8,["onClick","onDblclick"])])};var F=l({components:{AppCurrentPlayer:O,AppSelectPlayer:B,Board:W,Footer:R},setup(){const e=h();return{isGameRunning:s((()=>e.getters.isPlayerSelected))}}});const T={class:"header"};F.render=function(e,t,r,n,l,s){const i=u("AppSelectPlayer"),p=u("AppCurrentPlayer"),y=u("Board"),m=u("Footer");return o(),a(d,null,[c("div",T,[c(i),c(p)]),c(y),c(m)],64)},m(F).use(G,P).mount("#app");