/* eslint-disable react/prop-types */

const MenuModal = ({show,handleShowModal}) => {

    return (
        show &&
        <div className='absolute top-0 w-screen h-screen flex justify-center items-center'
            onClick={handleShowModal}
        >
            <div
             className='absolute z-20 top-0 bg-black w-screen h-screen opacity-50'
            ></div>
            <div className='w-screen h-screen flex justify-center items-center'>
                <div className='absolute  z-30 bg-violet-800  w-1/4 h-2/4 rounded-xl flex flex-col gap-2 p-3'>
                    <div className='p-3'>
                        <h1 className='text-2xl text-white uppercase font-bold text-center'>Pause</h1>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <button className='bg-white p-3 text-center font-bold uppercase rounded-xl hover:border-violet-600 border border-t-2 border-r-2 border-b-8 border-l-2 border-black'>Continue Game</button>
                        <button className='bg-white p-3 text-center font-bold uppercase rounded-xl hover:border-violet-600 border border-t-2 border-r-2 border-b-8 border-l-2 border-black'>Restart</button>
                        <button className='bg-[#FD6687] text-white p-3 text-center font-bold uppercase rounded-xl hover:border-violet-600 border border-t-2 border-r-2 border-b-8 border-l-2 border-black'>Quit Game</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuModal