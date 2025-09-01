import React, { useState, useEffect } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const linkitems = [
    {
      icon: FaInstagram,
      path: "https://www.instagram.com/rambhapalace?igsh=MWpkeTRncGhlbXNpNw%3D%3D&utm_source=qr",
    },
    {
      icon:FaFacebook,
      path:"https://www.facebook.com/share/1753mtttzW/?mibextid=wwXIfr"
    },{
      icon:FaLinkedin,
      path:"https://www.linkedin.com/company/rambha-palace/"
    }
  ]

const IconContainer = () => {
  return (
    <div className="flex md:ml-[90px] flex-row gap-4">
            {
              linkitems?.map((item)=> {
                const Icon = item.icon;
                return (
                  <div key={item.path}>
                    {item.path ? (
                      <a 
                        href={item.path} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#575757] hover:text-[#374151] transition-colors"
                      >
                        {Icon && <Icon className="h-6 w-6 rounded-[4px] flex items-center justify-center"/>}
                      </a>
                    ) : (
                      Icon && <Icon className="text-[#575757] h-6 w-6 rounded-[4px] flex items-center justify-center"/>
                    )}
                  </div>
                )
              })
            }
          </div>
  )
}

export default IconContainer