import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppContent } from '../../components/AppContent';

import MiniLogo from '../../assets/img/MiniLogo.png';
import Group from '../../assets/img/Group.png';

import './style.css';



export const TodoList = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    console.log(search)    

  return (
    <div className="wrapper">
          <header className="header">
        <img className="icon-loading" src={MiniLogo} alt="loading" />
      </header>

      <main className="main">
              <section className="basic-two">
                  <input className='search' placeholder='type to search' value={search} onChange={(e) => setSearch(e.target.value)}/>
                  <button className='view-all'>All</button>
                  <button className='view-all'>Todo</button>
                  <button className='view-all'>Done</button>
                   <button className='view-all'>Delete</button>
        </section>

        <section className="basic-three">
          <form action="" className="date-task-one">
            <div className="title-date-task">Date Created</div>
            <div className="title-date-task">Date End</div>
            <div className="title-date-task">Title</div>
            <div className="title-date">Description</div>
          </form>
              </section>
              <div>
                  <AppContent />
              </div>
      </main>

          <div className="footer">
              <NavLink to="/create" >
                   <button id="go-to-create">
                      <img className="icon-button" src={Group} alt="Plus" />
                    </button>
              </NavLink>
      </div>
    </div>
  );
};
