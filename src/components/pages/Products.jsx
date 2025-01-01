import {useDispatch, useSelector} from "react-redux";
import { removeProduct} from "../../redux/features/productSlice.js";

export const Products = () => {


    const features=[{
        id: 1,
        icon: 'fas fa-headphones-alt',
        title: 'Premium Sound',
        description: 'Listen to your favorite tunes with our high-quality speakers and amplifiers.'
        },
        {
            id: 2,
            icon: 'fas fa-microphone-alt',
            title: 'High-Quality Audio',
            description: 'Experience the best audio quality with our state-of-the-art microphones and speakers.'
        },
        {
            id: 3,
            icon: 'fas fa-laptop-code',
            title: 'Customizable Solutions',
            description: 'Tailor your rental experience to your specific needs with our customizable solutions.'
        },
        {
            id: 4,
            icon: 'fas fa-chart-line',
            title: 'Transparent Pricing',
            description: 'Our pricing is transparent and easy to understand, making it easy for you to choose the right solution for your business.'
        },
        {
            id: 5,
            icon: 'fas fa-shield-alt',
            title: 'Secure Payment',
            description: 'Our payment system is 100% secure, making it safe for you to rent premium sound equipment.'
        },
        {
            id: 6,
            icon: 'fas fa-chart-bar',
            title: 'Personalized Reviews',
            description: 'Our customer reviews help us make informed decisions about our products and services.'
        }
    ]


   const product= useSelector((state)=>state.productR.products)
    console.log(product)

   const dispatch= useDispatch()

    const handelDelete =(id) => {
        dispatch(removeProduct(id))
    }

    /*const handelAdd =(id) => {
        dispatch(addProduct(id))
    }*/

    return (
        <>
            <div className={'max-w-[1200px]  md:mx-auto mx-5 py-[50px]  md:flex flex-col justify-start items-center  '}>

                <p className={'text-red-600 text-sm'}>OUR FEATURE</p>
                <h1 className={'text-4xl font-bold'}>Discover the Power of Premium Sound</h1>
                <p className={'py-4 md:text-xl md:w-1/2 md:text-center' }>We share common trends and strategies for creating & improving your rental income.</p>

                <div className={'bg-[#E54660] rounded-lg max-w-[1200px] md:mt-[50px] flex p-5  mx-auto'}>
                    <div className={'md:grid grid-cols-3 md:h-[300px] rounded-lg w-[1200px]   content-center gap-5 mx-auto '}>
                        {
                            features.map((feature)=>{
                                return (
                                    <div key={feature.id} className={'content-center grid md:justify-center py-4 '}>
                                        <div className={''}>
                                            <i className={feature.icon}></i>
                                            <h3 className={'text-xl text-white '}>{feature.title}</h3>
                                        </div>
                                        <p className={'text-white w-[300px] '}>{feature.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={'my-10'}>
                    <h1 className={'text-3xl font-bold'}>Product Price List</h1>
                    <div>
                        {

                            product.map((product)=>{
                                return(
                                    <div key={product.id} className={'gap-5 flex justify-between items-center py-5 border-b-2 border-gray-300'}>
                                        <h3 className={'text-xl font-bold'}>{product.name}</h3>
                                        <h3 className={'text-xl font-bold'}>{product.price}</h3>
                                        <button className={'bg-pink-600 px-4 rounded-lg text-white hover:scale-110 transition-all duration-300 '} onClick={()=>handelDelete(product.id)}>Delete</button>
                                        {/*<button className={'bg-pink-600 px-4 rounded-lg text-white hover:scale-110 transition-all duration-300 '} onClick={()=>handelAdd(product)}>Add</button>*/}
                                    </div>
                                )
                            })

                        }

                    </div>
                </div>
            </div>

        </>
    )
}