import React from 'react'
const PricingCard=({plan})=>{
    return(
        <div className='card'>
            <h4>{plan.title}</h4>
            <h2>{plan.price}</h2>
            <ul>
                {
                    plan.features.map((feature)=>{
                        return <li className={feature.available ? "available" : "unavailable"}><i className={`fa-solid ${feature.available ? "fa-check" : "fa-xmark"}`}></i>{feature.text}</li>
                    })
                }
            </ul>
            <button className="btn">BUTTON</button>
        </div>
    )
}
export default PricingCard