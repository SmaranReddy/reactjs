import React from 'react';

function Page() {
  return (
    <div style={{ padding: '0', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', color: '#333' }}>
      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '30px', marginTop: '0' }}>
        {/* Ensure the logo is in the public folder */}
        <img src="/logo.jpg" alt="Logo" style={{ height: '200px', width: '200px' }} />
      </div>

      {/* About Us Content */}
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', color: 'teal' }}>About Us</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
        Welcome to <strong>Crafting Comfort</strong>, where architecture meets innovation! We are a passionate team of
        designers, developers, and architects dedicated to transforming the way you experience home design. With our
        state-of-the-art, 3D interactive website, we empower you to visualize and customize your dream home, ensuring it
        is not only functional but also a true reflection of your style and comfort.
      </p>
      
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px', color: 'teal' }}>Who We Are</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
        At Crafting Comfort, we believe that home is more than just a space—it’s a sanctuary where every detail should 
        resonate with who you are. Founded by a team of architecture and technology enthusiasts, we bridge the gap 
        between modern design and customer personalization. Our mission is to make home design easy, fun, and accessible, 
        allowing you to take charge of every aspect of your home’s layout and aesthetic.
      </p>
      
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px', color: 'teal' }}>What We Do</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
        Our platform gives you the power to explore and customize architectural designs in real-time. Whether you want 
        to tweak the layout, experiment with materials, or choose colors that match your personality, our interactive 
        tools make it possible. We offer a wide range of design templates to inspire you, or you can start from scratch 
        and build your home exactly the way you want.
      </p>
      
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px', color: 'teal' }}>Why Choose Us</h2>
      <ul style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', listStyleType: 'disc', paddingLeft: '20px' }}>
        <li><strong>Interactive 3D Models:</strong> Visualize every aspect of your home before it’s built with our 
        user-friendly, immersive 3D interface.</li>
        <li><strong>Customization at Its Best:</strong> Choose everything from flooring to fixtures with a few clicks, 
        making it easier to tailor your home to your taste.</li>
        <li><strong>Collaborative Approach:</strong> Work closely with our team of experts who are always ready to guide 
        you through the design process.</li>
        <li><strong>Cutting-Edge Technology:</strong> Using the latest in 3D modeling and web technologies, we provide 
        an innovative platform to make your dream home a reality.</li>
      </ul>

      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px', color: 'teal' }}>Our Vision</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '20px' }}>
        We aim to revolutionize the home design process by putting the power in your hands. Our vision is to create a 
        seamless, interactive experience where creativity knows no bounds. With Crafting Comfort, you don’t just build a 
        house—you craft a home that suits your lifestyle, your preferences, and your comfort.
      </p>
    </div>
  );
}

export default Page;
