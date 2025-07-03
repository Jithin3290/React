import { useReducer, useRef } from "react"

// 1.	Create a React component that uses useReducer to manage a list of products.
// 2.	Define actions like ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT.
// 3.	Provide a simple UI to dispatch these actions with a form and buttons.
function reducer(state, action) {
    switch (action.type) {
        case "addproduct": return [...state, action.value]
        case "deltproduct": return state.toSpliced(action.value2, 1)
        case "update": return state.toSpliced(action.index, 1, action.item)
    }
}



export const ReducerList = () => {
    let [state, dispatch] = useReducer(reducer, ["apple", "orrange", "banana"])
    const txt1 = useRef("")
    const txt2 = useRef("")
    const txt3 = useRef("")
    const txt4 = useRef("")


    function add() {
        dispatch({ type: "addproduct", value: txt1.current.value })
        txt1.current.value = ""
    }
    function del() {
        let n = txt2.current.value
        let index = state.indexOf(n)
        dispatch({ type: "deltproduct", value2: index })
        txt2.current.value = ""

    }
    function up() {
        const index = txt3.current.value.trim()
        const item = txt4.current.value.trim()
        dispatch({ type: "update", index: index, item: item })
        txt3.current.value = ""
        txt4.current.value = ""
    }
    return (
        <div><form>
            <input type="text" ref={txt1}></input><button onClick={add}>ADD_PRODUCT</button>
            <br /><input type="text" ref={txt2}></input>
            <button onClick={del}>DELETE_PRODUCT.</button>

            <br /><input type="text" ref={txt3} placeholder="index"></input><input type="text" ref={txt4} placeholder="item"></input>
            <button onClick={up}>UPDATE_PRODUCT.</button>
            </form>
            <h1>List of Items</h1>
            {state.map((item, index) => {
                return <li key={index}>{index}   :   {item}</li>
            })}


        </div>
    ) 

}