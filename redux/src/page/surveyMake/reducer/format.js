//종류
export const OBJECTIVE = "OBEJCTIVE";
export const MULTIPLE = "MULTIPLE";
export const TRUEFALSE = "TRUEFALSE";
export const STAR = "STAR";

//format 
export const DATA_OBEJCTIVE = (id) => ({id:id,type:OBJECTIVE,title:id+"번째 질문"})
export const DATA_MULTIPLE = (id) => ({id:id,type:MULTIPLE,title:id+"번째 질문",response:[{id:1,title:"1번째 선택요소"}]})
