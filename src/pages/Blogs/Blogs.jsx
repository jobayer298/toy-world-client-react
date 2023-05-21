import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle("Blogs")
    return (
      <div className="w-1/2 mx-auto my-7 ">
        <div className="mt-4">
          <h3 className="font-bold text-2xl text-indigo-500">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p>
            ans: the refresh token only goes back to the authorization server,
            the access token goes to the (RS) resource server. After login there is time limit . after that time you will be automatically logged out.Then users have to login again. We can store this toke in browser cookie and localstorage. Browser cookie is the best option.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-2xl text-indigo-500">
            2. Compare SQL and NoSQL databases?
          </h3>
          <p>
            ans: SQL database are vertically organized and NoSQL databases are
            horizontally scalable. Sql database is table based and structured
            and each table is connect to another table. On the other hand there
            is no table in nosql database.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-2xl text-indigo-500">
            3. What is express js? What is Nest JS (google it)?
          </h3>
          <p>
            ans: Express js is a framework of nodejs that helps to manage server
            and route. And nestjs is one of the fastest nodejs framework for
            building scalable, maintainable application using nodejs.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-2xl text-indigo-500">
            4. What is MongoDB aggregate and how does it work (google it)?
          </h3>
          <p>
            ans: MongoDB's aggregate is a powerful feature that allows you to
            perform complex data analysis and transformation operations on
            MongoDB collections. It provides a flexible and efficient way to
            process and combine data from multiple documents in a collection.Thats it.
          </p>
        </div>
      </div>
    );
};

export default Blogs;