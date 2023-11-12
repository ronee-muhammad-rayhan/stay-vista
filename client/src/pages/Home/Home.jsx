// import { useSearchParams } from "react-router-dom"
import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {
  // const [params, setParams] = useSearchParams()
  // const category = params.get('category')
  // console.log(category);
  return (
    <div>
      {/* Categories section */}
      <Categories />
      {/* Rooms section */}
      <Rooms></Rooms>
    </div>
  )
}

export default Home
