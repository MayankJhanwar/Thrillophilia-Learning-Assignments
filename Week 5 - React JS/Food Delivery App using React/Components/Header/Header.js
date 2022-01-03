import React, { useState } from 'react';
import './Header.css';
import Food_items from '../../Items';
import { useDispatch } from 'react-redux';
import { load_all_items } from '../../Action/Action';

function Header() {
    const[searchWord, setSearchWord] = useState();
    const[visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    function getSearchWord(word){
        console.log(word);
        const filterDev = Food_items.filter(app => app.keyWord.includes(word));
        console.log(filterDev);
        dispatch(load_all_items(filterDev));
        setVisible(true);
    }

    return (
        <div>
            <div className='Header flex justify-between pt-4 px-4'>
                <div className='logo'>
                    <h1 className='text-3xl font-semibold'><span style={{color: "#FAD02C"}}>F</span>oodie</h1>
                </div>
                <div className='flex gap-4'>
                    <div className='py-2 px-3 border-2 rounded-full'>
                        <form className='flex items-center' action="" onSubmit={(e) => {
                            e.preventDefault();
                            getSearchWord(searchWord);
                        }}>
                            <img className='mr-2' src="/search.png" alt="" />
                            <input value={searchWord} type="text" placeholder='Search' onChange={(element) => setSearchWord(element.target.value)} />
                        </form>
                    </div>
                    <button onClick={() => {
                        dispatch(load_all_items(Food_items))
                        setVisible(false)
                        setSearchWord('')
                    }} className='px-4 rounded-lg' style={{display: visible ? "block" : "none", backgroundColor: "#90ADC6", color: "#333652"}}>Clear Search</button>
                </div>
            </div>
            
            <div className='mt-8 flex justify-center gap-8'>
                <button onClick={() => getSearchWord('veg')} className='px-8 py-2 text-white font-bold shadow-lg' style={{backgroundColor: "#333652"}}>Veg</button>
                <button onClick={() => getSearchWord('nonveg')} className='px-8 py-2 text-white font-bold shadow-lg' style={{backgroundColor: "#333652"}}>Non Veg</button>
            </div>
        </div>
    )
}

export default Header
