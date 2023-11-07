import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
//create action
export const createUser = createAsyncThunk(
    'createUser',
    async (data) => {
        const response = await fetch('https://64b1968a062767bc48266afd.mockapi.io/crudapp', {
            method: 'post',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        try {
            const result = await response.json();
            return result;
        } catch (error) {

        }
    }
)

//read action
export const showUser = createAsyncThunk(
    'showUser',
    async (data) => {
        const response = await fetch('https://64b1968a062767bc48266afd.mockapi.io/crudapp');
        try {
            const result = await response.json();
            return result;
        } catch (error) {

        }
    }
)
//delete user
export const deleteUser = createAsyncThunk(
    'deleteUser',
    async (id, data) => {
        const response = await fetch(`https://64b1968a062767bc48266afd.mockapi.io/crudapp/${id}`,
            {
                method: 'delete'
            });
        try {
            const result = await response.json();
            return result;
        } catch (error) {

        }
    }
)



export const updateUser = createAsyncThunk(
    'updateUser',
    async (data) => {
        const response = await fetch(`https://64b1968a062767bc48266afd.mockapi.io/crudapp/${data.id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        // console.log(updateUser);
        try {
            const result = await response.json();
            return result;
        } catch (error) {

        }
    }
)


export const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: true,
        error: null,
        searchUser:[],
    },


    reducers:{
        searchUser:(state,action)=>{
        state.searchUser=action.payload
       }
    },


    extraReducers: {
        //create user
        [createUser.pending]: (state) => {
            state.loading = false;
        },
        [createUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users.push(action.payload);
        },
        [createUser.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.payload.message;
        },
        //show user
        [showUser.pending]: (state) => {
            state.loading = false;
        },
        [showUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload
        },
        [showUser.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.payload.message;
        },
        //delete user
        [deleteUser.pending]: (state) => {
            state.loading = false;
        },
        [deleteUser.fulfilled]: (state, action) => {
            state.loading = false;
            // console.log('delete action',action.payload);
            const { id } = action.payload;
            if (id) {
                state.users = state.users.filter((ele) => ele.id !== id)
                console.log('delete');
            }
        },
        [deleteUser.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.payload.message;
        },
          //create user
          [updateUser.pending]: (state) => {
            state.loading = false;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            // state.users.push(action.payload);
            state.users=state.users.map((ele)=>(
                ele.id===action.payload.id?action.payload:ele
            ))
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = true;
            state.error = action.payload.message;
        },
    }

});

// Action creators are generated for each case reducer function
export const { searchUser} = userDetail.actions

export default userDetail.reducer