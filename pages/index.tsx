import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";


export default function Home() {

  const getHttp=async()=>{
      // network('post','/login',{},(res)=>{
      //   console.log(res)
      // })
  }
  return (
    <div className="app">
      <Header/>
        <div>
          <Link href={'/user'}><a>个人中心</a></Link>
          <button onClick={()=>getHttp()}>get login</button>
        </div>
      <Footer/>
    </div>
  )
}

