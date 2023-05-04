import React, { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

export default function AddPackage() {
    // sku,
    // quantity,
    // productName,
    // imgUrl,
    // productDescription,
    // isFavourite,
    // price,

    const [sku, setSku] = useState('');
    const [quantity, setQuantity] = useState('');
    const [productName, setProductName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [isFavourite, setIsFavourite] = useState('');
    const [price, setPrice] = useState('');
    const postData = (e) => {

        e.preventDefault();
        const products = {
            sku: sku,
            quantity: quantity,
            productName: productName,
            imgUrl: imgUrl,
            productDescription: productDescription,
            isFavourite: isFavourite,
            price: price,
        }
        console.log(products);

        if (sku.length <= 3) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'ID is short',
                color: '#f2220f',
                background: '#fff',
                showConfirmButton: true,
                confirmButtonText: 'Okay',
                confirmButtonColor: '#f2220f',

                iconColor: '#60e004',
                timer: 2800000
            })
        } else if (quantity.length <= 0) {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Add quantity',
                color: '#f2220f',
                background: '#fff',
                showConfirmButton: true,
                confirmButtonText: 'Okay',
                confirmButtonColor: '#f2220f',
                iconColor: '#60e004',
                timer: 2800000
            })
        }
        else if (productName.length <= 5) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Product Name is too short',
                color: '#f2220f',
                background: '#fff',
                showConfirmButton: true,
                confirmButtonText: 'Okay',
                confirmButtonColor: '#f2220f',
                iconColor: '#60e004',
                timer: 2800000
            })
        } else if (productDescription.length !== 5) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Description in too short',
                color: '#f2220f',
                background: '#fff',
                showConfirmButton: true,
                confirmButtonText: 'Okay',
                confirmButtonColor: '#f2220f',
                iconColor: '#60e004',
                timer: 2800000
            })
        }
        else if (price.length !== 1) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Add valid price',
                color: '#f2220f',
                background: '#fff',
                showConfirmButton: true,
                confirmButtonText: 'Okay',
                confirmButtonColor: '#f2220f',
                iconColor: '#60e004',
                timer: 2800000
            })
        }
        else {
            axios.post('http://localhost:5000/product/add/', products,)
                .then(res => {
                    console.log(res);
                    if (res.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Product has been added! Package ID is #' + sku,
                            background: '#fff',
                            showConfirmButton: true,
                            confirmButtonText: 'Okay',
                            confirmButtonColor: '#0712e0',
                            iconColor: '#60e004',
                            timer: 2800000
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Error in adding!',
                            background: '#fff',
                            showConfirmButton: true,
                            confirmButtonText: 'Okay',
                            confirmButtonColor: '#f2220f',
                            iconColor: '#60e004',
                            timer: 2800000
                        })
                    }
                })
        }
    }

    return (
        <div className="flex flex-col px-5 py-32 pt-2 scroll-m-1 scroll-smooth ">
            {/* <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className='items-center overflow-hidden'>
                        <div className=''>
                            <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                <form>
                                    <div class="">
                                        <p className='text-4xl font-semibold text-black uppercase'>Add Package</p>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Item
                                                </label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    onChange={(e) => setItem(e.target.value)}
                                                />
                                            </div>
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                    Category
                                                </label>
                                                <select
                                                    type="text"
                                                    required
                                                    className="form-control"
                                                    onChange={(e) => setCategory(e.target.value)}
                                                >
                                                    <option>Select From Here</option>
                                                    <option>Breakable Items</option>
                                                    <option>Electronics</option>
                                                    <option>Food Items</option>
                                                    <option>Freezer Items</option>
                                                    <option>Flowers</option>
                                                </select>
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-1 gap-4 form-group">
                                            <div className="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Special Notes
                                                </label>
                                                <textarea type="text"
                                                    className="form-control"
                                                    onChange={(e) => setSpecialNotes(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div class="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                    Accepted Date
                                                </label>
                                                <DatePicker
                                                    viewBox="0 0 20 40"
                                                    dateFormat="MMMM d, yyyy"
                                                    selected={new Date()}
                                                    onChange={handleDate}
                                                />
                                            </div>
                                            <div className="">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Accepted Time
                                                </label>
                                                <input type="time"
                                                    className="form-control"
                                                    onChange={(e) => setAcceptedTime(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p /><p />
                                        <div className="grid grid-cols-1 gap-4 form-group">
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Customer Name
                                                </label>
                                                <input type="text"
                                                    className="form-control"
                                                    onChange={(e) => setcustomerName(e.target.value)}
                                                />
                                            </div>
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >
                                                    Delivery Address
                                                </label>
                                                <input type="text"
                                                    className="form-control"
                                                    onChange={(e) => setAddress(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                    Phone Number
                                                </label>
                                                <input type="text"
                                                    className="form-control"
                                                    onChange={(e) => setPhone(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Add Package" onClick={postData} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}