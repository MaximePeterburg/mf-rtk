"use strict";(self.webpackChunkShell=self.webpackChunkShell||[]).push([[890],{669:(e,r,n)=>{n.d(r,{C:()=>t});var t=n(200).useSelector},890:(e,r,n)=>{n.r(r),n.d(r,{StoreProvider:()=>v,counterSlice:()=>a,default:()=>f,store:()=>S,useStore:()=>m});var t=n(748),c=n(416),u=n.n(c),o=n(200),i=n(669),a=(0,t.createSlice)({name:"counter",initialState:{count:0},reducers:{increment:function(e){e.count+=1},decrement:function(e){e.count-=1}}}),s=a.actions,d=s.increment,l=s.decrement;const f=a.reducer;var S=(0,t.configureStore)({reducer:{counter:a.reducer}});function m(){var e=(0,i.C)((function(e){return e.counter.count})),r=(0,o.useDispatch)();return{count:e,increment:function(){return r(d())},decrement:function(){return r(l())}}}var v=function(e){var r=e.children;return u().createElement(o.Provider,{store:S},r)}}}]);