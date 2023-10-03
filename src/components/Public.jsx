import { Link } from "react-router-dom";

import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <header className="public__header">
        <h1>
          Welcome to <span className="nowrap">TechNotes</span>
        </h1>
      </header>
      <main className="public__main">
        
        <p>
        TechNotes is a simple and easy-to-use note-taking app that helps you capture a wide range of digital information and organize it with exceptional features. With NoteWise, you can create specific user roles assigned for specific tasks based on their roles
        </p>
        
      </main>
      <footer>
        <Link to="/login">Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
