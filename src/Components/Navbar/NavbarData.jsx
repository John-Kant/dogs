import React from 'react';
import { Link } from "react-router-dom";
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: <Link to="/"></Link>,
    text: 'home',
  },
  {
    id: 2,
    url: <Link to="/about"></Link>,
    text: 'about',
  },
  {
    id: 3,
    url: <Link to="/projects"></Link>,
    text: 'projects',
  },
  {
    id: 4,
    url: <Link to="/contact"></Link>,
    text: 'contact',
  },
  {
    id: 5,
    url: <Link to="/profile"></Link>,
    text: 'profile',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
];
