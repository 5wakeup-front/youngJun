import { atom, selector } from 'recoil';



// export type Todo = {
//   id?: number,
//   title: string,
//   modify: boolean
// }

export const todoListAtom = atom({
    key: 'todoListAtom',
    default: []
})

export const keywordAtom = atom({
    key: 'keywordAtom',
    default: {
        keyword: ''
    }
})


