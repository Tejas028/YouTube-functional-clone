import React from 'react'
import './Navbar.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { useState, useEffect } from 'react';

export default function Navbar({ openSidebar, setOpenSidebar }) {

  const highlightHamBerger = () => {
    document.getElementById('menu').style.backgroundColor = 'rgba(255,255,255,0.1)';
  }

  const unHighlightHamBerger = () => {
    document.getElementById('menu').style.backgroundColor = '#0f0f0f';
  }

  const highlightProfile = () => {
    document.getElementById('signIn').style.backgroundColor = 'rgba(255,255,255,0.1)';
    document.getElementById('signIn').style.border = 'solid 0px rgba(128, 128, 128, 0.3)';
  }

  const unHighlightProfile = () => {
    document.getElementById('signIn').style.backgroundColor = '#0f0f0f';
    document.getElementById('signIn').style.border = 'solid 1px rgba(128, 128, 128, 0.3)';
  }

  const highlightAudio = () => {
    document.getElementById('mic').style.backgroundColor = 'rgba(255,255,255,0.3)';
  }

  const unHighlightAudio = () => {
    document.getElementById('mic').style.backgroundColor = 'rgba(128, 128, 128, 0.2)';
  }

  const changeHamBerger = () => {
    setOpenSidebar(prevMode => {
      return !prevMode;
    });
  };

  // const [hamBerger, setHamBerger]=useState("false");

  return (
    <div className='navbar'>
      <div className="topLeft">
        <div className="hamBerger" onClick={changeHamBerger} onMouseEnter={highlightHamBerger} onMouseLeave={unHighlightHamBerger} id='menu'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none">
            <g>
              <path fill="#FF0000" d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5S5.75 5 4.19 5.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77.42-1.56.42-4.81.42-4.81s0-3.25-.42-4.81z" />
              <polygon fill="#FFFFFF" points="10,15 15,12 10,9" />
            </g>
          </svg>
          <span>YouTube</span>
        </div>
      </div>

      <div className="topCenter">
        <div className="searchBar">
          <div className="searchBox">
            <input type="text" class='searchInput' placeholder='Search' />
          </div>
          <div className="searchIcon">
            <button type='submit'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="audio" id='mic' onMouseEnter={highlightAudio} onMouseLeave={unHighlightAudio}>
          <button className='audioButton'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
              <path d="M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z" />
              <path d="M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="topRight">
        <div className="dots">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
          </svg>
        </div>
        <div className="profile" onMouseEnter={highlightProfile} onMouseLeave={unHighlightProfile} id='signIn'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          Sign in
        </div>
      </div>

    </div>
  )
}
