/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import tw from "twin.macro"

import React from "react"
import LinkedinIcon from "../Icons/Linkedin"
import MediumIcon from "../Icons/Medium"
import TwitterIcon from "../Icons/Twitter"
import GithubIcon from "../Icons/Github"

const Footer = () => {
  return (
    <div>
      <footer tw="flex flex-row items-center justify-center w-full text-gray-900 bg-blue-100 text-sm mt-4">
        Developed by Faseeh Ahmed.
        <a href="">
          <LinkedinIcon tw="h-3 w-3 mx-1" />
        </a>
        <a href="">
          <MediumIcon tw="h-3 w-3 mx-1" />
        </a>
        <a href="">
          <GithubIcon tw="h-3 w-3 mx-1" />
        </a>
        <a href="">
          <TwitterIcon tw="h-3 w-3 mx-1" />
        </a>
      </footer>
    </div>
  )
}

export default Footer
