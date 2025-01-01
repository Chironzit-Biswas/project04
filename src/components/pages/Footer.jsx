export const Footer = () => {
    return (
        <>
        <div className={'bg-black text-white list-none p-5 mx-auto'}>
             <div className={'grid max-w-[1200px] md:grid-cols-4 grid-cols-2 gap-5 p-5 mx-auto' }>
                 <div className={'flex flex-col justify-start '}>
                     <button className={'text-2xl font-bold text-left'}>Product</button>
                     <button>
                         <li className={'py-2 text-left'}>Pricing</li>
                     </button>
                     <button>
                         <li className={'py-2 text-left'}>Overview</li>
                     </button>
                     <button>
                         <li className={'py-2 text-left'}>Browse</li>
                     </button>
                     <button>
                         <li className={'py-2 text-left'}>Feature</li>
                     </button>
                 </div>
                 <div className={'flex flex-col'}>
                     <button className={'text-2xl font-bold text-left'}>Resources</button>
                     <button>
                         <li className={'text-left py-2'}>Help Center</li>
                     </button>
                     <button>
                         <li className={'text-left py-2'}>Blog</li>
                     </button>
                     <button>
                         <li className={'text-left py-2'}>Tutorials</li>
                     </button>
                     <button>
                         <li className={'text-left py-2'}>FAQs</li>
                     </button>
                 </div>
                 <div className={'flex flex-col'}>
                     <button className={'text-2xl font-semibold text-left'}>Support</button>
                     <button>
                         <li className={'text-left py-2'}>Contact Us</li>
                     </button>
                     <button>
                         <li className={'text-left py-2'}>Developers</li>
                     </button>
                     <button>
                         <li className={'text-left py-2'}>Documentation</li>
                     </button>
                     <button>
                         <li className={'text-left py-2'}>Integrations</li>
                     </button>
                 </div>
                 <div className={'flex flex-col'}>
                     <button className={'text-2xl font-bold text-left'}>Get the App</button>
                     <button>
                         <li className={'text-left py-2'}>Get the App</li>
                     </button>
                     <button>
                         <li className={'text-left py-2'}>Press</li>
                     </button>
                     <button>
                         <li className={'text-left py-2'}>Careers</li>
                     </button>
                     <button>
                         <li className={'text-left py-2'}>Investors</li>
                     </button>
                 </div>
             </div>
        </div>
        </>
    )
}