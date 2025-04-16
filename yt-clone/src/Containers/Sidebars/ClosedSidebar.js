import React from 'react'
import './ClosedSidebar.css'

export default function Sidebar() {
  const toggleHighlight = (event, highlight) => {
    const parentDiv = event.currentTarget; // Ensures the event always targets the div
    parentDiv.style.backgroundColor = highlight
      ? 'rgba(255,255,255,0.1)'
      : '#0f0f0f';
  };

  return (
    <div className='sideBar'>
      <div className="home" id='homeButton' onMouseEnter={(e) => toggleHighlight(e, true)} onMouseLeave={(e) => toggleHighlight(e, false)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
        Home
      </div>
      <div className="shorts" onMouseEnter={(e) => toggleHighlight(e, true)} onMouseLeave={(e) => toggleHighlight(e, false)}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="80" viewBox="0 0 48 48" stroke="white" stroke-width="2">
          <path fill="#0f0f0f" d="M29.103,2.631c4.217-2.198,9.438-0.597,11.658,3.577c2.22,4.173,0.6,9.337-3.617,11.534l-3.468,1.823	c2.987,0.109,5.836,1.75,7.328,4.555c2.22,4.173,0.604,9.337-3.617,11.534L18.897,45.37c-4.217,2.198-9.438,0.597-11.658-3.577	s-0.6-9.337,3.617-11.534l3.468-1.823c-2.987-0.109-5.836-1.75-7.328-4.555c-2.22-4.173-0.6-9.337,3.617-11.534	C10.612,12.346,29.103,2.631,29.103,2.631z M19.122,17.12l11.192,6.91l-11.192,6.877C19.122,30.907,19.122,17.12,19.122,17.12z"></path>
          <path fill="white" d="M19.122,17.12v13.787l11.192-6.877L19.122,17.12z"></path>
        </svg>
        Shorts
      </div>
      <div className="subscriptions" onMouseEnter={(e) => toggleHighlight(e, true)} onMouseLeave={(e) => toggleHighlight(e, false)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={25}>
          <rect x="96" y="48" width="320" height="20" rx="10" ry="10" fill="white" />
          <rect x="64" y="104" width="384" height="20" rx="10" ry="10" fill="white" />

          <rect x="32" y="160" width="448" height="320" rx="24" ry="24" stroke="white" stroke-width="24" fill="none" />

          <path d="M192 256 L192 384 L352 320 Z" fill="white" />
        </svg>
        Subscriptions
      </div>
      <div className="you" onMouseEnter={(e) => toggleHighlight(e, true)} onMouseLeave={(e) => toggleHighlight(e, false)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        You
      </div>
      <div className="history" onMouseEnter={(e) => toggleHighlight(e, true)} onMouseLeave={(e) => toggleHighlight(e, false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.203 4.83c-1.74-.534-3.614-.418-5.274.327-1.354.608-2.49 1.6-3.273 2.843H8.25c.414 0 .75.336.75.75s-.336.75-.75.75H3V4.25c0-.414.336-.75.75-.75s.75.336.75.75v2.775c.935-1.41 2.254-2.536 3.815-3.236 1.992-.894 4.241-1.033 6.328-.392 2.088.641 3.87 2.02 5.017 3.878 1.146 1.858 1.578 4.07 1.215 6.223-.364 2.153-1.498 4.1-3.19 5.48-1.693 1.379-3.83 2.095-6.012 2.016-2.182-.08-4.26-.949-5.849-2.447-1.588-1.499-2.578-3.523-2.784-5.697-.039-.412.264-.778.676-.817.412-.04.778.263.818.675.171 1.812.996 3.499 2.32 4.748 1.323 1.248 3.055 1.973 4.874 2.04 1.818.065 3.598-.532 5.01-1.681 1.41-1.15 2.355-2.773 2.657-4.567.303-1.794-.056-3.637-1.012-5.186-.955-1.548-2.44-2.697-4.18-3.231ZM12.75 7.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.886l.314.224 3.5 2.5c.337.241.806.163 1.046-.174.241-.337.163-.806-.174-1.046l-3.186-2.276V7.5Z" />
        </svg>        History
      </div>
    </div>
  )
}
