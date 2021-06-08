import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userAdd } from '../redux/reducers/crudSlice'

const AddFrom =()=> {
    const dispatch = useDispatch()
      const initial = {
        username: '',
        company: ''
      };
    // const [data,setData] = useState(initialState);
    const [values,setValues] = useState(initial);
    const [error,setError] = useState(false);

    const usersAmount = useSelector((state) => state.crud.length);
    
    const handleSumbit=(e)=>{
        e.preventDefault();
        const username= values.username
        const company= values.company
        if(values.username && values.company){
            dispatch(
                userAdd({
                id: usersAmount + 1,
                username,
                company,
              }))
              console.log(values)
            console.log("success")
            setError(false)
        }else{
            setError(true)
        }
        setValues({username: '',
        company: ''})
    
    }
    return (
        <div>          
                    <div className="form-body">
                        <h3>ADD FORM</h3>
                        {error?<p style={{color:'red'}}>all Fileds required</p>:null}
                        <form onSubmit={handleSumbit}>
                        <label htmlFor="username"><h5>username</h5></label>
                        <input 
                        type="text"
                        value={values.username} 
                        name="username" 
                        onChange={(e) => setValues({...values, username:e.target.value})}
                        />
                        <label htmlFor="company"><h5>company</h5></label>
                        <input 
                        type="text"
                        value={values.company} 
                        name="company"
                        onChange={e=>setValues({...values, company:e.target.value})} />
                        <input type="submit" value="submit" />
                        </form>
                    </div>
                </div>
                
    )
}
export default AddFrom