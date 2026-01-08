import "./Profile.css";
import { 
  FaIndustry, 
  FaMapMarkerAlt, 
  FaIdCard, 
  FaShieldAlt, 
  FaStar, 
  FaMoneyBillWave 
} from "react-icons/fa";
import { MdFactory } from "react-icons/md";

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">

        {/* HEADER */}
        <div className="profile-header">
          <div className="profile-avatar">
            <MdFactory size={36} />
          </div>

          <div>
            <h1>ABC Industries</h1>
            <p className="profile-subtitle">Manufacturing Unit • Active</p>
          </div>
        </div>

        <div className="divider"></div>

        {/* DETAILS */}
        <div className="profile-details">

          <div className="detail-box">
            <div className="icon-circle">
              <FaIdCard />
            </div>
            <div>
              <span className="label">License ID</span>
              <span className="value">IND-2345</span>
            </div>
          </div>

          <div className="detail-box">
            <div className="icon-circle">
              <FaMapMarkerAlt />
            </div>
            <div>
              <span className="label">Location</span>
              <span className="value">Hyderabad, Telangana</span>
            </div>
          </div>

          <div className="detail-box">
            <div className="icon-circle">
              <FaIndustry />
            </div>
            <div>
              <span className="label">Industry Type</span>
              <span className="value">Chemical Manufacturing</span>
            </div>
          </div>

          <div className="detail-box">
            <div className="icon-circle green">
              <FaShieldAlt />
            </div>
            <div>
              <span className="label">Compliance Status</span>
              <span className="value safe">SAFE</span>
            </div>
          </div>

        </div>

        {/* EXTRA INFO */}
        <div className="profile-extra">

          <div className="extra-box">
            <FaIndustry className="extra-icon" />
            <h3>Production Capacity</h3>
            <p>1200 Units / Month</p>
          </div>

          <div className="extra-box">
            <FaStar className="extra-icon" />
            <h3>Environmental Rating</h3>
            <p>⭐ 4.5 / 5</p>
          </div>

          <div className="extra-box">
            <FaMoneyBillWave className="extra-icon" />
            <h3>Total Fines</h3>
            <p>₹ 1,500</p>
          </div>

        </div>

      </div>
    </div>
  );
}
