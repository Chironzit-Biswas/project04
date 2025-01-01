import headphone from "../../assets/HeadPhone.png";

export const Support = () => {
    return (
        <>
           <div className={'max-w-[1200px]  md:mx-auto mx-5 p-5 md:flex flex-col justify-start items-center  '}>
               <div className={'md:flex items-center justify-center'}>
                   <div className={'md:w-full'}>
                       <h1 className={'text-2xl text-[#E54660]'}>Support</h1>
                       <h2 className={'font-semibold text-justify text-2xl '}>With these headphones, I can truly isolate myself from the surrounding noise and enjoy music
                           with
                           exceptional sound quality, making my listening experience more enjoyable and immersive."</h2>
                       <p className={'mt-10 font-bold'}>Ian Klein</p>
                       <p>Digital Marketer</p>
                   </div>
                   <div className={'md:my-20'}>
                       <img src={headphone} className={'h-[550px] w-[800px] rounded-lg mb-5'} alt=""/>

                   </div>
               </div>
           </div>
        </>
    )
}