import { useEffect, useState } from 'react'
import axios from 'axios'
import {Pagination} from "./pagination";

export const UsersList = () => {
    const [countries, setCountries] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [limit] = useState(5)

    useEffect(() => {
        const GetCountries = async () => {
            setLoading(true)
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/users'
            )
            setCountries(response.data)
            setLoading(false)
        }
        GetCountries()
    },[])

    const LastCountryIndex = page*limit
    const firstCountryIndex = LastCountryIndex - limit
    const CurrentCountry = countries.slice(firstCountryIndex, LastCountryIndex)

    const paginate = pageNumber => setPage(pageNumber)

    return <div className={'count_list'}>
        {loading? (<div>Loading...</div>): CurrentCountry.map((counter, i) => (
            <div className="count_user" key={counter._id}>
                <img
                    className="user_image"
                    alt={counter.username}
                    src={

                        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
                    }
                />
                <div>
                    <div className="user__name">
                        {counter.name} ({counter.username})
                    </div>
                    <div className="user__mail"> @{counter.email}</div>

                </div>

            </div>
        ))}
        <Pagination limit={limit} totalCountries={countries.length} paginate={paginate}/>
    </div>
}
