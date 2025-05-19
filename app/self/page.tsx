"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home(){
    const [ animation , setAnimation ] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setAnimation((c)=>!c)
        },1000)
    },[])
    return<div className = {'w-screen h-screen bg-[#3b3935] flex items-center justify-center p-8 '}>
        <div className = {"w-[900px] h-[600px] bg-black grid grid-cols-4 grid-rows-3 gap-4 p-4 rounded-3xl"}>
            <motion.div
                className = {"col-span-2 row-span-1 bg-amber-50 rounded-2xl"}
                initial = {
                    {x:"50%",y:"50%",top:"50%",bottom:"50%",position:"absolute"}
                }
                animate = {
                    {x:0,y:0,position:"relative",top:0}
                }
                transition={{duration:"1",ease:"easeOut"}}
            />
            {animation ?
                null:
            <>
                <motion.div
                    className = {"col-span-1 row-span-1 bg-amber-50 rounded-2xl"}
                    initial = {
                        {opacity:0 , x:"50%",y:"50%",top:"50%",bottom:"50%" ,position:"absolute"}
                    }
                    animate = {
                        {opacity:1 , position:"relative" , x:0 , y:0 , top:0}
                    }
                    transition={{duration:"2",ease:"easeOut"}}
                >Hello</motion.div>
                <motion.div
                    className = {"col-span-1 row-span-1 bg-amber-50 rounded-2xl"}
                                                        initial = {
                        {opacity:0}
                    }
                    animate = {
                        {opacity:1}
                    }
                    transition={{duration:"2",ease:"easeOut"}}
                />
                <motion.div
                    className = {"col-span-1 row-span-1 bg-amber-50 rounded-2xl"}
                                                        initial = {
                        {opacity:0}
                    }
                    animate = {
                        {opacity:1}
                    }
                    transition={{duration:"2",ease:"easeOut"}}
                />
                <motion.div
                    className = {"col-span-1 row-span-2 bg-amber-50 rounded-2xl"}
                                                        initial = {
                        {opacity:0}
                    }
                    animate = {
                        {opacity:1}
                    }
                    transition={{duration:"2",ease:"easeOut"}}
                />
                <motion.div
                    className = {"col-span-2 row-span-2 bg-amber-50 rounded-2xl"}
                                                        initial = {
                        {opacity:0}
                    }
                    animate = {
                        {opacity:1}
                    }
                    transition={{duration:"2",ease:"easeOut"}}
                />
                <motion.div
                    className = {"col-span-1 row-span-1 bg-amber-50 rounded-2xl"}
                                                        initial = {
                        {opacity:0}
                    }
                    animate = {
                        {opacity:1}
                    }
                    transition={{duration:"2",ease:"easeOut"}}
                />
            </>
            }
        </div>
    </div>
}