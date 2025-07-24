// import { useState, useEffect } from "react";

// const Profile = () => {
//   const [employees, setEmployees] = useState([]);
//   const [editingEmployee, setEditingEmployee] = useState(null);
//   const [editForm, setEditForm] = useState({
//     name: "",
//     email: "",
//     status: "active"
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("admin");

//   // Sample admin data
//   const adminData = {
//     name: "Admin User",
//     email: "admin@artisanconnect.in",
//     role: "Administrator",
//     location: "Jaipur, Rajasthan",
//     lastLogin: "2 hours ago",
//     avatar: "https://i.imgur.com/0y8Ftya.png"
//   };

//   useEffect(() => {
//     const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
//     setEmployees(storedEmployees);
//   }, []);

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to remove this employee?")) {
//       const updatedEmployees = employees.filter(emp => emp.id !== id);
//       setEmployees(updatedEmployees);
//       localStorage.setItem("employees", JSON.stringify(updatedEmployees));
//     }
//   };

//   const handleEdit = (employee) => {
//     setEditingEmployee(employee);
//     setEditForm({
//       name: employee.name,
//       email: employee.email,
//       status: employee.status
//     });
//     setActiveTab("employees");
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     const updatedEmployees = employees.map(emp => 
//       emp.id === editingEmployee.id ? { ...emp, ...editForm } : emp
//     );
    
//     setEmployees(updatedEmployees);
//     localStorage.setItem("employees", JSON.stringify(updatedEmployees));
//     setEditingEmployee(null);
//   };

//   const filteredEmployees = employees.filter(emp =>
//     emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     emp.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
//             <p className="mt-2 text-gray-600">Manage your profile and employee records</p>
//           </div>
//           <div className="mt-4 md:mt-0 flex space-x-3">
//             <button
//               onClick={() => setActiveTab("admin")}
//               className={`px-4 py-2 rounded-md ${activeTab === "admin" ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
//             >
//               My Profile
//             </button>
//             <button
//               onClick={() => setActiveTab("employees")}
//               className={`px-4 py-2 rounded-md ${activeTab === "employees" ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
//             >
//               Employees
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="bg-white shadow-xl rounded-lg overflow-hidden">
//           {/* Admin Profile Section */}
//           {activeTab === "admin" && (
//             <div className="p-6 md:p-8">
//               <div className="flex flex-col md:flex-row gap-8">
//                 {/* Admin Card */}
//                 <div className="w-full md:w-1/3 lg:w-1/4">
//                   <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 text-center">
//                     <div className="mx-auto w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden mb-4">
//                       <img
//                         src={adminData.avatar}
//                         alt="Admin Avatar"
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <h2 className="text-xl font-bold text-gray-800">{adminData.name}</h2>
//                     <p className="text-indigo-600 font-medium">{adminData.role}</p>
//                     <div className="mt-4 pt-4 border-t border-gray-200">
//                       <p className="text-sm text-gray-500">Last login: {adminData.lastLogin}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Admin Details */}
//                 <div className="w-full md:w-2/3 lg:w-3/4">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-6">Profile Information</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h4 className="text-sm font-medium text-gray-500 mb-1">Full Name</h4>
//                       <p className="text-lg font-medium text-gray-800">{adminData.name}</p>
//                     </div>
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h4 className="text-sm font-medium text-gray-500 mb-1">Email Address</h4>
//                       <p className="text-lg font-medium text-gray-800">{adminData.email}</p>
//                     </div>
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h4 className="text-sm font-medium text-gray-500 mb-1">Role</h4>
//                       <p className="text-lg font-medium text-gray-800">{adminData.role}</p>
//                     </div>
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
//                       <p className="text-lg font-medium text-gray-800">{adminData.location}</p>
//                     </div>
//                   </div>

//                   {/* Quick Actions */}
//                   <div className="mt-8">
//                     <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                       <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 py-3 px-4 rounded-lg font-medium transition-colors">
//                         Edit Profile
//                       </button>
//                       <button className="bg-green-100 hover:bg-green-200 text-green-800 py-3 px-4 rounded-lg font-medium transition-colors">
//                         Change Password
//                       </button>
//                       <button className="bg-purple-100 hover:bg-purple-200 text-purple-800 py-3 px-4 rounded-lg font-medium transition-colors">
//                         Notification Settings
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Employees Section */}
//           {activeTab === "employees" && (
//             <div className="p-6 md:p-8">
//               <div className="mb-8">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">Employee Management</h2>
//                 <p className="text-gray-600">View and manage all registered employees</p>
//               </div>

//               {/* Search and Add Employee */}
//               <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
//                 <div className="relative flex-grow max-w-md">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder="Search employees..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   />
//                 </div>
//                 <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap">
//                   Add New Employee
//                 </button>
//               </div>

