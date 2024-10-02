import React, { useEffect, useState } from 'react';
import ordercover from '../../../assets/shop/ourproduct.jpg';
import Cover from './../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SingleOrder from './SingleOrder';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const [menu] = useMenu();
    const [activeTab, setActiveTab] = useState(5);

    const laptop = menu.filter(item => item.category === 'laptop')
    const mobile = menu.filter(item => item.category === 'mobile')
    const mouse = menu.filter(item => item.category === 'mouse')
    const keyboard = menu.filter(item => item.category === 'keyboard')
    const popular = menu.filter(item => item.category === 'popular')

    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <div>
            <Helmet>
                <title>Order Item</title>
            </Helmet>


            <Cover img={ordercover} title="Buy Product" para='' />

            <div role="tablist" className="tabs tabs-bordered justify-center">


                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="POPULAR" checked={activeTab === 4} onChange={() => handleTabChange(4)} />
                <div role="tabpanel" className="tab-content p-10">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {
                            popular.map((item) => {
                                return (
                                    <SingleOrder key={item._id} item={item} />
                                )
                            })
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="LAPTOP" checked={activeTab === 5} onChange={() => handleTabChange(5)} />
                <div role="tabpanel" className="tab-content p-10">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {
                            laptop.map((item) => {
                                return (
                                    <SingleOrder key={item._id} item={item} />
                                )
                            })
                        }
                    </div>
                </div>



                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="MOBILE" checked={activeTab === 1} onChange={() => handleTabChange(1)} />
                <div role="tabpanel" className="tab-content p-10">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {
                            mobile.map((item) => {
                                return (
                                    <SingleOrder key={item._id} item={item} />
                                )
                            })
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="MOUSE" checked={activeTab === 2} onChange={() => handleTabChange(2)} />
                <div role="tabpanel" className="tab-content p-10"
                >
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {
                            mouse.map((item) => {
                                return (
                                    <SingleOrder key={item._id} item={item} />
                                )
                            })
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="KEYBOARD" checked={activeTab === 3} onChange={() => handleTabChange(3)} />
                <div role="tabpanel" className="tab-content p-10">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {
                            keyboard.map((item) => {
                                return (
                                    <SingleOrder key={item._id} item={item} />
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Order;
