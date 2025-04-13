"use client";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2  md:px-20 py-16 mt-30">
      <footer className="bg-[#0B1221] text-white px-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">General</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">FAQ Section</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Important links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Current Openings</a></li>
            <li><a href="#">Company Partnerships</a></li>
            <li><a href="#">Internship Opportunities</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Reddit</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Slack</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-400 mt-10">
        © 2025 <span className="font-medium">TBD</span>. All Rights Reserved.
      </div>
    </footer>
    </div>
    
  );
};

export default Footer;
