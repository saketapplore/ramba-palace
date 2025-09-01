import React, { useState, useEffect } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const linkitems = [
    {
      icon: FaInstagram,
      path: "https://www.instagram.com/_hiddenindia_/",
    },
    {
      icon:FaFacebook,
      path:"https://www.facebook.com/rambhapalace?mibextid=LQQJ4d"
    },{
      icon:FaLinkedin,
      path:"https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGXzUt9DlSJRAAAAZjwfz_A8O4FX7PZEkrPklt4-Zbc0LjNskMSPC5fAmR4DlDb1cCnPvF6H1Qieml_rht0G_r6GRljJkKpwARU1dWPqX6gUFuTB2dSgZuFL7NVDHPWn0DPmdk=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fhidden-india"
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