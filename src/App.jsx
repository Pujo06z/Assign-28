import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Greeting from './Greeting'
// import UserProfile from './UserProfile';

import React from 'react'
// import ProductList from './Product'

// import JobPosting from './JobPosting';
// function App(){
//   const products = [
//   { id: 1, name: "Áo", price: 200, inStock: false },
//   { id: 2, name: "Quần", price: 150, inStock: true },
//   { id: 3, name: "Giày", price: 300, inStock: true }
// ];
//   const [cart,setCart]=React.useState([]);
//   const handleAdd=(id)=>{
//     console.log("Add",id);
//     setCart( prev => [...prev,id]);
//   }
//   return(
//     //bai 1
//     // <Greeting/>
//     //bai 2
//     // <div> 
//     //   <UserProfile  name="Nguyễn Văn A" age={25} job="Lập trình viên"  isPremium={true} />

//     //    <UserProfile name="Trần Thị B"  age={22} job="Designer" isPremium={false} />

//     // // </div>
//     // Bai 3 Product
//     <div>
//       <h2>Danh sách sản phẩm</h2>
//       <ProductList   
//         products={products}
//         onAddtoCart={handleAdd}
//       />

//       <h3>Cart: {cart.join(", ")}</h3>
//     </div>

//   )
// }
// export default App;
//bai 4
// function App() {
//   const handleApply = () => {
//     alert("Đã gửi đơn ứng tuyển!");
//   };

//   // Dữ liệu mẫu (Có một số chỗ cố tình làm sai để test PropTypes)
//   const jobData = {
//     title: "Senior React Developer", // Đúng: string
//     company: {
//       name: "Tech Solutions",
//       logo: "https://tse2.mm.bing.net/th/id/OIP.U3NipjQ4cZToqe9_MKCa1AHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
//     }, // Đúng: object shape

//     // THỬ NGHIỆM LỖI:
//     type: "remote", // SAI: PropTypes chỉ cho phép 'fulltime', 'parttime', 'freelance'

//     salary: {
//       min: "5000", // SAI: PropTypes yêu cầu number, nhưng đây là string
//       max: 10000,
//       currency: "USD"
//     },

//     skills: ["React", "JavaScript", 2026], // SAI: Có một phần tử là number trong mảng string
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Danh sách việc làm</h1>

//       {/* Truyền dữ liệu vào component */}
//       <JobPosting
//         title={jobData.title}
//         company={jobData.company}
//         type={jobData.type}
//         salary={jobData.salary}
//         skills={jobData.skills}
//         onApply={handleApply}
//       />

//       {/* THỬ NGHIỆM LỖI THIẾU PROP BẮT BUỘC: 
//           Component dưới đây thiếu 'onApply' và 'company' -> Console sẽ báo lỗi đỏ/vàng ngay */}
//       {/* <hr />
//       <h2>Test lỗi thiếu props:</h2>
//       <JobPosting title="Intern Dev" /> */}
//     </div>
//   );
// }
// export default App;
//bai 5
import StatsGrid from './StatsGrid'
import FilterBar from './FilterBar'
const ALL_DATA = [
  { label: 'Doanh thu', value: 1200, unit: '$', trend: 'up', category: 'Finance' },
  { label: 'Người dùng', value: 350, trend: 'neutral', category: 'Users' },
  { label: 'Chi phí', value: 400, unit: '$', trend: 'down', category: 'Finance' },
];
function App() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Finance', 'Users'];

    // Logic lọc dữ liệu
    const filteredStats = filter === 'All'
      ? ALL_DATA
      : ALL_DATA.filter(item => item.category === filter);

    return (
      <div>
        <h2>Mini Dashboard</h2>
        <FilterBar
          options={categories}
          selected={filter}
          onSelect={(val) => setFilter(val)}
        />
        <StatsGrid stats={filteredStats} />
      </div>
    );
  };
export default App;