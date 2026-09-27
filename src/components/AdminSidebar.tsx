import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon2Fill, RiDashboardFill, RiShoppingBagFill } from "react-icons/ri";
import {   useLocation,   } from "react-router-dom";
import Li from "./Li";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <Li url="/admin/dashboard" text="Dashboard" Icon={RiDashboardFill} location={location} />
          <Li url="/admin/products" text="Products" Icon={RiShoppingBagFill} location={location} />
          <Li url="/admin/customers" text="Customers" Icon={IoIosPeople} location={location} />
          <Li url="/admin/transaction" text="Transaction" Icon={AiFillFileText} location={location} />
          
        </ul>
      </div>
      <div>
        <h5>Charts</h5>
        <ul>
          <Li url="/admin/charts/bar" text="Bar Chart" Icon={FaChartBar} location={location} />
          <Li url="/admin/charts/pie" text="Pie Chart" Icon={FaChartPie} location={location} />
          <Li url="/admin/charts/line" text="Line Chart" Icon={FaChartLine} location={location} />
          
        </ul>
      </div>
      <div>
        <h5>Apps</h5>
        <ul>
          <Li url="/admin/apps/stopwatch" text="Stopwatch" Icon={FaStopwatch} location={location} />
          <Li url="/admin/apps/coupon" text="Coupon" Icon={RiCoupon2Fill} location={location} />
          <Li url="/admin/apps/toss" text="Toss" Icon={FaGamepad} location={location} />
          
        </ul>
      </div>
    </aside>
  );
};

export default AdminSidebar;
