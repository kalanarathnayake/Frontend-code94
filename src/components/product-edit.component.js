
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useHistory } from 'react-router';
import "react-datepicker/dist/react-datepicker.css"

export default function EditProduct() {

    const [sku, setSku] = useState('');
    const [quantity, setQuantity] = useState('');
    const [productName, setProductName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [isFavourite, setIsFavourite] = useState();
    const [price, setPrice] = useState('');
    const [id, setID] = useState(null);

    useEffect(() => {
        console.log("View product ID :" + localStorage.getItem('Id'));

        setID(localStorage.getItem('Id'))
        setSku(localStorage.getItem('SKU'));
        setQuantity(localStorage.getItem('Quantity'));
        setProductName(localStorage.getItem('ProductName'));
        setImgUrl(localStorage.getItem('ImgUrl'));
        setProductDescription(localStorage.getItem('ProductDescription'));
        setIsFavourite(localStorage.getItem('IsFavourite'));
        setPrice(localStorage.getItem('Price'));
    }, []);

    const updateAPIData = (e) => {
        e.preventDefault();
        const product = {
            sku: sku,
            quantity: quantity,
            productName: productName,
            imgUrl: imgUrl,
            productDescription: productDescription,
            isFavourite: isFavourite,
            price: price,
        }
        //check payload 
        console.log(product);
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
        } else if (productName.length <= 5) {
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
        } else if (productDescription.length <= 5) {
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
        } else if (price.length <= 1) {
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
        } else {
            axios.put(`http://localhost:5000/product/${id}`, product)
                .then(res => {
                    console.log(res.status);
                    if (res.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Product has been Updated!',
                            background: '#fff',
                            showConfirmButton: true,
                            confirmButtonText: 'Okay',
                            confirmButtonColor: '#0712e0',
                            iconColor: '#60e004',
                            timer: 2800000
                        })
                        window.location = '/product'
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Error in updating!',
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

    const goBack = () => {
        window.location = "/product"
    }

    return (
        <div class="">
            <div className="flex flex-col px-5 pt-1 scroll-m-1 scroll-smooth ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div className=''>
                                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                    <form className='container px-20'>
                                        <div class="">
                                            <p className='flex items-center font-semibold text-black uppercase '>
                                                <span class=" text-4xl">Products</span>
                                                <span class="ml-3">
                                                    <svg class="h-8 w-8 mr-2 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                                                    </svg>
                                                </span>
                                                <span class="pt-2" style={{ color: "#001EB9" }}> Edit product</span>
                                            </p>
                                            <p />
                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div className="flex gap-6 form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        SKU
                                                    </label>
                                                    <input type="text"
                                                        required
                                                        className="border-0 form-control"
                                                        style={{ backgroundColor: "#F7F7F7" }}
                                                        value={sku}
                                                        onChange={(e) => setSku(e.target.value)}
                                                    />
                                                </div>
                                                <div class="">
                                                </div>
                                            </div><p />
                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div className="flex gap-6">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Name
                                                    </label>
                                                    <input type="text"
                                                        className="border-0 form-control"
                                                        style={{ backgroundColor: "#F7F7F7" }}
                                                        value={quantity}
                                                        onChange={(e) => setProductName(e.target.value)}
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 gap-4 form-group">
                                                    <div className="flex gap-6 ">
                                                        <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                            QTY
                                                        </label>
                                                        <input type="text"
                                                            className="border-0 form-control"
                                                            style={{ backgroundColor: "#F7F7F7" }}
                                                            value={productName}
                                                            onChange={(e) => setQuantity(e.target.value)}
                                                        />
                                                    </div>

                                                </div>
                                            </div><p />
                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div className="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Product Description
                                                        <span class="text-xs ml-2 text-slate-500">(A small description about the product.)</span>
                                                    </label>
                                                    <textarea type="time"
                                                        className="border-0 form-control"
                                                        style={{ backgroundColor: "#F7F7F7" }}
                                                        value={productDescription}
                                                        onChange={(e) => setProductDescription(e.target.value)}
                                                    />
                                                </div>
                                                <div className="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>
                                                        Price
                                                    </label>
                                                    <input type="number"
                                                        className="border-0 form-control"
                                                        style={{ backgroundColor: "#F7F7F7" }}
                                                        value={price}
                                                        onChange={(e) => setPrice(e.target.value)}
                                                    />
                                                </div>
                                            </div><p />
                                            <div className="grid grid-cols-1 gap-4 ">
                                                <div className="flex gap-6">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 min-w-fit dark:text-white'>
                                                        Product Image
                                                    </label>
                                                    <input type="text"
                                                        className="border-0 form-control"
                                                        style={{ backgroundColor: "#F7F7F7" }}
                                                        value={imgUrl}
                                                        onChange={(e) => setImgUrl(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-center align-middle form-group">
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Save Changes" onClick={updateAPIData} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
