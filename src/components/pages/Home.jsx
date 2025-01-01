import headphone from '/src/assets/HeadPhone.png'
export const Home = () => {
    return (
        <>
            <div
                className={'max-w-[1200px] p-4 h-[70vh]  md:mx-auto mx-5 py-[100px] md:flex justify-center items-center my-10 '}>
                <div>
                    <h1 className={'text-4xl font-bold w-[80%]'}>Enjoy Quality Sound That Takes You to a New World</h1>
                    <p className={'py-5'}>Take your listening experience to the next level with the latest technology
                        and ergonomic design of our headphones.</p>
                    <button
                        className={'bg-[#E54660] hover:bg-pink-400 text-white px-4 hover:scale-110 transition-all duration-300 rounded-md py-2'}>Learn
                        More
                    </button>
                </div>
                <div className={'hidden md:flex'}>
                    <img src={headphone} className={'h-[700px] w-[1100px]'} alt=""/>
                </div>
            </div>
            <div className={'bg-[#E54660] text-white'}>
                <div className={'flex mx-5 justify-center items-center gap-4 h-[70px]'}>
                    <button
                        className={'bg-white hover:scale-110 transition-all duration-300  text-red-600 rounded-lg px-2'}>New
                    </button>
                    <p>Introducing our newest feature in headphone v3.0. Grab it now for $49!</p>
                </div>
            </div>


            <div
                className={'max-w-[1200px] p-4 h-[70vh] border-2 md:mx-auto mx-5 py-[100px] md:flex justify-center items-center my-10 '}>
                <div className={'md:w-1/2'}>
                    <img src={headphone} alt={'Product Image'}/>
                </div>
                <div className={'md:w-1/2'}>
                    <p className={'text-red-600 text-sm py-5'}>WHY USING US</p>
                    <h1 className={'text-3xl font-bold'}>Elevate Your Listening Experience with Confidence</h1>
                    <p>Our dedication to innovation and quality ensures that each pair of headphones is crafted to
                        deliver
                        unparalleled sound clarity, comfort, and durability.</p>
                    <h3 className={'text-xl font-bold py-2 mt-2'}>Innovative Technology</h3>
                    <p>Equipped with the most advanced technology to deliver superior sound quality and an immersive
                        listening experience.</p>
                    <h3 className={'text-xl font-bold py-2 mt-2'}>Uncompromising Quality</h3>
                    <p>Prioritizing quality from materials to manufacturing processes, ensures our headphones are
                        durable
                        and comfortable for everyday use.</p>
                    <h3 className={'text-xl font-bold py-2 mt-2'}>Customer-Centric Approach</h3>
                    <p>Focus on customer satisfaction to provide exceptional support and service throughout their
                        headphone
                        journey.</p>
                </div>
            </div>


        </>
    )
}