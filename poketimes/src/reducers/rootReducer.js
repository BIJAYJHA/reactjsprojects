import Post from "../components/Post";

const initState={
    posts:[
     {id:'1',title:'get your work done',body:'please do your work in with peace in your mind'},
     {id:'2',title:' your work is done',body:'so your work is done with peace in your mind'},
     {id:'3',title:'this are bullshits',body:'ok you are a bullshit'}

    ]
}


const rootReducer=(state=initState,action)=>{
    if (action.type==='DELETE_POST') {
        let newPosts=state.posts.filter(post=>{
            return action.id!==post.id;
        });
        return{
            ...state,
            posts:newPosts
        }
        
    }
    return state;

}

export default rootReducer;