import "./styles.css";
import React from "react";
import LeftNavbar from "./LeftNavbar";
import UsersSection from "./UsersSection";

const App = () => {
  return (
    <div style={styles.container}>
      {/* Left Navbar */}
      <LeftNavbar />

      {/* Main Content Area */}
      <div style={styles.content}>
        <UsersSection />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#e1edf7",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  },
};

export default App;
