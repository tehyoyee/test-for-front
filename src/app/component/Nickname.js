'use client'

import { useEffect, useState } from "react"
import { Cookies } from "react-cookie";

export default function Nickname() {
    const [nick, setNick] = useState('익명')
    const cookies = new Cookies();
    
    useEffect(() => {
        console.log("nickname");
        const f = async () => {
            const asdf = await fetch("http://localhost:8080/test", {
                headers: {
                    "Authorization": cookies.get("Authorization")
                }
            })
            setNick((await asdf.json()).nickname)
        }
        f()
    }, [nick])

    return (
        <div>{ nick }</div>
    )
}