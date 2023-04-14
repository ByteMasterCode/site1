

interface Histor  {
    image:string,
    year:string,
    description:string,
    title:string
}

 const defaultState: Histor  = {
    image:'',
     year:'',
     description:'',
     title:''
}



// @ts-ignore
export const  HistoryReducer = (state = defaultState,action): Histor =>{
        switch (action.type){
            case 'YEAR_UPDATE':
                return {...state,year: state.year = action.payload}
            case 'IMG_UPDATE':
                return {...state,image: state.image = action.payload}
            case 'TITLE_UPDATE':
                return {...state,title: state.title = action.payload}
            case 'DESCRIPTION_UPDATE':
                return {...state,description: state.description = action.payload}
            default: return state
        }
}