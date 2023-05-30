/* eslint-disable react/prop-types */
export default function Title({cor, subTitle } ){
    return(
    <div className ={`sub-title ${cor}`}>
        <h3>{ subTitle }</h3>
    </div>
    )
}