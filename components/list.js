import React from 'react'
import Link from 'next/link'
import { useSelector,useDispatch } from 'react-redux'
import {userDelete} from '../redux/reducers/crudSlice'


export default function List() {
    const crud = useSelector((state) => state.crud)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(userDelete({ id}));
      };

    return (

        <div>
 
                    <table class="u-full-width">
                            <thead>
                                <tr>
                                <th>id</th>
                                <th>username</th>
                                <th>company</th>
                                <th>button</th>
                                </tr>
                            </thead>
                            <tbody>
                        {crud.length === 0 ?<p>NO Data Found</p> : crud.map(({ id, username, company }, i)=>(
                            
                                <tr key={i}>
                                <td>{id}</td>
                                <td>{username}</td>
                                <td>{company}</td>
                                <td>
                                    <Link  href={`/${id}`} >
                                    <a class="button" >Edit</a>
                                    </Link>
                                <button class="button button-primary"
                                onClick={()=> handleDelete({id})}>Delete</button></td>
                                </tr>
                         
                            
                        ))
                        }
                           </tbody>
                            </table>
                    </div>

    )
}
