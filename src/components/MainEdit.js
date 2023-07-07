import React from 'react'

import Downtload from '../img/Downtload.png';

function MainEdit() {


    return (
        <div className='wrapper'>
            <header className="header-two">
                <button id="but">EDIT TASK</button>
                <button id="create-close-button" className="butt">X</button>
            </header>

            <main className="basic-page-create">
                <img className="icon-loading-two" src={Downtload} alt="loading" />
                <div id="new-task-form">
                    <div className="basic-page-creat-two">
                        <h2>Title</h2>
                        <input id="task-title" type="title" placeholder="Learn Dart OOP" className="title" />
                    </div>
                    <div className="basic-page-creat-three">
                        <h2>Discription</h2>
                        <textarea name="deacriprion" id="task-description" cols="30" rows="10" className="discription" placeholder="Learn dart oop, hihi, hehe"></textarea>
                    </div>
                    <div className="basic-page-creat-four">
                        <h2>Date end</h2>
                        <input id="task-end-date" type="date" placeholder="Click here to choose date"
                            className="date-end" />
                    </div>
                </div>
            </main>

            <footer className="basement-two">
                <div>
                    <button id="add-page" className="basment-but-two">Done !</button>
                    <button id="cancel" className="basment-but-thre">Delete</button>
                </div>
            </footer>
        </div>
    );
}

export default MainEdit;