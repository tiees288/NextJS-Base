import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import styles from '../styles/Home.module.css'
import { useQuery, useMutation } from 'react-query'
import axios from 'axios'

interface User {
    id: number
    createdAt: Date
    name: string
    PhoneNumber: string
}

export default function Home() {

  const [loading, setLoading] = useState(false)
  const { data: userData,error, isError,refetch: refetchUser, isLoading } = useQuery([{
    name: 'Krittawat',
    surname: 'Boo',
    age: '25'
  }],
    async (query) => {
      const token = localStorage.getItem('AuthT');
      const params = query.queryKey?.[0]
      const data = await axios.get('https://639ae512d514150197431f44.mockapi.io/api/v1//users')
      // throw {error: 'Undefinded token'};

      if (data.status == 200) {
        // Some Stuff
      }

      return data?.data as User[]
    }, {
    retry: 0,
    onError: (e) => {
        console.log(e)
          setLoading(true)
    }
  })

  return (
    <div>
      <h1>List of Users - React Query</h1>
      <ul>
      {
        userData?.map((user: User) => {
          return (
            <li key={user.id}>{`${user.id} ${user.name} ${user.PhoneNumber}`}</li>
          )
        })
      }
      </ul>
      <h1>Add New Users</h1>
    </div>
  )
}
