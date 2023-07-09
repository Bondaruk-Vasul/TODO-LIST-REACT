import React, { useState } from 'react';
import TodoModal from '../components/TodoModal';
import AppContent from '../components/AppContent';
import './MainList.css'

import Downtload from '../img/Downtload.png';
import Add from '../img/Add.png';

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);


    return (
        <div className='wrapper'>
            <header className="header">
                <img className="icon-loading" src={Downtload} alt="loading" />
            </header >

            <main className="main">
                <section className="basic-two">
                    <div className="header-count">
                        <strong id="count">0</strong>
                        <span><strong>Todos</strong></span>
                    </div>
                    <div id="view-all">
                        <span>
                            <p className="date"></p>
                            <strong className="view-all">
                                View all
                            </strong>
                        </span>
                    </div>
                </section>

                <section className="basic-three">
                    <form action="" className="date-task-one">
                        <h2 className="title-date-task">Date Task</h2>
                    </form>
                    <div>
                        <AppContent />
                    </div>
                </section>
            </main>

            <div className="footer">
                <button onClick={() => setModalOpen(true)} id="go-to-create"><img className="icon-button" src={Add} alt="Plus" /></button>
                <TodoModal type="add" modalOpen={modalOpen} setModalOpen={() => setModalOpen(false)} />
            </div>
            
        </div>
    );
}



export default Home;