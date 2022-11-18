// create a reducer for message
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IMessage} from '../hooks/chat.interface'

interface MessageState {
    messages: IMessage[]
}

const initialState: MessageState = {
    messages: []
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<IMessage>) => {
            state.messages.push(action.payload)
        }

    }
})

export const {addMessage} = messageSlice.actions
export default messageSlice.reducer