//               {/* Edit Form */}
//               {editingEmployee && (
//                 <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg font-medium text-gray-900">Edit Employee</h3>
//                     <button
//                       onClick={() => setEditingEmployee(null)}
//                       className="text-gray-400 hover:text-gray-500"
//                     >
//                       <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                       </svg>
//                     </button>
//                   </div>
//                   <form onSubmit={handleUpdate}>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//                         <input
//                           type="text"
//                           value={editForm.name}
//                           onChange={(e) => setEditForm({...editForm, name: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                         <input
//                           type="email"
//                           value={editForm.email}
//                           onChange={(e) => setEditForm({...editForm, email: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//                         <select
//                           value={editForm.status}
//                           onChange={(e) => setEditForm({...editForm, status: e.target.value})}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                         >
//                           <option value="active">Active</option>
//                           <option value="inactive">Inactive</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div className="flex justify-end space-x-3">
//                       <button
//                         type="button"
//                         onClick={() => setEditingEmployee(null)}
//                         className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                       >
//                         Save Changes
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               )}

//               {/* Employees Table */}
//               <div className="overflow-x-auto rounded-lg border border-gray-200">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Name
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Email
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Join Date
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {filteredEmployees.length > 0 ? (
//                       filteredEmployees.map((employee) => (
//                         <tr key={employee.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
//                                 <span className="text-indigo-600 font-medium">
//                                   {employee.name.charAt(0).toUpperCase()}
//                                 </span>
//                               </div>
//                               <div className="ml-4">
//                                 <div className="text-sm font-medium text-gray-900">{employee.name}</div>
//                                 <div className="text-sm text-gray-500">{employee.role}</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {employee.email}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {new Date(employee.joinDate).toLocaleDateString()}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                               employee.status === "active" 
//                                 ? "bg-green-100 text-green-800" 
//                                 : "bg-red-100 text-red-800"
//                             }`}>
//                               {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             <button
//                               onClick={() => handleEdit(employee)}
//                               className="text-indigo-600 hover:text-indigo-900 mr-4"
//                             >
//                               Edit
//                             </button>
//                             <button
//                               onClick={() => handleDelete(employee.id)}
//                               className="text-red-600 hover:text-red-900"
//                             >
//                               Remove
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
//                           No employees found
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import { useState, useEffect } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Profile = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    status: "active"
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("admin");

  // Sample admin data
  const adminData = {
    name: "Admin User",
    email: "admin@artisanconnect.in",
    role: "Administrator",
    location: "Jaipur, Rajasthan",
    lastLogin: "2 hours ago",
    avatar: "https://i.imgur.com/0y8Ftya.png",
    bio: "Senior administrator with full system privileges and management capabilities.",
    phone: "+91 98765 43210",
    department: "Management"
  };

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to remove this employee?")) {
      const updatedEmployees = employees.filter(emp => emp.id !== id);
      setEmployees(updatedEmployees);
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setEditForm({
      name: employee.name,
      email: employee.email,
      status: employee.status
    });
    setActiveTab("employees");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedEmployees = employees.map(emp => 
      emp.id === editingEmployee.id ? { ...emp, ...editForm } : emp
    );
    
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setEditingEmployee(null);
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Chart data
  const growthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue Growth',
        data: [12000, 19000, 15000, 28000, 22000, 30000, 35000],
        backgroundColor: '#e8b954',
        borderColor: '#e8b954',
        borderWidth: 2,
        tension: 0.4
      },
      {
        label: 'New Customers',
        data: [400, 700, 550, 900, 600, 800, 1000],
        backgroundColor: '#7a9f79',
        borderColor: '#7a9f79',
        borderWidth: 2,
        tension: 0.4
      }
    ]
  };

  const employeeDistributionData = {
    labels: ['Development', 'Marketing', 'Sales', 'Support', 'Management'],
    datasets: [
      {
        data: [35, 20, 15, 10, 20],
        backgroundColor: [
          '#e8b954',
          '#7a9f79',
          '#5a5a5a',
          '#1a1a1a',
          '#3a3a3a'
        ],
        borderWidth: 1
      }
    ]
  };

  const productCustomerData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Customers',
        data: [1200, 1900, 800, 1500],
        backgroundColor: '#e8b954',
        borderColor: '#e8b954',
        borderWidth: 2
      },
      {
        label: 'Revenue (in k)',
        data: [45, 60, 30, 55],
        backgroundColor: '#7a9f79',
        borderColor: '#7a9f79',
        borderWidth: 2
      }
    ]
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f4f1e9'
        }
      },
      x: {
        grid: {
          color: '#f4f1e9'
        }
      }
    }
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f8f5] py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#1a1a1a]">Admin Dashboard</h1>
            <p className="mt-2 text-[#5a5a5a]">Manage your profile and employee records</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button
              onClick={() => setActiveTab("admin")}
              className={`px-4 py-2 rounded-md font-medium ${activeTab === "admin" ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#5a5a5a] border border-[#e8b954]'}`}
            >
              My Profile
            </button>
            <button
              onClick={() => setActiveTab("employees")}
              className={`px-4 py-2 rounded-md font-medium ${activeTab === "employees" ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#5a5a5a] border border-[#e8b954]'}`}
            >
              Employees
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-[#f4f1e9]">
          {activeTab === "admin" && (
            <div className="p-0">
              {/* Profile Header */}
              <div className="bg-[#1a1a1a] p-6 md:p-8 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="w-24 h-24 rounded-full border-4 border-[#e8b954] overflow-hidden">
                    <img
                      src={adminData.avatar}
                      alt="Admin Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{adminData.name}</h2>
                    <p className="text-[#e8b954] font-medium">{adminData.role}</p>
                    <p className="text-[#7a9f79] mt-1">{adminData.department}</p>
                    <p className="text-gray-300 text-sm mt-2">{adminData.bio}</p>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="p-6 md:p-8">
                {/* Stats Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-[#f9f8f5] p-4 rounded-lg border border-[#f4f1e9]">
                    <p className="text-sm font-medium text-[#5a5a5a]">Total Employees</p>
                    <p className="text-2xl font-bold text-[#1a1a1a]">124</p>
                    <p className="text-xs text-[#7a9f79] mt-1">↑ 12% from last month</p>
                  </div>
                  <div className="bg-[#f9f8f5] p-4 rounded-lg border border-[#f4f1e9]">
                    <p className="text-sm font-medium text-[#5a5a5a]">Active Products</p>
                    <p className="text-2xl font-bold text-[#1a1a1a]">28</p>
                    <p className="text-xs text-[#7a9f79] mt-1">↑ 5 new this quarter</p>
                  </div>
                  <div className="bg-[#f9f8f5] p-4 rounded-lg border border-[#f4f1e9]">
                    <p className="text-sm font-medium text-[#5a5a5a]">Monthly Revenue</p>
                    <p className="text-2xl font-bold text-[#1a1a1a]">$35k</p>
                    <p className="text-xs text-[#7a9f79] mt-1">↑ 18% from last month</p>
                  </div>
                  <div className="bg-[#f9f8f5] p-4 rounded-lg border border-[#f4f1e9]">
                    <p className="text-sm font-medium text-[#5a5a5a]">Customer Satisfaction</p>
                    <p className="text-2xl font-bold text-[#1a1a1a]">94%</p>
                    <p className="text-xs text-[#7a9f79] mt-1">↑ 2% from last quarter</p>
                  </div>
                </div>

                {/* Growth Chart */}
                <div className="bg-[#f9f8f5] p-6 rounded-lg border border-[#f4f1e9] mb-6">
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4 flex items-center">
                    <svg className="w-5 h-5 text-[#e8b954] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Business Growth (Last 6 Months)
                  </h3>
                  <div className="h-80">
                    <Line data={growthData} options={chartOptions} />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Employee Distribution */}
                  <div className="bg-[#f9f8f5] p-6 rounded-lg border border-[#f4f1e9]">
                    <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[#7a9f79] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Employee Distribution
                    </h3>
                    <div className="h-64">
                      <Pie data={employeeDistributionData} options={pieOptions} />
                    </div>
                  </div>

                  {/* Product Performance */}
                  <div className="bg-[#f9f8f5] p-6 rounded-lg border border-[#f4f1e9]">
                    <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[#5a5a5a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      Product Performance
                    </h3>
                    <div className="h-64">
                      <Bar data={productCustomerData} options={chartOptions} />
                    </div>
                  </div>
                </div>

                {/* Personal Info Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#f9f8f5] p-6 rounded-lg border border-[#f4f1e9]">
                    <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[#e8b954] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Personal Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-medium text-[#5a5a5a] uppercase tracking-wider">Full Name</p>
                        <p className="text-[#1a1a1a]">{adminData.name}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-[#5a5a5a] uppercase tracking-wider">Email</p>
                        <p className="text-[#1a1a1a]">{adminData.email}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-[#5a5a5a] uppercase tracking-wider">Phone</p>
                        <p className="text-[#1a1a1a]">{adminData.phone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Work Info Card */}
                  <div className="bg-[#f9f8f5] p-6 rounded-lg border border-[#f4f1e9]">
                    <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4 flex items-center">
                      <svg className="w-5 h-5 text-[#7a9f79] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Work Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-medium text-[#5a5a5a] uppercase tracking-wider">Role</p>
                        <p className="text-[#1a1a1a]">{adminData.role}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-[#5a5a5a] uppercase tracking-wider">Department</p>
                        <p className="text-[#1a1a1a]">{adminData.department}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-[#5a5a5a] uppercase tracking-wider">Location</p>
                        <p className="text-[#1a1a1a]">{adminData.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activity Card */}
                <div className="bg-[#f9f8f5] p-6 rounded-lg border border-[#f4f1e9] mt-6">
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4 flex items-center">
                    <svg className="w-5 h-5 text-[#5a5a5a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-medium text-[#5a5a5a] uppercase tracking-wider">Last Login</p>
                      <p className="text-[#1a1a1a]">{adminData.lastLogin}</p>
                    </div>
                    <div className="pt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#5a5a5a]">Profile Completion</span>
                        <span className="text-[#1a1a1a] font-medium">85%</span>
                      </div>
                      <div className="w-full bg-[#f4f1e9] rounded-full h-2">
                        <div className="bg-[#e8b954] h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#f4f1e9]">
                    <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-white py-2 px-4 rounded-md font-medium transition-colors">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Employees Section */}
          {activeTab === "employees" && (
            <div className="p-6 md:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">Employee Management</h2>
                <p className="text-[#5a5a5a]">View and manage all registered employees</p>
              </div>

              {/* Search and Add Employee */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                <div className="relative flex-grow max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-[#5a5a5a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search employees..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-[#e8b954]/50 rounded-md leading-5 bg-white placeholder-[#5a5a5a] focus:outline-none focus:ring-2 focus:ring-[#e8b954] focus:border-[#e8b954] sm:text-sm"
                  />
                </div>
                <button className="bg-[#1a1a1a] hover:bg-[#3a3a3a] text-white px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors">
                  Add New Employee
                </button>
              </div>

              {/* Edit Form */}
              {editingEmployee && (
                <div className="bg-white p-6 rounded-lg mb-6 border border-[#e8b954]/50 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-[#1a1a1a]">Edit Employee</h3>
                    <button
                      onClick={() => setEditingEmployee(null)}
                      className="text-[#5a5a5a] hover:text-[#1a1a1a]"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-[#5a5a5a] mb-1">Name</label>
                        <input
                          type="text"
                          value={editForm.name}
                          onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                          className="w-full px-3 py-2 border border-[#e8b954]/50 rounded-md shadow-sm focus:outline-none focus:ring-[#e8b954] focus:border-[#e8b954] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5a5a5a] mb-1">Email</label>
                        <input
                          type="email"
                          value={editForm.email}
                          onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                          className="w-full px-3 py-2 border border-[#e8b954]/50 rounded-md shadow-sm focus:outline-none focus:ring-[#e8b954] focus:border-[#e8b954] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#5a5a5a] mb-1">Status</label>
                        <select
                          value={editForm.status}
                          onChange={(e) => setEditForm({...editForm, status: e.target.value})}
                          className="w-full px-3 py-2 border border-[#e8b954]/50 rounded-md shadow-sm focus:outline-none focus:ring-[#e8b954] focus:border-[#e8b954] bg-white"
                        >
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setEditingEmployee(null)}
                        className="px-4 py-2 border border-[#5a5a5a]/20 rounded-md shadow-sm text-sm font-medium text-[#5a5a5a] bg-white hover:bg-[#f9f8f5]"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1a1a1a] hover:bg-[#3a3a3a]"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Employees Table */}
              <div className="overflow-x-auto rounded-lg border border-[#f4f1e9]">
                <table className="min-w-full divide-y divide-[#f4f1e9]">
                  <thead className="bg-[#1a1a1a]">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Join Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-[#f4f1e9]">
                    {filteredEmployees.length > 0 ? (
                      filteredEmployees.map((employee) => (
                        <tr key={employee.id} className="hover:bg-[#f9f8f5]">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#e8b954]/20 flex items-center justify-center">
                                <span className="text-[#1a1a1a] font-medium">
                                  {employee.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-[#1a1a1a]">{employee.name}</div>
                                <div className="text-sm text-[#5a5a5a]">{employee.role}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5a5a5a]">
                            {employee.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5a5a5a]">
                            {new Date(employee.joinDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              employee.status === "active" 
                                ? "bg-[#7a9f79]/20 text-[#7a9f79]" 
                                : "bg-[#5a5a5a]/20 text-[#5a5a5a]"
                            }`}>
                              {employee.status.charAt(0).toUpperCase() + employee.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => handleEdit(employee)}
                              className="text-[#e8b954] hover:text-[#e8b954]/70 mr-4"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(employee.id)}
                              className="text-[#5a5a5a] hover:text-[#1a1a1a]"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="px-6 py-4 text-center text-sm text-[#5a5a5a]">
                          No employees found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;