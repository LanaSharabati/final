import React from 'react'
import { useState,useEffect } from "react"
import axios from 'axios'
import CardContainer from '../cardContainer/CardContainer'
import {Link} from "react-router-dom";
import Loading from '../loading/Loading.jsx';

export default function FavProduct() {
        const [posts, setPosts] = useState([])
        useEffect(() => {
            axios.get("https://apimena.herokuapp.com/api/products?populate=*")
            .then(res => {
                setPosts(res.data.data)
                        })
                .catch(err => {
                        console.log(err);
                            })
        }, [])
        const fav = posts.map(item => item.attributes.fovproduct);
        posts.map(item => item.attributes.name)  
        var len = fav.length;
        var indices = new Array(len);
        for (var i = 0; i < len; ++i) indices[i] = i;
        indices.sort(function (a, b) { return fav[a] < fav[b] ? -1 : fav[a] > fav[b] ? 1 : 0; });
        const lastThree = indices.slice(Math.max(fav.length - 3, 0))
        var favThreeProduct=[];
        for(var i = 0;i<lastThree.length;i++)
        {
            favThreeProduct[i] = posts[lastThree[i]];
        }      
        const ThreePro = posts.slice(Math.max(fav.length - 3, 0))
        
    return (
        <div>
            <Link to="/Favourute-product"><h1>Most Popular Products</h1></Link>
            <CardContainer products={favThreeProduct}/>   
            <Link to="/product"><h1> Products</h1></Link>
            <CardContainer products={ThreePro}/>
        </div>
    )
}