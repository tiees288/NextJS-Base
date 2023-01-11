import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect } from 'react';
// import styles from '../styles/Home.module.css'
import { useRecoilState, useRecoilValue } from "recoil";
import { nameState } from "../atoms/name";
import { lengthStates } from '../selectors/name'

interface Person {
  name: string
  hegiht: number
}
interface Animal {
  age: number
}

export default function Home() {

  const [nameSt, setName] = useRecoilState(nameState)
  const nameValue = useRecoilValue(lengthStates)

  useEffect(() => {
    console.log(`From UseEffect: ${nameValue}`)
  }, [nameSt])

  return (
    <div>
      Hello page
    </div>
  )
}
