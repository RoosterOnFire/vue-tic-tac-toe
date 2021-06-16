import{c as e,a as r,u as t,d as a,b as l,e as n,f as s,t as c,o,g as u,F as i,r as p,h as y,i as d}from"./vendor.6defeeda.js";const m=Symbol(),C=e({plugins:[r()],state:{currentPlayer:"",playerOWinCount:0,playerXWinCount:0,isGameOver:!1,cells:[{id:0,player:""},{id:1,player:""},{id:2,player:""},{id:3,player:""},{id:4,player:""},{id:5,player:""},{id:6,player:""},{id:7,player:""},{id:8,player:""}]},getters:{isPlayerSelected:e=>""!==e.currentPlayer},mutations:{selectPlayer(e,r){e.currentPlayer=r},switchPlayer(e){e.currentPlayer="X"===e.currentPlayer?"O":"X"},updateCell(e,r){e.cells.forEach((t=>{r.id===t.id&&""===r.player&&(t.player=e.currentPlayer)}))},updateGameOver(e){const r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].map((r=>r.map((r=>e.cells[r])).every((r=>r.player===e.currentPlayer)))).indexOf(!0);e.isGameOver=-1!==r,e.isGameOver&&("X"===e.currentPlayer?e.playerXWinCount+=1:"O"===e.currentPlayer&&(e.playerOWinCount+=1))},clearBoard(e){e.cells.forEach((e=>e.player=""))}},actions:{updateGame({commit:e,state:r},t){r.isGameOver||(e("updateCell",t),e("updateGameOver"),r.isGameOver?setTimeout((()=>{r.isGameOver=!1,e("clearBoard")}),1700):e("switchPlayer"))},reset({commit:e,state:r}){r.currentPlayer="",r.playerOWinCount=0,r.playerXWinCount=0,r.isGameOver=!1,e("clearBoard")}}});function P(){return t(m)}var O=a({setup(){const e=P();return{oWinCount:l((()=>e.state.playerOWinCount)),xWinCount:l((()=>e.state.playerXWinCount)),resetGame(){e.dispatch("reset")}}}});const v={class:"header"},G={class:"header__counter"},b={class:"header__counter"};O.render=function(e,r,t,a,l,u){return o(),n("div",v,[s("p",G,"Player X: "+c(e.xWinCount),1),s("p",b,"Player O: "+c(e.oWinCount),1),s("button",{onClick:r[1]||(r[1]=(...r)=>e.resetGame&&e.resetGame(...r)),class:"header__reset",type:"button"}," Reset ")])};var f=a({props:{cell:{type:Object,required:!0}},setup(e){const{cell:r}=u(e),t=P();return{cell:r,updateCell:function(){t.dispatch("updateGame",r.value)}}}});f.render=function(e,r,t,a,l,s){return o(),n("button",{id:e.cell.id.toString(),onClick:r[1]||(r[1]=(...r)=>e.updateCell&&e.updateCell(...r)),type:"button"},c(e.cell.player),9,["id"])};var W=a({components:{BoardCell:f},setup(){const e=P();return{cells:l((()=>e.state.cells))}}});const _={class:"board"};W.render=function(e,r,t,a,l,s){const c=y("BoardCell");return o(),n("main",_,[(o(!0),n(i,null,p(e.cells,(e=>(o(),n(c,{key:e.id,cell:e,class:"board__cell"},null,8,["cell"])))),128))])};var h=a({setup(){const e=P();return{selectPlayer:function(r){e.commit("selectPlayer",r)}}}});const X={class:"select-player"};h.render=function(e,r,t,a,l,c){return o(),n("main",X,[s("button",{class:"select-player__button",type:"button",onClick:r[1]||(r[1]=r=>e.selectPlayer("X"))}," X "),s("button",{class:"select-player__button",type:"button",onClick:r[2]||(r[2]=r=>e.selectPlayer("O"))}," O ")])};var g=a({components:{Header:O,SelectPlayer:h,GameBoard:W},setup(){const e=P();return{isGameRunning:l((()=>e.getters.isPlayerSelected))}}});const k={class:"app"};g.render=function(e,r,t,a,l,c){const u=y("Header"),i=y("GameBoard"),p=y("SelectPlayer");return o(),n("div",k,[s(u),e.isGameRunning?(o(),n(i,{key:0})):(o(),n(p,{key:1}))])};d(g).use(C,m).mount("#app");