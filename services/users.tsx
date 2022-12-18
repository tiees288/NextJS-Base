import { useQuery, useMutation } from "react-query";
import axios from "axios";

interface User {
  id?: number
  createdAt?: Date
  name: string
  PhoneNumber: string
}

const FetchUser = (data?: User) => {
  return useQuery(['UserData', {
    data
  }],
    async (query) => {

      const token = localStorage.getItem('AuthT');
      const params = query.queryKey?.[1]
      const data = await axios.get('https://639ae512d514150197431f44.mockapi.io/api/v1//users')

      // throw {error: 'Undefinded token'};

      return data?.data as User[]
    }, {
    retry: 0,
    onError: (e) => {
      console.log(e)
      //   setLoading(true)
    }
  })

  type UserData = {
    name: string;
    email: string;
  };
}

const InserUser = () => {
  const createUserFunct = async (data: User) => {
    const response = await axios({
      method: "POST",
      url: 'https://639ae512d514150197431f44.mockapi.io/api/v1/users',
      data: data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  }

  return useMutation(createUserFunct, {
    onSuccess: (success) => {
      console.log('Success Inside useMutations.')
    }
  })
}

export default { FetchUser, InserUser }