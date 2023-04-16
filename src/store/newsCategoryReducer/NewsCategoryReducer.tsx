interface NewsCategory  {
    id: number,
    name:string,
}
const defatulstate : NewsCategory = {
    name:'name loading',
    id:0
}
// @ts-ignore
export const NewsCategoryReducer = (state = defatulstate,action):NewsCategory=>{
    switch (action.type) {
        case "SET_CURRENT":
            return {...state,id: state.id = action.payload}
        default: return state;
    }
}