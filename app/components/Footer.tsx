const Footer = () => {
  return (
    <footer className="bg-gray-500 py-6 BlogFooter">
      <div className="container mx-auto px-4">
      <img src='/images/Blog-Logo.png' className='logo' style={{float:"left"}}/>
        <p style={{display:"inline",float:"right"}} className="text-center text-white-800">&copy; 2024 BlogPost</p>
      </div>
    </footer>
  );
};

export default Footer;
