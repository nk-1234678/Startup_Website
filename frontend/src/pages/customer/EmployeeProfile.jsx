import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const EmployeeProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/employee/profile", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setProfile(res.data.employee);
      } catch (err) {
        console.error("Failed to load profile:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.token) {
      fetchProfile();
    }
  }, [user]);

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-[#f9f8f5]">
      <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-[#f4f1e9] max-w-md w-full">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-24 w-24 rounded-full bg-[#f4f1e9] mb-4"></div>
          <div className="h-6 w-3/4 bg-[#f4f1e9] rounded mb-2"></div>
          <div className="h-4 w-1/2 bg-[#f4f1e9] rounded"></div>
        </div>
      </div>
    </div>
  );

  if (!profile) return (
    <div className="flex items-center justify-center h-screen bg-[#f9f8f5]">
      <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-[#f4f1e9] max-w-md w-full">
        <div className="text-[#e8b954] mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">Profile Unavailable</h3>
        <p className="text-[#5a5a5a] mb-4">Could not load your profile information.</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-[#e8b954] hover:bg-[#e8b954]/90 text-[#1a1a1a] rounded-md font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f9f8f5] p-2 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">My Profile</h1>
            <p className="text-[#5a5a5a] mt-1">Welcome back, {profile.name}</p>
          </div>
          <div className="mt-4 md:mt-0 bg-[#f4f1e9] px-4 py-2 rounded-lg">
            <p className="text-sm text-[#5a5a5a]">Last login: {new Date().toLocaleString()}</p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-[#f4f1e9] overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full bg-[#e8b954]/10 flex items-center justify-center border-4 border-[#e8b954]/30">
                <span className="text-4xl font-bold text-[#e8b954]">
                  {profile.name.charAt(0).toUpperCase()}
                </span>
              </div>

              {/* Profile Details */}
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-[#1a1a1a]">{profile.name}</h2>
                  <p className="text-[#7a9f79] font-medium">{profile.position}</p>
                  <p className="text-sm text-[#5a5a5a] mt-1">{profile.department || 'No department specified'}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-[#5a5a5a]">Email</p>
                    <p className="text-[#1a1a1a]">{profile.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#5a5a5a]">Employee ID</p>
                    <p className="text-[#1a1a1a]">{profile.employeeId || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#5a5a5a]">Join Date</p>
                    <p className="text-[#1a1a1a]">
                      {new Date(profile.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#5a5a5a]">Status</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#7a9f79]/20 text-[#7a9f79]">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-[#f4f1e9]">
            <p className="text-sm text-[#5a5a5a]">Completed Tasks</p>
            <p className="text-2xl font-bold text-[#1a1a1a] mt-1">24</p>
            <p className="text-xs text-[#7a9f79] mt-1">↑ 12% from last month</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-[#f4f1e9]">
            <p className="text-sm text-[#5a5a5a]">Current Projects</p>
            <p className="text-2xl font-bold text-[#1a1a1a] mt-1">3</p>
            <p className="text-xs text-[#5a5a5a] mt-1">No change</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-[#f4f1e9]">
            <p className="text-sm text-[#5a5a5a]">Upcoming Deadlines</p>
            <p className="text-2xl font-bold text-[#1a1a1a] mt-1">2</p>
            <p className="text-xs text-[#5a5a5a] mt-1">Next: Tomorrow</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-[#f4f1e9]">
            <p className="text-sm text-[#5a5a5a]">Performance</p>
            <p className="text-2xl font-bold text-[#1a1a1a] mt-1">92%</p>
            <p className="text-xs text-[#7a9f79] mt-1">↑ 5% from last quarter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;