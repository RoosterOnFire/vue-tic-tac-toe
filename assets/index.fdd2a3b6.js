import{c as e,a as t,u as r,d as l,b as a,e as s,f as n,t as c,o as u,r as o,g as i,F as y,h as d,i as p}from"./vendor.4802c876.js";const m=Symbol(),b=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],v=e({plugins:[t()],state:{currentPlayer:"X",playerOWinCount:0,playerXWinCount:0,isGameRunning:!1,isGameOver:!1,cells:[{id:0,player:"",style:""},{id:1,player:"",style:""},{id:2,player:"",style:""},{id:3,player:"",style:""},{id:4,player:"",style:""},{id:5,player:"",style:""},{id:6,player:"",style:""},{id:7,player:"",style:""},{id:8,player:"",style:""}]},getters:{isPlayerSelected:e=>""!==e.currentPlayer},mutations:{selectPlayer(e,t){e.currentPlayer=t},switchPlayer(e){e.currentPlayer="X"===e.currentPlayer?"O":"X"},updateCell(e,t){e.cells.forEach((r=>{t.id===r.id&&""===t.player&&(r.player=e.currentPlayer)}))},updateGameOver(e){const t=b.map((t=>t.map((t=>e.cells[t])).every((t=>t.player===e.currentPlayer)))).indexOf(!0),r=e.cells.every((e=>""!==e.player));e.isGameOver=-1!==t||r,e.isGameOver&&!r&&(b[t].map((t=>e.cells[t].style="board__cell--win")),"X"===e.currentPlayer?e.playerXWinCount+=1:"O"===e.currentPlayer&&(e.playerOWinCount+=1))},resetBoard(e){e.cells.forEach((e=>{e.player="",e.style=""})),e.currentPlayer="X",e.isGameRunning=!1,e.isGameOver=!1}},actions:{updateGame({commit:e,state:t},r){t.isGameOver||(t.isGameRunning=!0,e("updateCell",r),e("updateGameOver"),t.isGameOver?setTimeout((()=>{t.isGameOver=!1,e("resetBoard")}),1700):e("switchPlayer"))},reset({commit:e}){e("resetBoard")}}});function G(){return r(m)}var P=l({setup(){const e=G();return{buttonXText:a((()=>`X ${e.state.playerXWinCount||"-"}`)),buttonOText:a((()=>`O ${e.state.playerOWinCount||"-"}`)),isGameRunning:a((()=>e.state.isGameRunning)),selectPlayer(t){e.commit("selectPlayer",t)}}}});const O={class:"select-player"};P.render=function(e,t,r,l,a,o){return u(),s("div",O,[n("button",{class:"select-player__button",type:"button",onClick:t[1]||(t[1]=t=>e.selectPlayer("X")),disabled:e.isGameRunning},c(e.buttonXText),9,["disabled"]),n("button",{class:"select-player__button",type:"button",onClick:t[2]||(t[2]=t=>e.selectPlayer("O")),disabled:e.isGameRunning},c(e.buttonOText),9,["disabled"])])};var C=l({components:{SelectPlayer:P},setup(){}});const f={class:"header"};C.render=function(e,t,r,l,a,c){const i=o("SelectPlayer");return u(),s("div",f,[n(i)])};var g=l({props:{cell:{type:Object,required:!0}},setup(e){const{cell:t}=i(e),r=G();return{cell:t,updateCell(){r.dispatch("updateGame",t.value)}}}});g.render=function(e,t,r,l,a,n){return u(),s("button",{id:e.cell.id.toString(),class:e.cell.style,onClick:t[1]||(t[1]=(...t)=>e.updateCell&&e.updateCell(...t)),type:"button"},c(e.cell.player),11,["id"])};var X=l({components:{Cell:g},setup(){const e=G();return{cells:a((()=>e.state.cells))}}});const R={class:"board"};X.render=function(e,t,r,l,a,n){const c=o("Cell");return u(),s("div",R,[(u(!0),s(y,null,d(e.cells,(e=>(u(),s(c,{key:e.id,cell:e,class:"board__cell"},null,8,["cell"])))),128))])};var _=l({setup(){const e=G();return{resetGame(){e.dispatch("reset")}}}});_.render=function(e,t,r,l,a,n){return u(),s("button",{onClick:t[1]||(t[1]=(...t)=>e.resetGame&&e.resetGame(...t)),class:"header__reset",type:"button"},c("Reset Game"))};var h=l({components:{ResetButton:_},setup(){}});const B={class:"footer"};h.render=function(e,t,r,l,a,c){const i=o("ResetButton");return u(),s("div",B,[n(i)])};var S=l({components:{Header:C,Board:X,Footer:h},setup(){const e=G();return{isGameRunning:a((()=>e.getters.isPlayerSelected))}}});S.render=function(e,t,r,l,a,c){const i=o("Header"),d=o("Board"),p=o("Footer");return u(),s(y,null,[n(i),n(d),n(p)],64)};p(S).use(v,m).mount("#app");
