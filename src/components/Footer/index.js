import React from 'react';

const Footer = ({ footerLinks }) => {
  return (
    <div className="Footer">
      <ul>
        {footerLinks.map((l, i) => (
          <li key={i} className="footer-link">
            <a href="/">{l}</a>
          </li>
        ))}
      </ul>
      <hr />
      <p>
        Developed by{' '}
        <a href="https://www.linkedin.com/in/cvarvaroi/">Constantin Varvaroi</a>
      </p>
      <p>
        Check out the code on{' '}
        <a href="https://github.com/cvssea/goldwin-test">GitHub</a>
      </p>
    </div>
  );
};

Footer.defaultProps = {
  footerLinks: [
    'Terms & Conditions',
    'Cookie Policy',
    'Responsible Gambling',
    'Privacy Policy',
    'Banking Information',
    'Reward Plan',
  ],
};

export default Footer;
