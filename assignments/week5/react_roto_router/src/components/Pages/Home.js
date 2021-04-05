import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="pt-3 page-home page">
                <h1>Home Page</h1>
            </div>
            <div className="container tc tb">
                <p>We guarantee you won't find our high quality services anywhere else.</p>
                <img className="inline-block mr-1" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGx1bWJpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt={"plumbing"} height="300px"/>
                <img className="inline-block mr-1" src="https://images.unsplash.com/photo-1601997123254-a9f1ad6a756b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGx1bWJpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt={"plumbing"} height="300px"/>
                <img className="inline-block mr-1" src="https://images.unsplash.com/photo-1562159937-194305937c6a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8cGx1bWJpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt={"plumbing"} height="300px" width="925px"/>
            </div>
        </div>
    );
}

export default Home;