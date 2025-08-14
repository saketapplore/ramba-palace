import React, { useState, useEffect } from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const linkitems = [
    {
      icon: FaInstagram,
      path: "",
    },
    {
      icon:FaFacebook,
      path:""
    },{
      icon:FaLinkedin,
      path:""
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
                    {
                      Icon && <Icon className="text-[#575757] h-6 w-6 rounded-[4px] flex items-center justify-center"/>
                    }
                  </div>
                )
              })
            }
          </div>
  )
}

export default IconContainer