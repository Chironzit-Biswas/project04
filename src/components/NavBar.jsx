
import { MdMenu } from "react-icons/md";
import {useState} from "react";
import {Link} from "react-router-dom";


export const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const navlitem=[
        {name:'Home',path:'/'},
        {name:'Products',path:'/products'},
        {name:'Features',path:'/features'},
        {name:'Support',path:'/support'},

    ]

    return (
        <div className={'sticky top-0 z-50'}>
              <div className={'mx-auto   bg-yellow-400 items-center '}>
                  <div  className={'flex justify-between max-w-[1200px] items-center mx-auto p-4'}>

                      {/*Here is your ==========Start========== Company Logo*/}
                      <div>
                          <h1 className={'font-bold text-xl'}>Chironzit</h1>
                      </div>
                      {/*Here is your ==========End========== Company Logo*/}


                      {/* Here is ============Start============mobile menu icon*/}
                      <MdMenu onClick={()=>setOpenMenu(!openMenu)} className={'md:hidden  text-2xl z-30'}/>
                      {/* Here is ===========End========= mobile menu icon*/}

                      {/* For DeskTop =====Start==== Navbar Menu calling*/}
                      <div className={'md:flex hidden gap-5'}>
                          {
                              navlitem.map((nav) => {
                                  return (
                                      <div key={nav.id}>
                                          <Link  className={'font-semibold border-white hover:border-b-[2px] '}  to={nav.path}>{nav.name}</Link>
                                      </div>
                                  )
                              })
                          }
                      </div>
                      {/* For DeskTop =====End===== Navbar Menu calling*/}

                  </div>
              </div>


           {/* ======Start==== For Mobile Device*/}
            <div className={`absolute top-0 right-0 h-screen w-64 bg-gray-500 p-5 md:hidden flex-col transform transition-all duration-700 ease-in-out ${
                openMenu ? "translate-x-0" : "translate-x-full"
            }`}>
            {
                openMenu ? <div>
                    {
                        navlitem.map((nav) => {
                            return (
                                <div key={nav.id} className={'gap-5 py-3'}>
                                    <a className={'font-semibold border-white hover:border-b-[2px]'} key={nav.id} href={nav.path}>{nav.name}</a>
                                </div>
                            )
                        })
                    }
                </div>:null
            }
            </div>
            {/* ======End==== For Mobile Device*/}
        </div>
    )
}
