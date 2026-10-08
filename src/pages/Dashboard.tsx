import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import userImg from "../assets/user.png"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"
import data from "../assets/data.json"
const Dashboard = () => {
  // for test commit from pc 
  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className="dashboard">
      <div className="bar">
        <BsSearch/>
        <input type="text" placeholder="Search Here" />
        <FaRegBell/>
        <img src={userImg} alt="user" />
      </div>
      <section className="widgetContainer">
        <WidgetItem heading="Users" percent={-25} amount={false} value={458} color="rgb(0 151 255)" />
        <WidgetItem heading="Orders" percent={-89} amount={false} value={456875} color="rgb(137 152 171)" />
        <WidgetItem heading="Revenue" percent={72} amount={true} value={4546875} color="rgb(227,133,182)" />
      </section>
      <section className="graphContainer">
        <div className="revenueChart">
          <h2>Revenue & Transactions</h2>
        </div>
        <div className="dashboardCategories">
          <h2>Inventry</h2>
          <div>
            {data.categories.map(i=>(

            <CategoryItem key={i.heading} 
            value={i.value} heading={i.heading} 
            color={`hsl(${i.value*4},${i.value}%,50%)`} />
            ))}
          </div>
        </div>
      </section>
      </main>
    </div>
  )
}
interface WidgetItemProps {
  heading : string;
  value : number;
  percent: number
  color: string
  amount?: boolean
}
const WidgetItem = ({heading,value,percent,color,amount}:WidgetItemProps)=>(
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount?`$${value}`:value}</h4>
      { percent>0 ? ( 
        <span className="green">
          <HiTrendingUp/> + {percent}%
        </span> ) : ( 
          <span className="red">
            <HiTrendingDown/>  {percent}%
          </span> ) }
    </div>
    <div className="widgetCircle"
    style={{
      background: `conic-gradient(${color} ${Math.abs(percent)/100*360}deg, rgb(255,255,255) 0)`
      // `conic-gradient(red 360}deg, rgb(255,255,255) 0)`
    }}
    >
      <span style={{color}}>{percent}%  </span>
    </div>
           
  </article>
)
interface CategoryItemProps {
  color:string;
  value:number;
  heading:string
}
const CategoryItem = ({color,heading,value}:CategoryItemProps)=>(
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor:color,
        width: `${value}%`
      }}></div>
    </div>
    <span>{value}%</span>
  </div>
)
export default Dashboard