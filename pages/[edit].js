import {useState} from 'react'
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from '../redux/reducers/crudSlice'

export default function Edit() {
    const router = useRouter();
    const ids = router.query.edit;
    const crud = useSelector((state) =>state.crud.find((user) => user.id === +ids));
    let stateuser = crud.username
    let statecompany = crud.company
    const dispatch =useDispatch();


    const [error,setError] = useState(false);
    const [data,setData] = useState({
        username: stateuser,
        company: statecompany
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        const username= data.username
        const company= data.company
        console.log(data);
        if(username && company){
            dispatch(
                userUpdate({
                    id: +ids,
                    username,
                    company,
                })
            )
            router.push('/')
            setError(false)
        }else{setError(true)}

    }

    return (
        <div>
           <div className="container">
               <div className="row">
                   <div className="three columns">
                        <h3>Edit FORM</h3>
                        {error?<p style={{color:'red'}}>all Fileds required</p>:null}
                   <form onSubmit={handleSubmit}>
                        <label htmlFor="username"><h2>username</h2></label>
                        <input 
                        type="text"
                        value={data.username} 
                        name="username" 
                        onChange={(e) => setData({...data, username:e.target.value})}
                        />
                        <label htmlFor="company"><h2>company</h2></label>
                        <input 
                        type="text"
                        value={data.company} 
                        name="company"
                        onChange={e=>setData({...data, company:e.target.value})} />
                        <input type="button" value="back" onClick={()=>(router.push('/'))} />
                        <input type="submit" value="submit" />
                        </form>
                   </div>
               </div>
           </div>
        </div>
    )
}
