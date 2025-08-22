import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-light text-primary-foreground p-3 sm:p-4 mt-auto" style={{backgroundColor: 'maroon'}}>
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base font-medium">
          NEW FOUNDATION APOSTOLIC FAITH CHURCH
        </p>
      </div>
    </footer>
  );
};

export default Footer;