import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div className="bg-home">
    <Header />
    <h1 className="home-h1">Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home
