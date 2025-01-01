import React from 'react'
import headphone from "../../assets/HeadPhone.png";

export const Features = () => {

    const cardlist =[

        {
        id:1,
        name:'Headphones 1',
        image:'[headphone]',
        price:299.99,
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, tortor vel dapibus malesuada, nunc velit finibus ligula, non viverra velit velit et nunc. In hac habitasse platea dictumst.'
        },
        {
            id:2,
            name:'Headphones 2',
            image:'{headphone}',
            price:399.99,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, tortor vel dapibus malesuada, nunc velit finibus ligula, non viverra velit velit et nunc. In hac habitasse platea dictumst.'
        },
        {
            id:3,
            name:'Headphones 3',
            image: {headphone},
            price:499.99,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod, tortor vel dapibus malesuada, nunc velit finibus ligula, non viverra velit velit et nunc. In hac habitasse platea dictumst.'
        }

    ]


    return (

        <div
            className={'max-w-[1200px]  p-5  md:mx-auto items-center my-10 gap-10 '}>

            <div className={'md:flex gap-10 items-center justify-center'}>
                <div className={''}>
                    <p className={'text-[#E54660]'}>ABOUT US</p>
                    <h1 className={'text-3xl font-bold py-2'}>Empowering Your Sound Experience</h1>
                    <p className={' text-justify mt-10'}>Our journey is fueled by a commitment to pushing boundaries,
                        embracing
                        creativity, and ensuring that every pair of headphones bears the hallmark of our unwavering
                        dedication to craftsmanship.</p>
                    <button className={'bg-[#E54660] px-2 py-2 rounded my-4 font-bold text-white'}> Learn More</button>
                </div>
                <div>
                    <img src={headphone} className={'h-[400px] w-[550px]'} alt=""/>

                </div>
            </div>

            <div className={' my-10'}>
                <div className={' flex flex-col justify-center text-center'}>
                    <p className={'text-[#E54660]'}>POPULAR PRODUCT</p>
                    <h1 className={'text-3xl font-bold  md:px-[150px] md:mx-[200px]  py-4' }>Explore Our Most Popular Headphones</h1>
                    <p className={''}>Experience audio excellence with our top-rated headphones, carefully curated to meet the diverse
                        needs and preferences of our valued customers.</p>

                </div>
                <div className={'md:flex my-20 gap-3'}>
                    {
                        cardlist.map((card)=>{
                            return(
                                    <div className={' hover:scale-110 transition-all duration-300 ease-in-out shadow-sm shadow-gray-700 p-4 rounded-md flex flex-col items-center gap-3'}>
                                        <img src={headphone}  className={'h-[350px] '} alt={card.name}/>
                                        <h3 className={'text-3xl font-bold'}>{card.name}</h3>
                                        <p className={'text-justify'}>{card.description}</p>
                                        <p className={'text-xl font-bold text-[#E54660]'}>{card.price}</p>
                                        <button className={'bg-[#E54660] px-2 py-2 rounded my-4 font-bold text-white'}>Add to Cart</button>
                                    </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>

    )
}
