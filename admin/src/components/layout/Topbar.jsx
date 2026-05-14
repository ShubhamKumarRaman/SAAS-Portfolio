import React from 'react'
import { Bell, Search } from 'lucide-react'

const Topbar = () => {
    return (
        <div>
            {/* Search */}
            <div>
                <Search size={18} />

                <input
                    type='text'
                    placeholder='Search...'
                />
            </div>

            {/* Right */}
            <div>
                <button className='relative'>
                    <Bell />

                    <span className='absolute, top1 right-1 w-2 h-2 bg-cyan-400 rounded-full'></span>
                </button>
                <div>
                    <div></div>
                    <div>
                        <h3>
                            Admin
                        </h3>
                        <p>
                            Super Admin
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
