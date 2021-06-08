import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: 1, username: "Dave_Patrick", company: "Google" },
    { id: 2, username: "Hank_Gluhwein", company: "Facebook" },
  ];
export  const crudSlice = createSlice({
    name:"crud",
    initialState,
    reducers: {
        userAdd(state, action) {
          state.push(action.payload);
        },
        userUpdate(state, action) {
            const { id, username, company } = action.payload;
            const existingUser = state.find((user) => user.id === id);
            if (existingUser) {
              existingUser.username = username;
              existingUser.company = company;
            }
        },
        userDelete(state,action){
            const {id} = action.payload
            const ids = id.id;
            console.log(ids)
            return state.filter((i)=> i.id !== ids)
        }
      }
})
export const { userAdd,userUpdate,userDelete } = crudSlice.actions;

export default crudSlice.reducer