import Navbar from './components/Header';
import Body from './components/Body'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (<div className="bg-slate-500 bg-cover bg-center h-screen w-screen opacity-95 text-white">
    <Navbar/>
    <Body/>
    </div>
  )
}