

// hoc
// 1 hoc => function - input -> output
// input : component -> NewComponent
// why we use -> to share logic between component 

// const Wrapper = (props) =>{
//     return (
//         <div className={props.class}>
//             {props.children}
//         </div>
//     )
// }


const Wrapper = (WrappedComponent ,className) =>{
    return(props) =>{
            return (<div className={className}>
                <WrappedComponent/>
            </div>
        )
    }
}


export default Wrapper;