import React from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Collapse() {
     const [isCollaspeSide, setIsCollaspeSide] = React.useState(false)
     const [isCollaspe, setIsCollaspe] = React.useState(false)
     const sidebarRef = React.useRef(null);
     const collapseRef = React.useRef(null);

     return (
          <>
               {!isCollaspeSide &&
                    <div
                         onClick={() => {
                              setIsCollaspeSide((prev) => {
                                   console.log(`ChangeSide to ${!prev}`)
                                   return !prev
                              })
                         }}
                         className='btn-expand'>Expand/Collapse</div>
               }
               <CSSTransition nodeRef={sidebarRef} in={isCollaspeSide} timeout={500} classNames="sidebar" unmountOnExit>
                    <>
                         {isCollaspeSide &&
                              <div ref={sidebarRef} className='sidebar'>
                                   <div className='collapse-container'>
                                        <div onClick={() => {
                                             setIsCollaspeSide((prev) => {
                                                  console.log(`Change to ${!prev}`)
                                                  return false
                                             })
                                        }} className='menuCollapse'>Close</div>
                                        <div onClick={() => {
                                             setIsCollaspe((prev) => {
                                                  console.log(`Change to ${!prev}`)
                                                  return !prev
                                             })
                                        }} className='menuCollapse'>Main</div>
                                        <CSSTransition nodeRef={collapseRef} in={isCollaspe} timeout={200} classNames="collapse-option">
                                             <div ref={collapseRef} className='collapse-option'>
                                                  <div>option 1</div>
                                                  <div>option 2</div>
                                                  <div>option 3</div>
                                             </div>
                                        </CSSTransition>
                                   </div>
                              </div>
                         }
                    </>
               </CSSTransition>
          </>
     )
}
