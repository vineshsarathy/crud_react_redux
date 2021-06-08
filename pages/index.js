import AddForm from '../components/addFrom'
import List from '../components/list'

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="row wrapper">
          <div className="three columns">
           <AddForm/>
          </div>
          <div className="nine columns">
           <List/>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}
